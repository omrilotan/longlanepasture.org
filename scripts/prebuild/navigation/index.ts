import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { parse } from "yaml";

export async function navigation() {
	const file = await readFile(
		join(process.cwd(), "src", "navigation", "index.yml"),
		"utf8",
	);
	const data = parse(file);
	return [
		"/* This file is generated automativcally from '/src/navigation/index.yml' */",
		`export const navigation: {name: string, path?: string, nav?: boolean, footer?: boolean}[] = ${JSON.stringify(data, null, 2)};`,
	].join("\n");
}
