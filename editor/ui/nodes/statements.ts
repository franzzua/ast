import * as t from "@swc/types";
import {html} from "@cmmn/uhtml";
import {AstNode} from "./ast.node";

export function ReturnStatement(node: t.ReturnStatement) {
	return html`<span class="keyword">return</span> ${AstNode.Factory(node.argument)}`;
}

export function BlockStatement(node: t.BlockStatement) {
	return html`
        <div style="display: flex; flex-direction: column; margin-left: 10px;">
			${node.stmts.map(AstNode.Factory)}
        </div>
	`
}
export function ExpressionStatement(node: t.ExpressionStatement) {
	return AstNode.Factory(node.expression);
}

export function SwitchStatement(node: t.SwitchStatement) {
	return html`<span class="keyword">switch</span> (${AstNode.Factory(node.discriminant)}){
    <div style="display: flex; flex-direction: column; margin-left: 10px;">
		${AstNode.ArrayFactory(node.cases, '')}
    </div>
	}`
}

export function SwitchCase(node: t.SwitchCase){
	const head =  (!node.test)
		? html`<span class="keyword">default:</span> <br/>`
		: html`<span class="keyword">case</span> ${AstNode.Factory(node.test)}: <br/>`;
	return html`${head}
	    <div style="display: flex; flex-direction: column; margin-left: 10px;">
		    ${AstNode.ArrayFactory(node.consequent, '')}
	    </div>
	`
}