import {type ParsedArgs} from "tiny-parse-argv";
import {glob, readFile, copyFile} from "node:fs/promises";
import {parseAsync, Client} from "@ast/sdk";

export default async function _import(_: ParsedArgs, options = parseOptions(_)) {
	const client = new Client();
	await client.init();
	for await (let file of options.files) {
		const content = await readFile(file, {encoding: 'utf-8'});
		const result = await parseAsync(content);
		await client.add(result, file);
	}
}

function getFiles(cwd: string){
	return glob('**/*.ts', {
		cwd,
		exclude: f => f.includes('node_modules') || f.includes('.spec.ts')
	})
}

function parseOptions(args: ParsedArgs): Options {
	const files = args._.slice(1);
	const cwd = process.cwd();
	return {
		watch: Boolean(args.watch || args.w),
		cwd,
		files: files.length == 0 ? getFiles(cwd) : files,
	}
}

type Options = {
	cwd: string;
	watch: boolean;
	files: AsyncIterable<string> | Iterable<string>
}

