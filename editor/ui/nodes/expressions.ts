import {component, Component, html} from "@cmmn/uhtml";
import * as t from "@swc/types";
import {AstNode} from "./ast.node";

export function CallExpression(node: t.CallExpression) {
	return html`
		${AstNode.Factory(node.callee)}<span>(</span>${AstNode.ArrayFactory(node.arguments)}<span>)</span>
	`;
}

export function NewExpression(node: t.NewExpression) {
	return html`
		<span class="keyword">new</span> ${AstNode.Factory(node.callee)}<span>(</span>${AstNode.ArrayFactory(node.arguments)}<span>)</span>
	`;
}
export function BinaryExpression(node: t.BinaryExpression) {
	return html`
        ${AstNode.Factory(node.left)}<span> ${node.operator} </span>${AstNode.Factory(node.right)}
	`;
}
export function ArrayExpression(node: t.ArrayExpression) {
	return html`
		<span>[</span>${AstNode.ArrayFactory(node.elements)}<span>]</span>
	`;
}
export function MemberExpression(node: t.MemberExpression) {
	return html`
		${AstNode.Factory(node.object)}.${AstNode.Factory(node.property)}
	`;
}
export function UnaryExpression(node: t.UnaryExpression) {
	return html`
        ${node.operator} ${AstNode.Factory(node.argument)}
	`;
}
export function ConditionalExpression(node: t.ConditionalExpression) {
	return html`
        ${AstNode.Factory(node.test)} ? ${AstNode.Factory(node.consequent)} : ${AstNode.Factory(node.alternate)}
	`;
}
export function Computed(node: t.ComputedPropName) {
	return html`
        [${AstNode.Factory(node.expression)}]
	`;
}
export function ArrowFunctionExpression(node: t.ArrowFunctionExpression) {
	return html`(${AstNode.ArrayFactory(node.params)}) => {<br/>
    <div style="display: flex; flex-direction: column; margin-left: 10px;">
	    ${AstNode.Factory(node.body)}
    </div>
	}`;
}

export function ObjectExpression(node: t.ObjectExpression) {
	return html`{<br/>
    <div style="display: flex; flex-direction: column; margin-left: 10px;">
        ${node.properties.map(AstNode.Factory)}
    </div>
    }`;
}

export function ParenthesisExpression(node: t.ParenthesisExpression){
	return html`(${AstNode.Factory(node.expression)})`
}