import * as t from "@swc/types";
import {html} from "@cmmn/uhtml";
import {AstNode} from "./ast.node";

export function ReturnStatement(node: t.ReturnStatement) {
	return html`return ${AstNode.Factory(node.argument)}`;
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
	return html`switch (${AstNode.Factory(node.discriminant)}){
    <div style="display: flex; flex-direction: column; margin-left: 10px;">
		${AstNode.ArrayFactory(node.cases, ',')}
    </div>
	}`
}

export function SwitchCase(node: t.SwitchCase){
	if (!node.test)
		return html`default: <br/>
        <div style="display: flex; flex-direction: column; margin-left: 10px;">
            ${AstNode.ArrayFactory(node.consequent)}
        </div>
		`
	return html`case ${AstNode.Factory(node.test)}: <br/>
    <div style="display: flex; flex-direction: column; margin-left: 10px;">
	    ${AstNode.ArrayFactory(node.consequent)}
    </div>
	`
}