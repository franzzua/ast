import {Component, component, html} from "@cmmn/uhtml";

@component()
export class MainLayout extends Component {
	render() {
		return html`<ast-module path=${location.pathname.substring(1)}/>`;
	}

}