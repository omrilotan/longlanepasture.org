/**
 * Convert URL to a valid URL
 */
export function URLify(url: string): string {
	return url.replace(/\s/g, "%20").toLowerCase();
}
