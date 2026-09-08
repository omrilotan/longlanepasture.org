import { mergeMetadata } from "../../../lib/helpers";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Pasture green flagged for 15 years",
	description:
		"An article about receiving a Green Flag Community Award for the 15th year in a row.",
	alternates: {
		canonical: "https://www.the-archer.co.uk/archive/2026/2026Sep08.pdf",
	},
});

export default () => (
	<article id="pasture-green-flagged-for-15-years">
		<h2>Pasture green flagged for 15 years</h2>
		<p className="tagline">
			As published on{" "}
			<a
				href="https://www.the-archer.co.uk/archive/2026/2026Sep08.pdf"
				target="_blank"
				rel="noopener"
				aria-label="Read the full article in The Archer"
			>
				The Archer
			</a>
			, September 2026
		</p>
		<figure className="feature-image">
			<img
				src="/assets/stories/pasture-green-flagged-for-15-years.webp"
				alt="Flying colours: The Long Lane Pasture volunteer team with their Green Flag award. Photo courtesy Donald Lyven."
			/>
			<figcaption>
				Flying colours: The Long Lane Pasture volunteer team with their Green
				Flag award. Photo courtesy Donald Lyven.
			</figcaption>
		</figure>
		<p>
			<strong>
				Volunteers at Long Lane Pasture have celebrated receiving a Green Flag
				Community Award for the 15th year in a row. The Green Flag Award scheme
				itself is celebrating its 30th year of judging and awarding well-kept
				green spaces across the UK and internationally
			</strong>
		</p>
		<p>
			Donald Lyven, chair of the Pasture committee said: “We are grateful to
			have an enthusiastic band of eager volunteers who turn out each Saturday
			between 10am and noon to keep the Pasture looking well-maintained and
			litter free. We have already seen 20 species of butterfly this year, due
			to the hot weather, and many bird species have successfully raised their
			young.”
		</p>
		<p>
			The Pasture is a two-acre nature reserve, opposite Finchley fire station
			in Long Lane, N3, that opens every day from 9am to dusk during spring,
			summer and early autumn.
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
