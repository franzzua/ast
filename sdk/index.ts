export {Client} from "./src/client";
import {parse} from "@swc/wasm";

export function parseAsync(content: string){
	return parse(content, {
		syntax: 'typescript',
		decorators: true
	})
}
