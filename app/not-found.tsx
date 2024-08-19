import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Page not found",
	description: "404 - Page not found",
};

export default () => (
	<>
		<article>
			<h2>Page not found</h2>
			<p>404 - Page not found</p>
		</article>
	</>
);
