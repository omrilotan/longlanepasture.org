/**
 * Attach custom headers for Cloudflare Pages
 */
export async function headers(): Promise<string> {
	const CSP = [
		["default-src", "'self'", "https://maps.googleapis.com", "'unsafe-inline'"],
		["object-src", "'self'"],
		["frame-src", "https://www.google.com/"],
		["img-src", "'self'", "https://maps.googleapis.com"],
		["frame-ancestors", "'none'"],
	]
		.map((line) => line.join(" "))
		.join("; ");

	return `# This file is generated automatically from '/scripts/postbuild/headers/index.ts'
/*
	Access-Control-Allow-Origin: *
	Content-Security-Policy: ${CSP};
`;
}
