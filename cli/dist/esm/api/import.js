import { glob, readFile } from "node:fs/promises";
import { parseAsync, Client } from "@ast/sdk";
export default async function _import(_, options = parseOptions(_)) {
    const client = new Client();
    await client.init();
    for await (let file of options.files){
        const content = await readFile(file, {
            encoding: 'utf-8'
        });
        const result = await parseAsync(content);
        await client.add(result, file);
    }
}
function getFiles(cwd) {
    return glob('**/*.ts', {
        cwd,
        exclude: (f)=>f.includes('node_modules') || f.includes('.spec.ts')
    });
}
function parseOptions(args) {
    const files = args._.slice(1);
    const cwd = process.cwd();
    return {
        watch: Boolean(args.watch || args.w),
        cwd,
        files: files.length == 0 ? getFiles(cwd) : files
    };
}

//# sourceMappingURL=import.js.map