export { Client } from "./src/client.js";
import { parse } from "@swc/core";
export function parseAsync(content) {
    return parse(content, {
        syntax: 'typescript',
        decorators: true
    });
}

//# sourceMappingURL=index.js.map