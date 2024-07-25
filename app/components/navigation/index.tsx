import Link from "next/link";
import { linksList } from "../data";

export const allLinks = linksList.map((link) => createPageLink(link));

/**
 * Get Link element for a page by substring of the page name or path.
 */
export const linkToPage = (
	/**
	 * Substring of the page name or path.
	 */
	substring: string,
	/**
	 * [optional] Text to display in the link instead of the page name.
	 */
	text?: string,
): JSX.Element | undefined => {
	const page = linksList.find((link) =>
		Object.values(link).some((value: any): boolean =>
			value.toString?.().toLowerCase().includes(substring),
		),
	);
	return page && createPageLink(page, text);
};

function createPageLink(
	{ name, path }: ArrayElement<typeof linksList>,
	text?: string,
): JSX.Element {
	return <Link href={path}>{text ?? name}</Link>;
}
