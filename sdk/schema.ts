import {readdir} from "node:fs/promises";
import {fileURLToPath} from "node:url";
import {join} from "node:path";

const dir = join(fileURLToPath(import.meta.url), "../schema/");
const nodeFiles = await readdir(dir, {recursive: true});
const nodes = [];
for (let nodeFile of nodeFiles) {
	const module = await import('./schema/'+nodeFile);
	nodes.push(...Object.values(module))
}
const ids = new Set(nodes.map(x => x['@id']))
console.log(nodes.length, ids.size);
// for (let node of nodes) {
// 	delete node['kind'];
// }
export const schema = [
	{
		"@type": "@context",
		"@schema": "http://terminusdb.com/schema/woql#",
		"@base": "terminusdb://woql/data/",
		"xsd": "http://www.w3.org/2001/XMLSchema#",
		"rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
		"rdfs": "http://www.w3.org/2000/01/rdf-schema#",
		"terminus": "http://terminusdb.com/schema/terminus#",
		"vio": "http://terminusdb.com/schema/vio#"
	},
	...nodes,
]