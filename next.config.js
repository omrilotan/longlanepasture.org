// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
export default {
	output: "export",
	generateEtags: false,
	poweredByHeader: false,
	trailingSlash: true,
	experimental: {
		webVitalsAttribution: ["CLS", "LCP"],
	},
};
