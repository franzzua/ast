import {describe, test} from "node:test"
import {Client} from "../src/client";
import {} from "oxc-walker";
import {parse, transform} from "@swc/core";
import {parseAsync} from "../index";

const code = `
    const a = 'Alice';
    abstract class Animal<T> {
        protected abstract say();
    }
    class Cat extends Animal<string> {
        say(){
            return 'Mya.';
        }
    }
    function sayHi(name: string){
        console.log(\`Hello, \${name}!\`);
    }
    sayHi(a);
    const cat = new Cat();
    cat.say();
`;
const filename = 'test.tsx';

describe('hello', async () => {
    const client = new Client();

    await test('parse', async () => {
        const program = await parseAsync(code);
        await client.init();
        await client.add(program, filename);
    });

    await test('serialize', async () => {
        const program = await client.getModule(filename);
        const output = await transform(program, {
            sourceFileName: filename,
        });
        console.log(output);
        // expect(program.body).toHaveLength(3);
        // const [vd, expression, fd] = program.body;
        // vd.as('VariableDeclaration');
        // expect(
        //     expression.as('ExpressionStatement').expression
        //         .as('CallExpression').arguments[0]
        // ).toEqual(vd.as('VariableDeclaration').declarations[0].id);
        // expect(
        //     fd.as('FunctionDeclaration').body.body[0]
        //         .as('ExpressionStatement').expression
        //         .as('CallExpression').arguments[0]
        //         .as('BinaryExpression').right
        // ).toEqual(fd.as('FunctionDeclaration').params[0]);
        //
        // const ser = new Serializer();
        // const serialized = ser.serialize(program);
        // expect(serialized.replace(/\s+/g, ' ')).toEqual(code.replace(/\s+/g, ' ').trim());
    });

    // await test('update', async () => {
    //     const program = await client.getProgram('test.tsx');
    //     const world = program.body[0].as('VariableDeclaration').declarations[0].init.as('Literal');
    //     world.raw = "'Friend'";
    //     world.value = 'Friend';
    //     await client.update(world);
    // })

    // await test('diff', async () => {
        // const [diff] = await client.getLastCommitDiff();
        // expect(diff['@id']).toContain('Literal');
        // expect(diff.value['@before']).toEqual('World');
        // expect(diff.value['@after']).toEqual('Friend');
    // })
});
