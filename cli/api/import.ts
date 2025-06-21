import {type ParsedArgs} from "tiny-parse-argv";
import {glob, readFile, copyFile} from "node:fs/promises";
import {parseAsync, Client} from "@ast/sdk";

export default async function _import(_: ParsedArgs, options = parseOptions(_)) {
	const client = new Client();
	await client.init();
	for await (let file of getFiles(options)) {
		const content = await readFile(file, {encoding: 'utf-8'});
		const parseResult = await parseAsync(file, content);
		for (let error of parseResult.errors) {
			console.error(error)
		}
		try {
			if (parseResult.program)
				await client.add(parseResult.program, file);
		} catch (e){
			console.error('Not parsed:', file);
		}
	}
}

function getFiles(options: Options){
	return glob('**/*.ts', {
		cwd: options.cwd,
		exclude: f => f.includes('node_modules') || f.includes('.spec.ts')
	})
}

function parseOptions(args: ParsedArgs): Options {
	return {
		watch: Boolean(args.watch || args.w),
		cwd: process.cwd()
	}
}

type Options = {
	cwd: string;
	watch: boolean;
}