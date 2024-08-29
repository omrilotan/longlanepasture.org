export function isExternalLink(path: string = ""): boolean {
	return path.startsWith("http") || path.startsWith("mailto:");
}

export function normalizePath(path: string): string {
	return isExternalLink(path)
		? path
		: path
				.toLowerCase()
				.replace(/^\//, "")
				.replace(/[^a-z0-9]/gi, "-")
				.replace(/-+/, "-")
				.replace(/^\/*/, "/");
}
