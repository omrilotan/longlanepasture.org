import Link from "next/link";

const pages: {
	name: string;
	path?: string;
}[] = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "Visitor Information",
	},
	{
		name: "History",
	},
	{
		name: "Long Lane Pasture Trust",
	},
	{
		name: "Donations",
	},
];

export const links = pages.map(({ name, path }) => (
	<Link href={path || "/" + name.toLowerCase().replace(/\s/g, "-")}>
		{name}
	</Link>
));

/**
 * Get Link element for a page by substring of the page name or path.
 */
export const getLink = (
	/**
	 * Substring of the page name or path.
	 */
	substring: string,
	/**
	 * [optional] Text to display in the link instead of the page name.
	 */
	text?: string,
): JSX.Element | undefined => {
	const page = pages.find((page) =>
		Object.values(page).some((value: any): boolean =>
			value.toString?.().toLowerCase().includes(substring),
		),
	);
	return page && pageToLink(page, text);
};

function pageToLink(
	{ name, path }: (typeof pages)[0],
	text?: string,
): JSX.Element {
	return (
		<Link href={path || "/" + name.toLowerCase().replace(/\s/g, "-")}>
			{text ?? name}
		</Link>
	);
}
