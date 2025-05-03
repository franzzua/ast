export class Scope {
    private bindings = new Map<string, string>();

    constructor(private parent: Scope | null = null, public name: string) {
    }

    public resolve(name: string): string | null {
        return this.bindings.get(name) ?? this.parent?.resolve(name);
    }

    register(name: string, id: string) {
        this.bindings.set(name, id);
        // console.log(`register ${name} in ${this.name} as ${id}`);
    }
}