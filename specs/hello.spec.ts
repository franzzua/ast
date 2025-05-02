import {describe, test} from "node:test"
import {Parser} from "../src/parser";
import {Client} from "../src/client";
import {traverse} from "../src/traverse";

const code = `
function sayHello(to: string) {
  console.log('Hello '+to);
}
sayHello('World');
`;

describe('hello', async () => {
    const parser = new Parser();

    await test('init', async () => {
        const client = new Client();
        await client.init();
    })
    await test('parse', async () => {
        const filename = 'test.tsx';
        const client = new Client();
        const result = await parser.parse(filename, code);
        traverse(result);
        await client.add(result);
    })
});