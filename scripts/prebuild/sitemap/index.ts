import { glob } from "glob";

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
	const paths = (await glob("app/**/page.tsx")).map((file) =>
		file.replace(/^app/, "").replace(/page.tsx$/, ""),
	);
	return [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...paths.map(
			(path) =>
				`\t<url><loc>${[base, path].join("")}</loc><lastmod>${datestamp}</lastmod></url>`,
		),
		"</urlset>",
	].join("\n");
}
