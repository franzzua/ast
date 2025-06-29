import {describe, test} from "node:test"
import {Client} from "../src/client";
import {} from "oxc-walker";
import {parse, transform} from "@swc/core";
import {parseAsync} from "../index";
import {fileURLToPath} from "node:url";
import { readFile } from "node:fs/promises";

const filename = 'sdk/index.ts';
const file = await readFile(fileURLToPath(import.meta.resolve('../index.ts')), 'utf-8');

describe('compile', async () => {
    const client = new Client();

    await test('sdk/index', async () => {
        const program = await client.getModule(filename);
        const parsed = await parseAsync(file);
        compare(program, parsed);
        const output = await transform(program, {
            sourceFileName: filename,
        });
        console.log(output);
    });
});


function compare(obj1, obj2, path = []){
    if (typeof obj1 != "object" || typeof obj2 != "object")
        console.log(path.join(':'), '<>', obj1, obj2);
    const keys1 = new Set(Object.keys(obj1));
    const keys2 = new Set(Object.keys(obj2));
    for (let key1 of keys1)
        if (!keys2.has(key1))
            console.log(path.join(':'), '+', key1);
    for (let key2 of keys2)
        if (!keys1.has(key2))
            console.log(path.join(':'), '-', key2);
    for (let key of keys1) {
        if (!keys2.has(key)) continue;
        const val1 = obj1[key];
        const val2 = obj2[key];
        if (val1 == val2) continue;
        compare(val1, val2, [...path, key]);
    }

}