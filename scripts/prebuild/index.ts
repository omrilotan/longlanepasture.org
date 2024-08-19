import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { linksList } from "../../lib/data/navigation/index.ts";

/**
 * Example: 1970-01-01
 */
const datestamp = new Date().toISOString().split("T").shift();

Promise.all(
	[
		["humans.txt", humans()],
		["sitemap.xml", sitemap("https://longlanepasture.org")],
	].map(([path, content]) => writeFile(resolve("./public", path), content)),
);

/**
 * humans.txt
 */
function humans(): string {
	return Object.entries({
		TEAM: {
			"Long Lane Pasture Trust": null,
			Contact: "longlanepasture@gmail.com",
			X: "@LLPasture",
			From: "Finchley, London, UK",
		},
		SITE: {
			"Last update": datestamp,
			Language: "en-GB",
			Doctype: "HTML5",
		},
	})
		.map(([section, data]) =>
			[
				`/* ${section} */`,
				...Object.entries(data).map(([key, value]) =>
					[`\t${key}`, value].filter(Boolean).join(": "),
				),
				"",
			].join("\n"),
		)
		.join("\n");
}

/**
 * sitemap.xml
 */
function sitemap(base: string): string {
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
