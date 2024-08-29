import { navigation } from "../../../dynamic/navigation";
import { normalizePath } from "../../../lib/navigation";
import Link from "next/link";

const linksList = navigation.map(
	({ name, path, nav = true, footer = true }) => ({
		name,
		path: normalizePath(path || name),
		nav,
		footer,
	}),
);

/**
 * List of navigation links.
 */
export function NavList({
	filter,
}: {
	filter?: "nav" | "footer" | "internal";
}): JSX.Element {
	return (
		<ul>
			{linksList
				.filter(({ path, footer, nav }) => {
					switch (filter) {
						case "nav":
							return !!nav;
						case "footer":
							return !!footer;
						case "internal":
							return !path.startsWith("http");
						default:
							return true;
					}
				})
				.map(({ path, name }) => (
					<li key={path}>
						<LinkItem name={name} path={path}>
							{name}
						</LinkItem>
					</li>
				))}
		</ul>
	);
}

/**
 * Get Link element for a page by substring of the page name or path.
 */
export function PageLink({
	children,
	to,
}: {
	to: string;
	children?: string;
	text?: string;
}): JSX.Element | null {
	const page = linksList.find((link) =>
		Object.values(link).some((value: any): boolean =>
			value.toString?.().toLowerCase().includes(to),
		),
	);
	if (!page) return null;

	const { name, path } = page;

	return (
		<LinkItem name={name} path={path}>
			{children ?? name}
		</LinkItem>
	);
}

function LinkItem({
	name,
	path,
	children,
}: {
	name: string;
	path: string;
	children?: string;
}): JSX.Element {
	const external = path.startsWith("http");
	const rel = external ? "noopener" : "next";
	const taregt = external ? "_blank" : undefined;
	const label = external ? `${name} (external link)` : `${name} page`;
	return (
		<Link
			href={path}
			rel={rel}
			target={taregt}
			aria-label={label}
			prefetch={!external}
		>
			{children ?? name}
		</Link>
	);
}
