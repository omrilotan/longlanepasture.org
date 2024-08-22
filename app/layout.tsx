import { CustomScriptLoader } from "./components/CustomScriptLoader";
import { allLinks } from "./components/navigation";
import "./layout.css";

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
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, user-scalable=yes"
				/>
				<meta name="theme-color" content="#FFFFFF" />
				<meta name="geo.region" content="GB" />
				<meta name="geo.placename" content="London Borough of Barnet" />
				<meta name="robots" content="noindex, nofollow" />
			</head>
			<body>
				<header>
					<h1>Long Lane Pasture</h1>
					<nav>
						<a className="hamburger" href="#!">
							☰
						</a>
						<ul>
							{allLinks.map((link) => (
								<li key={link.props.href}>{link}</li>
							))}
						</ul>
					</nav>
				</header>
				<main>{children}</main>
				<CustomScriptLoader path="scripts" />
			</body>
		</html>
	);
}
