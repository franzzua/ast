import {resolve, scoped} from "@cmmn/core";
import {IndexedStorage} from "@cmmn/ui";
import {Client} from "@ast/sdk/src/client";

@scoped()
export class NodeStore {
	private client = resolve(Client);

	private storage = new IndexedStorage<Node>('nodes');

	async getWithCache(key: string, getter: () => Promise<Node>) {
		const stored = await this.storage.get(key);
		if (stored)
			return stored;
		const actual = await getter();
		await this.storage.set(key, actual);
		return actual;
	}
	async getNode(id: string) {
		return this.getWithCache(id, () => this.client.getNode(id));
	}
	async getModule(path: string) {
		return this.getWithCache(path, () => this.client.getNode('Module', { path }));
	}
}