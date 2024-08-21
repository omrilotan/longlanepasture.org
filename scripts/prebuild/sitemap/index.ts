import { linksList } from "../../../lib/data/navigation/index.ts";

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
	return [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...linksList.map(
			({ path }) =>
				`\t<url><loc>${[base, path].join("")}</loc><lastmod>${datestamp}</lastmod></url>`,
		),
		"</urlset>",
	].join("\n");
}
