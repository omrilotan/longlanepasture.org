import {
	normalizePath,
	isExternalLink,
} from "../../../lib/navigation/index.ts";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { parse } from "yaml";

/**
 * Create content for sitemap.xml
 */
export async function sitemap({
	base,
	datestamp,
}: {
	base: string;
	datestamp: string;
}): Promise<string> {
	const file = await readFile(
		join(process.cwd(), "src", "navigation", "index.yml"),
		"utf8",
	);
	const data = parse(file) as { name: string; path?: string; menu?: boolean }[];
	return [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...data
			.filter(({ path }) => isExternalLink(path) === false)
			.map(
				({ path, name }) =>
					`\t<url><loc>${[base, normalizePath(path || name)].join("")}</loc><lastmod>${datestamp}</lastmod></url>`,
			),
		"</urlset>",
	].join("\n");
}
