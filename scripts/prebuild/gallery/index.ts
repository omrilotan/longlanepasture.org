import { readdir } from "node:fs/promises";
import { join } from "node:path";

/**
 * Create a list of images in "gallery" directory
 */
export async function gallery(): Promise<string> {
	const dirContent = await readdir(join(process.cwd(), "public", "gallery"));
	const files = dirContent
		.filter((file) => file.match(/\.(jpe?g|png|gif|webp|svg)$/i))
		.map((file: string): string => `/gallery/${file}`);
	return [
		"/* This file is generated automatically from '/public/gallery' */",
		`export const pictures: string[] = ${JSON.stringify(files, null, 2)};`,
	].join("\n");
}
