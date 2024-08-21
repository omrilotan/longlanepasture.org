import { readdir } from "node:fs/promises";
import { join } from "node:path";

export async function volunteers(): Promise<string> {
	const dirContent = await readdir(join(process.cwd(), "public", "volunteers"));
	const files = dirContent
		.filter((file) => file.match(/\.(jpe?g|png|gif|webp|svg)$/i))
		.map((file) => ({
			src: `/volunteers/${file}`,
			alt: file.replace(/\.\w+$/, ""),
		}));
	return `export const volunteers = ${JSON.stringify(files)};`;
}
