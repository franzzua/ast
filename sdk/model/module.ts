export class Module {
	static Scheme = {
		"@type": "Class",
		"@id": "Program",
		"body": {
			"@type": "List",
			"@class": "Statement"
		},
		"hashbang": {
			"@type": "Optional",
			"@class": "Node" // Hashbang | null
		}
	}
}