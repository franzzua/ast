import {Component, component, html, property} from "@cmmn/uhtml";
import type {Node} from "@swc/wasm";
import {Nodes} from "./index";
import {AsyncCell, cell, Cell, resolve} from "@cmmn/core";
import {NodeStore} from "../services/node.store";

@component()
export class AstNode extends Component {
	static Factory = node => html`<ast-node .node=${node}/>`;

	static ArrayFactory(nodes: any[], separator: string = ', ') {
		return nodes.map((x, i) => html`${i !== 0 ? separator : ''}${AstNode.Factory(x)}`);
	}

	store = resolve(NodeStore);
	@property()
	accessor node: Node | string;

	nodeQuery = AsyncCell.query(() => {
		if (!this.node || typeof this.node !== "string")
			return Promise.resolve(this.node);
		return this.store.getNode(this.node);
	});

	render(){
		if (this.nodeQuery.isPending) return html`...`;
		const node = this.nodeQuery.result;
		if (!node) return html``;
		const factory = Nodes[node.type];
		if (!factory) return html`<span style="color: #A22; font-weight: bold;">${node.type}</span>`
		return factory(node);
	}

	onError(error: any, source: "effect" | "action" | "state" | "template", sourceName?: any) {
		console.error(error, source, sourceName);
	}


}