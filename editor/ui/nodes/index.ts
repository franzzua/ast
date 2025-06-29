import "./ast.node";
import "./ast.module";
import {Module} from "./module";
import * as Exports from "./exports";
import * as Imports from "./imports";
import * as Declarations from "./declarations";
import * as TsTypes from "./ts-types";
import * as Statements from "./statements";
import * as Expressions from "./expressions";
import type * as nodeTypes from "@swc/types";
import {Argument, BindingIdentifier, BooleanLiteral, KeyValueProperty, StringLiteral} from "@swc/types";
import {html} from "@cmmn/uhtml";
import {AstNode} from "./ast.node";
import * as Literals from "./literals";

export const Nodes: {
	[key in keyof typeof nodeTypes]: (node: (typeof nodeTypes)[key]) => any
} = {
	Module,
	...Exports,
	...Imports,
	...Declarations,
	...TsTypes,
	...Literals,
	...Expressions,
	Super: () => html`<span class="keyword">super</span>`,
	Import: () => html`<span class="keyword">import</span>`,
	MetaProperty: () => html`<span class="keyword">import.meta</span>`,

	Identifier: (node: BindingIdentifier) => {
		return html`<span class="variable">${node.value}</span><ast-node .node=${node.typeAnnotation}/>`;
	},
	Argument: (node: Argument) => AstNode.Factory(node.expression),
	KeyValueProperty: (property: KeyValueProperty) => html`
        <div>
            <span>${AstNode.Factory(property.key)}</span>: <span>${AstNode.Factory(property.value)}</span>,
        </div>`,
	...Statements,
}

