import {describe, test} from "node:test"
import {Client} from "../src/client";
import { expect } from "@cmmn/tools/test";
import {Serializer} from "../src/serializer";
import {parseAsync} from "oxc-parser";

const code = `
const world = 'World';
sayHello(world);

function sayHello(to: string) {
  console.log('Hello '+to);
}
`;

describe('hello', async () => {

    await test('parse', async () => {
        const filename = 'test.tsx';
        const client = new Client();
        const parseResult = await parseAsync(filename, code);
        if (parseResult.errors.length) throw parseResult.errors;
        await client.add(parseResult.program, filename);
    });

    await test('serialize', async () => {
        const client = new Client();
        const program = await client.getProgram('test.tsx');
        expect(program.body).toHaveLength(3);
        const [vd, expression, fd] = program.body;
        expect(vd.type).toEqual("VariableDeclaration");
        if (vd.type !== "VariableDeclaration") throw new Error("VariableDeclaration is required");
        if (expression.type !== "ExpressionStatement") throw new Error("Expression is required");
        if (expression.expression.type !== 'CallExpression') throw new Error("CallExpression is required");
        if (expression.expression.arguments[0] !== vd.declarations[0].id)
            throw new Error("Identifier is different");
        if (fd.type !== "FunctionDeclaration") throw new Error("FunctionDeclaration is required");
        if (fd.body.body[0].type !== 'ExpressionStatement') throw new Error("ExpressionStatement is required");
        if (fd.body.body[0].expression.type !== 'CallExpression') throw new Error("CallExpression is required");
        if (fd.body.body[0].expression.arguments[0].type !== 'BinaryExpression') throw new Error("Parameter differs");
        if (fd.body.body[0].expression.arguments[0].right !== fd.params[0]) throw new Error("Parameter differs");

        const ser = new Serializer();
        const serialized = ser.serialize(program);
        expect(serialized.replace(/\s+/g, ' ')).toEqual(code.replace(/\s+/g, ' ').trim());
    });
});
