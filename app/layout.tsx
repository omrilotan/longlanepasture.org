import { ClosureNotice } from "./components/ClosureNotice";
import { CustomScriptLoader } from "./components/CustomScriptLoader";
import { NavList, PageLink } from "./components/navigation";
import "./layout.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
	title: "Long Lane Pasture",
	description:
		"Long Lane Pasture is a community-run nature reserve in Finchley, North London.",
	keywords: [
		"Finchley",
		"green space",
		"Long Lane Pasture",
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
	icons: {
		shortcut: "/favicon.ico",
	},
	generator: "https://github.com/omrilotan/longlanepasture.org",
};
export const viewport: Viewport = {
	themeColor: "white",
	width: "device-width",
	initialScale: 1,
	userScalable: true,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactElement;
}) {
	return (
		<html lang="en-GB">
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
				<meta name="geo.region" content="GB" />
				<meta name="geo.placename" content="London Borough of Barnet" />
			</head>
			<body>
				<header>
					<h1>
						<PageLink to="home">Long Lane Pasture</PageLink>
					</h1>
					<nav>
						<a className="hamburger" href="#!">
							☰
						</a>
						<ul>
							<NavList filter="nav" />
						</ul>
					</nav>
				</header>
				<main>
					<ClosureNotice display={false} />
					{children}
					<footer>
						<NavList filter="footer" />
					</footer>
				</main>
				<CustomScriptLoader path="scripts" />
			</body>
		</html>
	);
}
