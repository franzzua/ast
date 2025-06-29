import {html} from "@cmmn/uhtml";
import * as t from "@swc/types";
import {AstNode} from "./ast.node";

export function ExportNamedDeclaration(node: t.ExportNamedDeclaration) {
	return html`
		export ${node.typeOnly ? 'type ' : ''}{ ${node.specifiers.map(AstNode.Factory)} } from ${AstNode.Factory(node.source)};
	`;
}
export function ExportSpecifier(node: t.NamedExportSpecifier) {
	if (node.exported)
		return html`${AstNode.Factory(node.orig)} as ${AstNode.Factory(node.exported)}`;
	return html`${AstNode.Factory(node.orig)}`;
}
export function ExportDefaultSpecifier(node: t.ExportDefaultSpecifier) {
	return html`default as ${AstNode.Factory(node.exported)}`;
}
