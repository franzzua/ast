import {html} from "@cmmn/uhtml";
import * as t from "@swc/types";
import {AstNode} from "./ast.node";

export function BooleanLiteral(node: t.BooleanLiteral) {
	return html`${node.value.toString()}`;
}

export function NullLiteral() {
	return html`null`;
}

export function StringLiteral(node: t.StringLiteral) {
	return html`<span class="string">${node.raw ?? '"' + node.value + '"'}</span>`;
}

export function TemplateLiteral(node: t.TemplateLiteral){
	const items = [];
	for (let i = 0; i < node.quasis.length; i++){
		if (i > 0)
			items.push(AstNode.Factory(node.expressions[i - 1]));
		items.push(AstNode.Factory(node.quasis[i]));
	}
	return html`<span class="string">\`${items}\`</span>`;
}

export function TemplateElement(node: t.TemplateElement){
	return html`${node.cooked}`
}