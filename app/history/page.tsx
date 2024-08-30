import { newsletters } from "../../dynamic/newsletters";
import { ContactUsLink } from "../components/ContactUsLink";
import { NavigationLink } from "../components/navigation";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "The history of Long Lane Pasture",
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
					src="/assets/history-july1917.jpg"
					alt="Long Lane Pasture in July 1917"
					loading="lazy"
				/>
				<img
					src="/assets/history-april1977.jpg"
					alt="Long Lane Pasture in April 1977"
					loading="lazy"
				/>
				<img
					src="/assets/history-february2004.jpg"
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
				In 2005 the <NavigationLink to="trust" /> was granted a licence to
				access the land, and work began to restore the Pasture, clear rubbish
				and improve the land for wildlife.{" "}
				<NavigationLink to="the-future-for-long-lane-pasture">
					Read all about it
				</NavigationLink>
				.
				<img
					src="/assets/LLP-RestorationPlan.webp"
					alt="Long Lane Pasture Restoration Plan"
					loading="lazy"
				/>
			</p>
			<p>
				In June 2009 a 25-year lease to manage the Pasture was granted to the
				Long Lane Pasture Trust (to an agreed Management Plan) for the benefit
				of wildlife and the community.{" "}
				<NavigationLink to="long-wait-is-over-for-long-lane-pasture">
					Read all about it
				</NavigationLink>
				.
			</p>
		</article>
		<article id="a-public-greenspace">
			<h2>A Public Greenspace for a Century</h2>
			<p>
				Long Lane Pasture was purchased by the Finchley Urban District Council
				for public enjoyment and recreation on 22 February 1912. On 22 February
				2012 the Mayor of Barnet planted an oak tree on the embankment area to
				commemorate this landmark. It is an English oak, grown locally by one of
				our <NavigationLink to="contribute">Friends</NavigationLink>.
			</p>
			<p>
				The Pasture has changed little in 100 years, except that its cut hay no
				longer provides fodder for London's horses, and horses no longer graze
				here. Many of the wildflowers on the restored damp meadowland are now
				thriving again and although there is no public footpath leading to a
				bridge across the railway (one of its old names was Iron Bridge Field),
				there is a network of paths for visitors to make a less hurried visits.
				Some Finchley residents can recall varied leisure activities here: it
				was the home ground of the local football team 'Squires United; many
				enjoyed family picnics; children used to fly their kites; and classes
				from Manorside School came for nature study and afterwards made displays
				of grasses and wild flowers. It is proving as popular today as it was at
				the turn of the 20th century. The Pasture has outlived many threats and
				is now half its original size, but continues as a delightful greenspace
				for both people and wildlife.
			</p>
			<p>
				In 2012 Long Lane Pasture has launched a Centenary Photo & Art
				Competition to create a visual record of the Pasture. An Exhibition of
				over one hundred photographs and paintings of Long Lane Pasture was held
				at the Finchley ArtsDepot in October.
			</p>
			<p>
				In 2012 / 2013 Long Lane Pasture was awarded a prestigious Community
				Green Flag Award — the national award for well managed, high quality
				green spaces. The Pasture is one of 43 community green flags awarded
				across London, and that year the only one in London Borough of Barnet.
				For more information visit:{" "}
				<Link
					href="https://www.greenflagaward.org/"
					rel="noopener"
					target="_blank"
					aria-label="Green Flag Award — the national award for well managed, high quality
				green spaces"
				>
					The Green Flag Award
				</Link>
				. We have since repeatedly been awarded the Green Flag, and are very
				proud of this achievement.
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
			<p>
				To receive the newsletter by email, please <ContactUsLink />.
			</p>
		</article>
	</>
);
