import { species } from "../../dynamic/species";
import { mergeMetadata } from "../../lib/helpers";
import pkg from "../../package.json" with { type: "json" };
import { NavigationLink } from "../components/NavigationLink";
const { homepage } = pkg;

/** Anchor id for a species category */
const slug = (title: string): string =>
	title.trim().toLowerCase().replace(/\s+/g, "-");

export const metadata = mergeMetadata({
	title: "Checklist of Recorded Species at Long Lane Pasture.",
	description:
		"A checklist of species recorded at Long Lane Pasture, including plants, birds, mammals, insects, and other wildlife.",
	alternates: {
		canonical: `${homepage}/species/`,
	},
});

export default () => (
	<>
		<article id="species">
			<h2>
				Checklist of Recorded Species
				<a
					href="#species"
					aria-label="Anchor link to Checklist of Recorded Species"
				></a>
			</h2>
			<p>
				This is a list of all species recorded at Long Lane Pasture.
				<br />* indicates that this species is known to have bred on the
				Pasture.
			</p>
			<nav aria-label="Species categories" className="jump-nav">
				<h3>Jump to</h3>
				<ul>
					{Object.keys(species).map((title) => (
						<li key={title}>
							<a href={`#${slug(title)}`}>{title}</a>
						</li>
					))}
				</ul>
			</nav>
		</article>
		{Object.entries(species).map(([title, list]) => (
			<article key={title} id={slug(title)}>
				<h3>
					{title}
					<a
						href={`#${slug(title)}`}
						aria-label={`Anchor link to ${title}`}
					></a>
				</h3>
				<ul className="species-list">
					{list
						.map((item) => Object.entries(item))
						.map(([[commonName, scientificName]]) => (
							<li key={commonName}>
								{Array.isArray(scientificName) ? (
									<>
										{commonName}:{" "}
										<ul>
											{scientificName
												.map((i) => Object.entries(i))
												.map(([[item, scientificName]]) => (
													<li key={item}>
														{[item, scientificName].filter(Boolean).join(": ")}
													</li>
												))}
										</ul>
									</>
								) : (
									[commonName, scientificName].filter(Boolean).join(": ")
								)}
							</li>
						))}
				</ul>
			</article>
		))}
		<article>
			<p className="highlight">
				Check our{" "}
				<NavigationLink to="visit">visitor information</NavigationLink> and come
				by see how many you can spot for yourself!
			</p>
		</article>
	</>
);
