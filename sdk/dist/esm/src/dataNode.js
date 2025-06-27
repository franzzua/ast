//
const nodeSymbol = Symbol("node");
export class DataNode {
    [nodeSymbol];
    constructor(node){
        this[nodeSymbol] = node;
    }
    get type() {
        return this[nodeSymbol]['@type'];
    }
    as(type = this.type) {
        if (this.type !== type) throw new Error("Wrong type '" + this.type + "'. Expected type '" + type + "'");
        return this;
    }
    static from(node) {
        const x = node[nodeSymbol];
        for(let key in node){
            if ([
                'type'
            ].includes(key) || typeof node[key] === "object") continue;
            x[key] = node[key];
        }
        return x;
    }
}

//# sourceMappingURL=dataNode.js.map