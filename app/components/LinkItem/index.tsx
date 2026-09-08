import Link from "next/link";
import type { JSX } from "react";

export function LinkItem({
	children,
	name,
	path,
	anchor,
	style,
	current,
}: {
	children?: React.ReactNode;
	name: string;
	path: string;
	anchor?: string;
	style?: React.CSSProperties;
	current?: boolean;
}): JSX.Element {
	const external = path.startsWith("http");
	const rel = external ? "noopener" : "next";
	const target = external ? "_blank" : undefined;
	return (
		<Link
			href={path + (anchor ? `#${anchor}` : "")}
			rel={rel}
			target={target}
			aria-current={current ? "page" : undefined}
			prefetch={!external}
			style={style}
		>
			{children ?? name}
			{/* The accessible name must start with the visible text (WCAG 2.5.3),
			    so the new-tab warning is appended rather than replacing it. */}
			{external ? (
				<span className="visually-hidden"> (opens in a new tab)</span>
			) : null}
		</Link>
	);
}
