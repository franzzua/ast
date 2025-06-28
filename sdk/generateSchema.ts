import {
	BooleanLiteral, Identifier,
	Module,
	parseFileSync, StringLiteral, TsArrayType,
	TsInterfaceDeclaration, TsKeywordType, TsKeywordTypeKind, TsLiteralType, TsParenthesizedType,
	TsTypeAliasDeclaration,
	TsTypeReference, TsUnionType
} from "@swc/core";
import {resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {Node, OptionalChainingExpression} from "@swc/types";
import {writeFile} from "node:fs/promises";
import {TSPropertySignature} from "oxc-parser";
import {TsMethodSignature} from "./swc/TsMethodSignature";
import {ForOfStatement} from "./swc/ForOfStatement";

const file = fileURLToPath(import.meta.resolve("@swc/types"));

const decl = resolve(file, '../index.d.ts');

const res = parseFileSync(decl, {
	syntax: 'typescript',
});
const inheritanceMap = new Map<string, string[]>([]);

function addInheritance(base, sup) {
	const arr = inheritanceMap.get(sup) ?? [];
	arr.push(base);
	inheritanceMap.set(sup, arr);
}

const SchemaFactories = {
	TsKeywordType: (typeRef: TsKeywordType) => {
		switch (typeRef.kind) {
			case "number":
				return ({schema: `xsd:double`, deps: []});
			case "boolean":
				return ({schema: `xsd:boolean`, deps: []});
			case "bigint":
				return ({schema: `xsd:double`, deps: []});
			case "string":
				return ({schema: `xsd:string`, deps: []});
			default:
				return null;
		}
	},
	StringLiteral: (literal: StringLiteral) => ({schema: "xsd:string", deps: []}),
	BooleanLiteral: (literal: BooleanLiteral) => ({schema: "xsd:boolean", deps: []}),
	TsLiteralType: (typeRef: TsLiteralType) => getSchema(typeRef.literal),
	TsArrayType: (decl: TsArrayType) => {
		const name = getSchema(decl.elemType);
		const className = typeof name.schema == "string" ? name.schema : name.schema['@id']
		return {
			schema: {
				'@type': 'List',
				'@class': className
			},
			deps: name.deps
		};
	},
	TsParenthesizedType(type: TsParenthesizedType) {
		return getSchema(type.typeAnnotation);
	},
	TsUnionType(union: TsUnionType, name: string = null) {
		if (union.types.every(x => x.type == 'TsLiteralType')) {
			const values = union.types.map(x => x.literal as StringLiteral).map(x => x.value);
			return {
				schema: {
					"@type": "Enum",
					"@id": name ?? values.join('Or'),
					"@value": values
				}, deps: []
			};
		}
		const deps = [];
		const inherits = new Set<string>();
		for (let type of union.types) {
			const res = getSchema(type)
			if (!res) continue;
			inherits.add(res.schema);
			deps.push(...res.deps)
		}
		if (inherits.size === 1)
			return {schema: [...inherits][0], deps};
		name ??= [...inherits].join('Or');
		deps.push({
			'@type': 'Class',
			'@id': name
		})
		for (let inherit of inherits) {
			addInheritance(name, inherit);
			for (let baseBase of (inheritanceMap.get(name) ?? [])) {
				addInheritance(baseBase, inherit);
			}
		}
		return {
			schema: {
				'@type': 'Class',
				'@id': name
			}, deps
		};
	},
	TsTypeReference: (typeRef: TsTypeReference) => {
		switch (typeRef.typeName.type) {
			case "Identifier":
				return {schema: typeRef.typeName.value, deps: [typeRef.typeName.value]};
			default:
				throw new Error(`${typeRef.typeName.type} not implemented`);
		}
	},
	TsInterfaceDeclaration: (decl: TsInterfaceDeclaration) => {
		const schema: any = {
			"@type": "Class",
			"@id": decl.id.value,
			'@inherits': inheritanceMap.get(decl.id.value) ?? []
		}
		const deps = [];
		for (let extend of decl.extends) {
			if (extend.expression.type !== 'Identifier') continue;
			deps.push(extend.expression.value);
			schema['@inherits'].push(extend.expression.value);
		}
		// if (schema['@inherits']?.length == 1)
		// 	schema['@inherits'] = schema['@inherits'][0];

		for (let property of decl.body.body) {
			if (property.type != 'TsPropertySignature' || property.key.type != 'Identifier') continue;
			if (property.key.value == "type") continue;
			const res = getSchema(property.typeAnnotation.typeAnnotation);
			if (property.optional && typeof res.schema === "string") {
				res.schema = {
					'@type': 'Optional',
					'@class': res.schema
				}
			}
			schema[property.key.value] = res.schema;
			deps.push(...res.deps);
		}
		return {schema, deps};
	},
	TsTypeAliasDeclaration(typeRef: TsTypeAliasDeclaration) {
		if (typeRef.typeAnnotation.type === 'TsUnionType') {
			return SchemaFactories.TsUnionType(typeRef.typeAnnotation, typeRef.id.value);
		}
		const res = getSchema(typeRef.typeAnnotation);
		for (let inheritor of (inheritanceMap.get(res.schema['@id']) ?? [])) {
			addInheritance(inheritor, typeRef.id.value);
		}
		res.schema['@id'] = typeRef.id.value;
		return res;
	}
}

function getSchema(node: Node) {
	if (!SchemaFactories[node.type])
		throw new Error(`${node.type} not implemented`);
	return SchemaFactories[node.type](node);
}

const SchemaFixes = {
	HasSpan: addProperty('ctxt', 'number', true),
	ForOfStatement: addProperty('await', 'boolean', true),
	Identifier: setOptional('optional'),
	Span: setOptional('ctxt'),
	HasInterpreter: setOptional('interpreter'),
	OptionalChainingExpression: setOptional('questionDotToken'),
	TsMethodSignature: setOptional('readonly')
}
function addProperty(key: string, type: TsKeywordTypeKind, optional: boolean){
	return (node: TsInterfaceDeclaration) => {
		node.body.body.push({
			type: 'TsPropertySignature',
			key: {value: key, type: 'Identifier'} as Identifier,
			optional: optional,
			readonly: false,
			computed: false,
			span: null,
			typeAnnotation: {
				type: 'TsTypeAnnotation',
				typeAnnotation: {
					type: 'TsKeywordType',
					kind: type,
					span: null
				},
				span: null
			}
		});
	}
}

function setOptional(key: string){
	return (node: TsInterfaceDeclaration)=> {
		const ctxtProperty = node.body.body.find(x =>
			x.type == 'TsPropertySignature' &&
			x.key.type == 'Identifier' &&
			x.key.value == key
		) as unknown as TSPropertySignature;
		ctxtProperty.optional = true;
	}
}

class SchemaBuilder {
	private types = new Map<string, TsTypeAliasDeclaration>();
	private interfaces = new Map<string, TsInterfaceDeclaration>();
	private processed = new Set<string>();
	private renamings = new Map<string, string>();

	constructor(private root: Module) {
		const declarations = root.body.filter(x => x.type == "ExportDeclaration" || x.type == "TsInterfaceDeclaration" || x.type == "TsTypeAliasDeclaration");
		for (let declaration of declarations) {
			if ('declaration' in declaration) declaration = declaration.declaration as TsInterfaceDeclaration | TsTypeAliasDeclaration;
			if (declaration.type == 'TsInterfaceDeclaration'){
				const typeProp = declaration.body.body.find(
					x => x.type == 'TsPropertySignature' &&
						x.key.type == 'Identifier' &&
						x.key.value == 'type'
				) as any as TSPropertySignature;
				const name = ((typeProp?.typeAnnotation?.typeAnnotation as any as TsLiteralType)?.literal as StringLiteral)?.value;
				if (name && name != declaration.id.value) {
					this.renamings.set(declaration.id.value, name);
					declaration.id.value = name;
				}
				this.interfaces.set(declaration.id.value, declaration);
			} else {
				this.types.set(declaration.id.value, declaration);
			}
		}
		this.fixNodes();
	}

	fixNodes() {
		for (let type in SchemaFixes) {
			SchemaFixes[type](this.types.get(type) ?? this.interfaces.get(type));
		}
	}

	* getSchemas(name: string) {
		name = this.renamings.get(name) ?? name;
		if (name.startsWith('xsd:') || this.processed.has(name))
			return;
		this.processed.add(name);
		const type = this.types.get(name);
		const iface = this.interfaces.get(name);
		if (!type && !iface) throw new Error(`Node ${name} not found`);
		yield* this.getNodeSchemas(type, iface);
	}

	* getNodeSchemas(type: TsTypeAliasDeclaration, iface: TsInterfaceDeclaration) {
		const typeSchema = type ? getSchema(type): null;
		const ifaceSchema = iface ? getSchema(iface) : null;
		if (typeSchema && ifaceSchema){
			const schema = {
				...typeSchema.schema,
				...ifaceSchema.schema,
				['@inherits']: [
					...(typeSchema.schema['@inherits'] ?? []),
					...(ifaceSchema.schema['@inherits'] ?? []),
				]
			};
			yield schema;
		} else {
			yield (typeSchema?.schema ?? ifaceSchema?.schema);
		}
		for (let dep of [...new Set([
			...(typeSchema?.deps ?? []),
			...(ifaceSchema?.deps ?? []),
		])]) {
			if (typeof dep === "object")
				yield dep;
			else
				yield* this.getSchemas(dep);
		}
	}

	getModuleSchemas(){
		const schemas = new Map([...this.getSchemas('Module')].map(x => [x['@id'], x]));
		for (let [id, schema] of schemas) {
			const inherit = inheritanceMap.get(id) ?? [];
			const rename = [...this.renamings.entries()].find(x => x[1] == id)?.[0];
			const renameInherits = inheritanceMap.get(rename) ?? [];
			const allInherits = new Set([
				...(schema['@inherits'] ?? []),
				...inherit,
				...renameInherits
			]);
			allInherits.delete(id);
			schema['@inherits'] = [...allInherits];
		}
		return schemas;
	}
}

const builder = new SchemaBuilder(res);
const schemas = builder.getModuleSchemas();
for (let [id, schema] of schemas) {
	const text = JSON.stringify(schema, null, '  ')
		.replaceAll('"Param"', '"Parameter"')
	await writeFile(`./swc/${id}.ts`, `export const ${id} = ` + text, 'utf-8');
}
const ids = Array.from(schemas.keys());
const index = ids.map(id => `import { ${id} } from "./${id}";`).join('\n')
	+ `

export const swcSchema = [\n\t${ids.join(',\n\t')}\n]`;

await writeFile(`./swc/index.ts`, index, 'utf-8');
