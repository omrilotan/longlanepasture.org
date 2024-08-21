import { readdir } from "node:fs/promises";
import { join } from "node:path";

/**
 * Create a list of images in "pictures" directory
 */
export async function pictures(): Promise<string> {
	const dirContent = await readdir(join(process.cwd(), "public", "pictures"));
	const files = dirContent
		.filter((file) => file.match(/\.(jpe?g|png|gif|webp|svg)$/i))
		.map((file) => `/pictures/${file}`);
	return `export const pictures = ${JSON.stringify(files)};`;
}
