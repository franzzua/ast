import oxc from 'oxc-parser';
import {type Statement} from "oxc-parser";

export class Parser {
    async parse(filename: string, code: string) {
        const res = await oxc.parseAsync(filename, code, {});
        if (res.errors.length > 0) {
            throw res.errors;
        }
        return res.program;
        // return res.program.body.map(Node.parse);
    }
}

export class ExpressionNode {

}

export class Node {
    constructor(public type: StatementType,
                public children: Node[] = []) {
    }
    static parse(statement: Statement): Node {
        const type = StatementType[statement.type] as StatementType;
        switch (statement.type) {
            case "DebuggerStatement":
                return new Node(type);
            case "BlockStatement":
                return new Node(type, statement.body.map(Node.parse));
            case "BreakStatement":
                return new Node(type);
            case "ContinueStatement":
                return new Node(type);
            case "DoWhileStatement":
                return new Node(type);
            case "EmptyStatement":
                return new Node(type);
            case "ExpressionStatement":
                return new Node(type);
            case "ForInStatement":
                return new Node(type);
            case "ForOfStatement":
                return new Node(type);
            case "ForStatement":
                return new Node(type);
            case "IfStatement":
                return new Node(type);
            case "LabeledStatement":
                return new Node(type);
            case "ReturnStatement":
                return new Node(type);
            case "SwitchStatement":
                return new Node(type);
            case "ThrowStatement":
                return new Node(type);
            case "TryStatement":
                return new Node(type);
            case "WhileStatement":
                return new Node(type);
            case "WithStatement":
                return new Node(type);
            case "VariableDeclaration":
                return new Node(type);
            case "FunctionDeclaration":
                return new Node(type, statement.body.body.map(Node.parse));
            case "FunctionExpression":
                return new Node(type, statement.body.body.map(Node.parse));
            case "TSDeclareFunction":
                return new Node(type);
            case "TSEmptyBodyFunctionExpression":
                return new Node(type);
            case "ClassDeclaration":
                return new Node(type);
            case "ClassExpression":
                return new Node(type);
            case "TSTypeAliasDeclaration":
                return new Node(type);
            case "TSInterfaceDeclaration":
                return new Node(type);
            case "TSEnumDeclaration":
                return new Node(type);
            case "TSModuleDeclaration":
                return new Node(type);
            case "TSImportEqualsDeclaration":
                return new Node(type);
            case "ImportDeclaration":
                return new Node(type);
            case "ExportAllDeclaration":
                return new Node(type);
            case "ExportDefaultDeclaration":
                return new Node(type);
            case "ExportNamedDeclaration":
                return new Node(type);
            case "TSExportAssignment":
                return new Node(type);
            case "TSNamespaceExportDeclaration":
                return new Node(type);
            default:
                throw new Error(`Unsupported type "${statement['type']}"`);
        }
    }

    toJSON() {

    }
}

export enum StatementType {
    DebuggerStatement,
    BlockStatement,
    BreakStatement,
    ContinueStatement,
    DoWhileStatement,
    EmptyStatement,
    ExpressionStatement,
    ForInStatement,
    ForOfStatement,
    ForStatement,
    IfStatement,
    LabeledStatement,
    ReturnStatement,
    SwitchStatement,
    ThrowStatement,
    TryStatement,
    WhileStatement,
    WithStatement,
    VariableDeclaration,
    FunctionDeclaration,
    FunctionExpression,
    TSDeclareFunction,
    TSEmptyBodyFunctionExpression,
    ClassDeclaration,
    ClassExpression,
    TSTypeAliasDeclaration,
    TSInterfaceDeclaration,
    TSEnumDeclaration,
    TSModuleDeclaration,
    TSImportEqualsDeclaration,
    ImportDeclaration,
    ExportAllDeclaration,
    ExportDefaultDeclaration,
    ExportNamedDeclaration,
    TSExportAssignment,
    TSNamespaceExportDeclaration,
}