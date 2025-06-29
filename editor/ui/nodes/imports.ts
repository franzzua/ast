import * as t from "@swc/types";
import {AstNode} from "./ast.node";
import {html} from "@cmmn/uhtml";


export function ImportDeclaration(node: t.ImportDeclaration) {
	return html`
		import ${node.typeOnly ? 'type ' : ''}{ ${AstNode.ArrayFactory(node.specifiers, ',\n')} } from ${AstNode.Factory(node.source)};
	`;
}
export function ImportSpecifier(node: t.NamedImportSpecifier) {
	if (node.imported)
		return html`${AstNode.Factory(node.local)} as ${AstNode.Factory(node.imported)}`;
	return html`${AstNode.Factory(node.local)}`;
}
export function ImportDefaultSpecifier(node: t.ImportDefaultSpecifier) {
	return html`default as ${AstNode.Factory(node.local)}`;
}

export function ExportDeclaration(node: t.ExportDeclaration) {
	return html`export <ast-node .node=${node.declaration}/>`;
}
