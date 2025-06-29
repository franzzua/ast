import {type ParsedArgs} from "tiny-parse-argv";
import {glob, readFile, copyFile} from "node:fs/promises";
import {parseAsync, Client} from "@ast/sdk";
import {transform} from "@swc/core";

export default async function compile(args: ParsedArgs) {
	const client = new Client();
	const files = args._.slice(1);
	for await (let file of files) {
		const module = await client.getModule(file);
		console.log(file);
		console.log(JSON.stringify(module));
		const output = await transform(module, {
			sourceMaps: false,
			sourceFileName: file,

		});
		console.log(output.code);
	}
}