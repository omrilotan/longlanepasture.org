"use client";

import { usePathname } from "next/navigation";
import type { JSX } from "react";
import { navigation } from "../../../dynamic/navigation";
import { LinkItem } from "../LinkItem";

/**
 * List of navigation links.
 */
export function NavList({
	filter,
}: {
	filter?: "nav" | "footer" | "internal";
}): JSX.Element {
	const pathname = usePathname();
	return (
		<ul>
			{navigation
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
						<LinkItem
							name={name}
							path={path}
							current={isCurrent(pathname, path)}
						>
							{name}
						</LinkItem>
					</li>
				))}
		</ul>
	);
}

/** Whether a navigation entry represents the page currently being viewed */
function isCurrent(pathname: string | null, path: string): boolean {
	if (!pathname || path.startsWith("http") || path.startsWith("mailto:")) {
		return false;
	}
	const trim = (value: string) => value.replace(/\/+$/, "");
	return trim(pathname) === trim(path);
}
