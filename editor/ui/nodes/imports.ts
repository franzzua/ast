import * as t from "@swc/types";
import {AstNode} from "./ast.node";
import {html} from "@cmmn/uhtml";


export function ImportDeclaration(node: t.ImportDeclaration) {
	return html`
		<span class="keyword">import</span> ${node.typeOnly ? 'type ' : ''}
		{ ${AstNode.ArrayFactory(node.specifiers, ',\n')} } <span class="keyword">from</span> ${AstNode.Factory(node.source)};
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
