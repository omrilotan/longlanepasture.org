import { humans } from "./humans/index.ts";
import { newsletters } from "./newsletters/index.ts";
import { pictures } from "./pictures/index.ts";
import { records } from "./records/index.ts";
import { sitemap } from "./sitemap/index.ts";
import { volunteers } from "./volunteers/index.ts";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

/**
 * Example: 1970-01-01
 */
const datestamp = new Date().toISOString().split("T").shift() as string;

const setups: [string, Promise<string>][] = [
	["./public/humans.txt", humans({ datestamp })],
	[
		"./public/sitemap.xml",
		sitemap({ base: "https://longlanepasture.org", datestamp }),
	],
	["./dynamic/pictures.ts", pictures()],
	["./dynamic/records.ts", records()],
	["./dynamic/volunteers.ts", volunteers()],
	["./dynamic/newsletters.ts", newsletters()],
];

Promise.all(
	setups.map(
		async ([path, content]): Promise<void> =>
			await writeFileWithDirs(resolve(path), await content),
	),
);

async function writeFileWithDirs(
	filePath: string,
	data: string,
): Promise<void> {
	const dir = dirname(filePath);
	await mkdir(dir, { recursive: true });
	await writeFile(filePath, data);
}
