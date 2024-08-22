import { newsletters } from "../../dynamic/newsletters";
import { ContactUsLink } from "../components/ContactUsLink";
import { linkToPage } from "../components/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Long Lane Pasture: About the Pasture",
	description:
		"The Pasture is a meadow, which has remained largely undisturbed for centuries.",
};

export default () => (
	<>
		<article id="about-the-pasture">
			<h2>About the Pasture</h2>
			<p>
				The Pasture (1.05 ha, 2.6 acres) is a meadow, which has remained largely
				undisturbed for centuries (apart from a small area under cultivation
				during World War 2). It has never been built on. It is within an area
				defined as being 'deprived of public open space'.
			</p>
			<p>
				Up to the early 1980s (when it was closed to the public because of
				proposed road works) it was well-used by local people and had a public
				footpath across it. Horses grazed here for many years. The Pasture was a
				popular place. There is evidence of many activities on the land: kite
				flying, picnics, pony riding, and nature walks by school children.
			</p>
			<p className="spread">
				<img
					src="/assets/july1917.jpg"
					alt="Long Lane Pasture in July 1917"
					loading="lazy"
				/>
				<img
					src="/assets/april1977.jpg"
					alt="Long Lane Pasture in April 1977"
					loading="lazy"
				/>
				<img
					src="/assets/february2004.jpg"
					alt="Long Lane Pasture in February 2004"
					loading="lazy"
				/>
			</p>
			<p>The wildlife here is now of considerable local importance.</p>
			<p>
				In 1999, after years of neglect, the Council decided that the land was
				surplus to requirements and decided to sell it for housing development.
				However, after a public campaign to keep the Pasture as green space,
				this decision was overturned and in 2006 the land was designated for
				community use.
			</p>
			<p>
				In 2005 the {linkToPage("trust")} was granted a licence to access the
				land, and work began to restore the Pasture, clear rubbish and improve
				the land for wildlife.
				<img
					src="/assets/LLP-RestorationPlan.webp"
					alt="Long Lane Pasture Restoration Plan"
					loading="lazy"
				/>
			</p>
		</article>
		<article id="newsletters">
			<h2>📰 Newsletters</h2>
			<p>
				We publish newsletters.
				<br />
				You can read the latest issue, {newsletters[0].date}:{" "}
				<a href={newsletters[0].url} target="_black">
					Issue № {newsletters[0].issue}
				</a>
				.
			</p>
			<p>
				<details>
					<summary>Previous newsletters are available (click here)</summary>
					<ul>
						{newsletters.unshift() &&
							newsletters.map(({ issue, url, date }) => (
								<li key={date}>
									{date}:{" "}
									<a href={url} target="_blank">
										Issue № {issue}
									</a>{" "}
								</li>
							))}
					</ul>
				</details>
			</p>
			<p>
				To receive the newsletter by email, please <ContactUsLink />.
			</p>
		</article>
	</>
);
