import { mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { headers } from "./headers/index.ts";
import { redirects } from "./redirects/index.ts";

/**
 * Example: 1970-01-01
 */
const datestamp = new Date().toISOString().split("T").shift() as string;

const setups: [string, Promise<string>][] = [
	["./out/_headers", headers()],
	["./out/_redirects", redirects()],
];

Promise.all([
	...setups.map(
		async ([path, content]): Promise<void> =>
			await writeFileWithDirs(resolve(path), await content),
	),
	rm("./out/404", { recursive: true }),
]);

async function writeFileWithDirs(
	filePath: string,
	data: string,
): Promise<void> {
	const dir = dirname(filePath);
	await mkdir(dir, { recursive: true });
	await writeFile(filePath, data);
}
