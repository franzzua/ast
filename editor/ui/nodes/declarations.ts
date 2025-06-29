import {html} from "@cmmn/uhtml";
import * as t from "@swc/types";
import {AstNode} from "./ast.node";

function *getModifiers(node: t.FunctionDeclaration){
	if (node.declare) yield 'declare';
	if (node.async) yield 'async';
	if (node.generator) yield '*';
}

export function FunctionDeclaration(node: t.FunctionDeclaration){
	const modifiers = [...getModifiers(node)].map(s => html`<span class="keyword">${s}</span>`);
	return html`
		${modifiers} <span class="keyword">function</span> ${AstNode.Factory(node.identifier)}(${AstNode.ArrayFactory(node.params)}){<br/>
			${AstNode.Factory(node.body)}
		}
	`;
}

export function Parameter(node: t.Param){
	return html`${AstNode.Factory(node.pat)}`;
}

export function VariableDeclaration(node: t.VariableDeclaration){
	return html`
		<span class="keyword">${node.declare ? 'declare ' : ''} ${node.kind}</span> ${AstNode.ArrayFactory(node.declarations)};
	`;
}
export function VariableDeclarator(node: t.VariableDeclarator){
	return html`${AstNode.Factory(node.id)} = ${AstNode.Factory(node.init)}`
}
