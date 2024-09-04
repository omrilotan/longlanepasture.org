import type { Metadata } from "next";
import { species } from "../../dynamic/species";

export const metadata: Metadata = {
	title: "Checklist of Recorded Species at Long Lane Pasture.",
	description:
		"A checklist of species recorded at Long Lane Pasture, including plants, birds, mammals, insects, and other wildlife.",
};

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
		</article>
		{Object.entries(species).map(([title, list]) => (
			<article key={title} id={title}>
				<h3>{title}</h3>
				<ul>
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
	</>
);
