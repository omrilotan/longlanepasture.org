import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { parse } from "yaml";

export async function ammenities() {
	const file = await readFile(
		join(process.cwd(), "src", "ammenities", "index.yml"),
		"utf8",
	);
	const data = parse(file);
	return [
		"/* This file is generated automatically from '/src/ammenities/index.yml' */",
		`export const ammenities: {name: string, description: string, available: boolean}[] = ${JSON.stringify(data, null, 2)};`,
	].join("\n");
}
