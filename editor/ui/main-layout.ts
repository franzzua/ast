import {Component, component, html} from "@cmmn/uhtml";
import "./styles/dracula.css";

@component()
export class MainLayout extends Component {
	render() {
		return html`<ast-module class="code" path=${location.pathname.substring(1)}/>`;
	}
}