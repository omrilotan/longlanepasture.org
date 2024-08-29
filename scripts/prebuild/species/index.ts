import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { parse } from "yaml";

export async function species() {
	const file = await readFile(
		join(process.cwd(), "src", "species", "index.yml"),
		"utf8",
	);
	const data = parse(file);
	return [
		"/* This file is generated automativcally from '/src/species/index.yml' */",
		`export const species: Record<string, Record<string, string|Record<string, string>[]>[]> = ${JSON.stringify(data, null, 2)};`,
	].join("\n");
}
