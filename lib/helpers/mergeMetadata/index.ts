import type { Metadata } from "next";

const defaults = {
	title: "Long Lane Pasture",
	description:
		"Long Lane Pasture is a wildlife and nature reserve in North London, maintained entirely by volunteers. This community green space offers a peaceful retreat within the city, providing a habitat for diverse wildlife, including birds, insects, and wildflowers. Preserved through local efforts, the pasture serves as a vital urban sanctuary, promoting conservation and education while fostering a connection to nature for visitors of all ages.",
	keywords: [
		"Long Lane Pasture",
		"Finchley",
		"green space",
		"urban wildlife",
		"barnet",
		"meadow",
		"wildlife",
		"nature reserve",
		"north london",
		"volunteer",
		"community",
		"restoration",
	],
};

/**
 * Use default metadata as a base and merge with provided data.
 */
export function mergeMetadata(data: Metadata): Metadata {
	const openGraph = {
		...{
			title: data.openGraph?.title || data.title || defaults.title,
			description: data.description || defaults.description,
			locale: "en_GB",
			type: "website",
			images: [
				{
					url: "https://longlanepasture.org/assets/llpsquare.jpeg",
					alt: "View from the medow at Long Lane Pasture",
				},
			],
		},
		...(data.openGraph || {}),
	} as Metadata["openGraph"];

	const icons = {
		shortcut: "/favicon.ico",
		apple: "/assets/apple-touch-icon.png",
		...(typeof data.icons === "object" ? data.icons : {}),
	} as Metadata["icons"];

	return {
		...data,
		title: data.title || defaults.title,
		description: data.description || defaults.description,
		keywords: Array.isArray(data.keywords)
			? data.keywords
			: Array.from(defaults.keywords as string[]).concat(
					data.keywords as any as string[],
				),
		icons,
		openGraph,
	} as Metadata;
}
