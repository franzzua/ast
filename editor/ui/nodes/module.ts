import {html} from "@cmmn/uhtml";
import * as t from "@swc/types";

export function Module(node : t.Module){
	return html`<div style="display: flex; flex-direction: column;">
        ${node.interpreter}
        ${node.body.map(x => html`<ast-node .node=${x}/>`)}
    </div>`;
}


