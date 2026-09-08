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
	const label = external ? `${name} (external link)` : `${name} page`;
	return (
		<Link
			href={path + (anchor ? `#${anchor}` : "")}
			rel={rel}
			target={target}
			aria-label={label}
			aria-current={current ? "page" : undefined}
			prefetch={!external}
			style={style}
		>
			{children ?? name}
		</Link>
	);
}
