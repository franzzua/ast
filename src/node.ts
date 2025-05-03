import {Node as OxcNode} from "oxc-parser";

export type Node<TStatement extends OxcNode = OxcNode> = Omit<TStatement, "type" | "start" | "end"> & {
    '@id': string;
    '@type': TStatement["type"];
}


