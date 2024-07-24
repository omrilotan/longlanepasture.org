import { links } from "../src/data";

import "./layout.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactElement;
}) {
	const title = "Long Lane Pasture";
	const description = "Long Lane Pasture";
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
				<title>{title}</title>
				<meta name="description" content={description} />
			</head>
			<body>
				<header>
					<h1>{title}</h1>
					<nav>
						<a className="hamburger" href="#!">
							☰
						</a>
						<ul>
							{links.map((link) => (
								<li key={link.props.href}>{link}</li>
							))}
						</ul>
					</nav>
				</header>
				<main>{children}</main>
			</body>
		</html>
	);
}
