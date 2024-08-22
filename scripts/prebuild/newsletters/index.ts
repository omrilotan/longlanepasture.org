import { readdir } from "node:fs/promises";
import { join } from "node:path";

export async function newsletters(): Promise<string> {
	const dirContent = await readdir(
		join(process.cwd(), "public", "newsletters"),
	);
	const files = dirContent
		.filter((file) => file.match(/\.(pdf)$/i))
		.map((file) => ({
			url: `/newsletters/${file}`,
			issue: file.match(/^LLP-Newsletter(?<number>\w+)\s/)?.groups?.number, // could be 28a
			date: file.match(/(?<date>[^\s]+\s+\d+)\.pdf/)?.groups?.date, // could be "June 2024", could be "Autumn/Winter 2014"
		}))
		.sort((a, b) => {
			if (a.issue && b.issue) {
				return parseInt(b.issue) - parseInt(a.issue);
			}
			return 0;
		});
	return `export const newsletters = ${JSON.stringify(files, null, 2)};`;
}
