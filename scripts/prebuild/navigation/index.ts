import { glob } from "glob";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { parse } from "yaml";

export async function navigation() {
	const paths = (await glob("app/**/page.tsx")).map((file) =>
		file.replace(/^app/, "").replace(/page.tsx$/, ""),
	);

	const file = await readFile(
		join(process.cwd(), "src", "navigation", "index.yml"),
		"utf8",
	);
	const data = parse(file) as {
		name: string;
		path?: string;
		nav?: boolean;
		footer?: boolean;
	}[];

	data.forEach((page) => {
		if (!page.path) {
			page.path = normalizePath(page.name);
		}
	});

	paths.forEach((path) => {
		if (data.find((page) => page.path === path)) {
			return;
		}
		if (
			data.find(
				(page) =>
					page.name.toLowerCase().replace(/\W/, "-") ===
					path.replace(/(^\/|\/$)/g, ""),
			)
		) {
			return;
		}
		data.push({
			name: capitalize(
				(path.split("/").filter(Boolean).pop() || "").replace(/-/g, " "),
			),
			path,
			nav: false,
			footer: false,
		});
	});

	return [
		"/* This file is generated automativcally from '/src/navigation/index.yml' */",
		`export const navigation: {name: string, path: string, nav?: boolean, footer?: boolean}[] = ${JSON.stringify(data, null, 2)};`,
	].join("\n");
}

/** Capitalise every word in a sentence */
function capitalize(string: string) {
	return string.replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Normalize a path to a consistent format
 */
function normalizePath(path: string): string {
	return path.startsWith("http") || path.startsWith("mailto:")
		? path // external link or email stay as is
		: path
				.toLowerCase()
				.replace(/[^\w|\/]/gi, "-") // Allow only alphanumeric, underscore, hyphen, and slash - everything else is replaced with a hyphen
				.replace(/-+/, "-") // replace multiple hyphens with a single hyphen
				.replace(/^\/*/, "/") // ensure path starts with a single slash
				.replace(/[^\/]$/, "$&/"); // ensure path ends with a single slash
}
