import { readdir } from "node:fs/promises";
import { join } from "node:path";

/**
 * Generate a list of public record files
 */
export async function records(): Promise<string> {
	const accountFiles = (
		await readdir(
			join(process.cwd(), "public", "assets", "records", "accounts"),
		)
	).filter((filename) => filename.match(/\.pdf$/));
	const reportFiles = await readdir(
		join(process.cwd(), "public", "assets", "records", "reports"),
	);

	const collection = new Map();
	(
		[
			[accountFiles, "account", "accounts"],
			[reportFiles, "report", "reports"],
		] as [string[], string, string][]
	).forEach(([files, type, folder]) => {
		files.forEach((file) => {
			const year = Number(file.match(/(?<year>\d{4}).pdf$/)?.groups?.year);
			if (!collection.has(year)) {
				collection.set(year, {});
			}
			const record = collection.get(year);
			record[type] = ["", "assets", "records", folder, file].join("/");
		});
	});

	return [
		"/* This file is generated automatically from '/public/assets/records' */",
		`export const records: [number,{account?:string,report?:string}][] = ${JSON.stringify(
			Array.from(collection).sort(([a], [b]) => b - a),
			null,
			2,
		)};`,
	].join("\n");
}
