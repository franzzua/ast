#!/usr/bin/env node
import parseArgv from 'tiny-parse-argv';
import * as process from "node:process";

const args = parseArgv(process.argv.slice(2));
const commands = {
	import: () => import('./api/import'),
	compile: () => import('./api/compile'),
}
const command = args._.find(x => commands[x]);
if (command){
	(await commands[command]()).default(args);
}