const GOOGLE_MAPS_DOMAIN = "https://maps.googleapis.com";

/**
 * Attach custom headers for Cloudflare Pages
 */
export async function headers(): Promise<string> {
	const table: string[][] = [
		["Access-Control-Allow-Origin", "*"],
		[
			"Content-Security-Policy",
			`default-src 'self' ${GOOGLE_MAPS_DOMAIN} 'unsafe-inline'`,
			"object-src 'self'",
			"frame-src https://www.google.com/",
			`img-src 'self' ${GOOGLE_MAPS_DOMAIN}`,
			"frame-ancestors 'none'",
		],
		["X-XSS-Protection", "1", "mode=block"],
		["Permissions-Policy", `geolocation=("${GOOGLE_MAPS_DOMAIN}")`],
	];
	const headers = table
		.map(([name, ...rest]) => ["\t", name, ": ", rest.join("; ")].join(""))
		.join("\n");

	return `# This file is generated automatically from '/scripts/postbuild/headers/index.ts'
/*
${headers}
`;
}
