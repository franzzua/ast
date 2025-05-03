import {describe, test} from "node:test"
import {Client} from "../src/client";
import {NodeParser} from "../src/node";
import { expect } from "@cmmn/tools/test";

const code = `
const world = 'World';
sayHello(world);

function sayHello(to: string) {
  console.log('Hello '+to);
}
`;

describe('hello', () => {
    const parser = new NodeParser();

    test('parse', async () => {
        const filename = 'test.tsx';
        const client = new Client();
        const result = await parser.parse(filename, code);
        console.table(result);
        for (let node of result) {
            expect(node["@id"]).toContain(node["@type"]);
            switch (node["@type"]){
                // case "Program":
                //     const ids = node.body as string[];
                //     expect(ids).toHaveLength(3);
                //     const sayHelloCall = result.find(x => x["@id"] === ids[0]);
                //     expect(sayHelloCall["@id"]).toContain('ExpressionStatement');
                //     const sayHello = result.find(x => x["@id"] === ids[1]);
                //     expect(sayHello["@id"]).toContain('FunctionDeclaration');
                //     const sayHelloBody = result.find(x => x["@id"] === sayHello.body);
                //     expect(sayHello.params).toHaveLength(1);
                //     const toParam = result.find(x => x["@id"] === sayHello.params[0]);
                //     expect(toParam["@id"]).toContain('Identifier');
                //     break;
            }
        }
        await client.add(result);
    });
});