export class Scope {
    parent;
    name;
    bindings;
    constructor(parent = null, name){
        this.parent = parent;
        this.name = name;
        this.bindings = new Map();
    }
    resolve(name) {
        return this.bindings.get(name) ?? this.parent?.resolve(name);
    }
    register(name, id) {
        this.bindings.set(name, id);
    // console.log(`register ${name} in ${this.name} as ${id}`);
    }
}

//# sourceMappingURL=scope.js.map