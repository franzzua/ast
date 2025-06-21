import {Node as OxcNode} from "oxc-parser";

export type INode<TStatement extends OxcNode = OxcNode> = Omit<TStatement, "type" | "start" | "end"> & {
    '@id': string;
    '@type': TStatement["type"];
}
//
const nodeSymbol = Symbol("node");

export class DataNode<TStatement extends OxcNode = OxcNode> {
    [nodeSymbol]: INode<TStatement>;
    constructor(node: INode<TStatement>) {
        this[nodeSymbol] = node;
    }

    get type(){
        return this[nodeSymbol]['@type'];
    }

    as<TNode extends OxcNode & { type: TType }, TType extends OxcNode['type'] = TStatement['type']>(type: TType = this.type as TType): TypedNode<TNode> {
        if (this.type !== type)
            throw new Error("Wrong type '" + this.type + "'. Expected type '" + type + "'");
        return this as unknown as TypedNode<TNode>;
    }

    static from<TNode extends OxcNode>(node: TypedNode<TNode>): INode<TNode>{
        const x = node[nodeSymbol];
        for (let key in node) {
            if (['type'].includes(key) ||
                typeof node[key] === "object") continue;
            x[key] = node[key];
        }
        return x;
    }
}

export type TypedNode<TNode extends OxcNode> = {
    [K in keyof TNode]: TNode[K] extends OxcNode ? TypedNode<TNode[K]>
        : TNode[K] extends OxcNode[] ? Array<TypedNode<TNode[K][0]>> : TNode[K];
} & {
    [nodeSymbol]: INode<TNode>;
    as<TNode extends OxcNode & { type: TType }, TType extends OxcNode['type'] = TNode['type']>(type?: TType): TypedNode<TNode>;
}