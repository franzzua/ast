import {Component, component, html, property} from "@cmmn/uhtml";
import {AsyncCell, resolve} from "@cmmn/core";
import {NodeStore} from "../services/node.store";
import {AstNode} from "./ast.node";

@component()
export class AstModule extends Component {
	store = resolve(NodeStore)
	@property()
	accessor path: string;

	fileQuery = AsyncCell.query(() => this.store.getModule(this.path));

	render() {
		if (this.fileQuery.isPending)
			return html`...`;
		const module = this.fileQuery.result;
		return AstNode.Factory(module);
	}

}