import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { parse } from "yaml";

export async function friends() {
	const file = await readFile(
		join(process.cwd(), "src", "friends", "index.yml"),
		"utf8",
	);
	const data = parse(file);
	return [
		"/* This file is generated automatically from '/src/friends/index.yml' */",
		`export const friends: {name: string, href: string, description: string}[] = ${JSON.stringify(data, null, 2)};`,
	].join("\n");
}
