import type { Metadata } from "next";
import Link from "next/link";
import { navigation } from "../dynamic/navigation";
import { ContactUsLink } from "./components/ContactUsLink";
import { NavigationLink } from "./components/navigation";

export const metadata: Metadata = {
	title: "Page not found",
	description: "404 - Page not found",
};

export default () => (
	<>
		<article id="page-not-found">
			<h2>Page not found (404)</h2>
			<p>
				The page you are looking for was not found. Please try one of the
				following:
			</p>
			<ul>
				{navigation
					.filter(({ path }) => {
						return !path.startsWith("http") && !path.startsWith("mailto:");
					})
					.map(({ name, path }) => (
						<li key={path}>
							<Link href={path}>{name}</Link>
						</li>
					))}
			</ul>
			<p>
				If you believe this is an error, please{" "}
				<ContactUsLink>contact us</ContactUsLink> or{" "}
				<NavigationLink to="code">submit an issue</NavigationLink>. .
			</p>
		</article>
	</>
);
