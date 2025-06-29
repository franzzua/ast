import {html} from "@cmmn/uhtml";
import * as t from "@swc/types";
import {AstNode} from "./ast.node";

export function TsTypeAnnotation(node: t.TsTypeAnnotation){
	return html`<span style="font-style: italic; color: #888">: ${AstNode.Factory(node.typeAnnotation)}`;
}
export function TsKeywordType(node: t.TsKeywordType){
	return html`${node.kind}`;
}
export function TsTypeReference(node: t.TsTypeReference){
	return AstNode.Factory(node.typeName);
}