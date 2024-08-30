import { friends } from "./friends/index.ts";
import { gallery } from "./gallery/index.ts";
import { humans } from "./humans/index.ts";
import { navigation } from "./navigation/index.ts";
import { newsletters } from "./newsletters/index.ts";
import { records } from "./records/index.ts";
import { sitemap } from "./sitemap/index.ts";
import { species } from "./species/index.ts";
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
	["./dynamic/friends.ts", friends()],
	["./dynamic/gallery.ts", gallery()],
	["./dynamic/navigation.ts", navigation()],
	["./dynamic/newsletters.ts", newsletters()],
	["./dynamic/records.ts", records()],
	["./dynamic/species.ts", species()],
	["./dynamic/volunteers.ts", volunteers()],
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
