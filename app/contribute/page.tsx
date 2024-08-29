import { volunteers } from "../../dynamic/volunteers.ts";
import { ContactUsLink } from "../components/ContactUsLink";
import { Randomise } from "../components/Randomise";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Contribute to Long Lane Pasture",
	description:
		"Caring for the Long Lane Pasture is a community effort. Find out how you can help support the Trust's work.",
};

export default () => (
	<>
		<article id="contribute-to-long-lane-pasture" className="banner">
			<figure>
				<img
					src="/assets/volunteering-banner.jpeg"
					alt="Volunteering in the pasture"
				/>
				<figcaption>
					<h2>Contribute to Long Lane Pasture</h2>
				</figcaption>
			</figure>
		</article>
		<article id="the-pasture-is-a-community-space">
			<h2>Volunteer — Just Turn Up!</h2>
			<p>
				The pasture is a community space maintained by community members to the
				benefit of all. There are many ways you can take part in caring for the
				pasture.
			</p>
			<p>
				We meet every Saturday 10am—12noon and have a break for biscuits and
				chatting at 11am. Help with the maintenance of the pasture. Trim, Weed,
				Cut, Rake, Mow, Plant, Prune, Clean, Maintain…
			</p>
			<h3>Make a charitable donation</h3>
			<p>
				Long Lane Pasture Trust is a charity registered in England & Wales (№
				1122236) and is run in accordance with its Trust Deed. Charity details
				are available on{" "}
				<a
					href="https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/4035882"
					rel="noopener"
				>
					the registry
				</a>
				.{" "}
				<strong>
					We receive no funding from the local council and rely on donations to
					undertake our work.
				</strong>{" "}
				We accept donations of any size. If you would like to make a donation,
				please contact us at <ContactUsLink />.
			</p>
			<h3>Initiate educational or community projects</h3>
			<p>
				We welcome proposals for educational or community projects that can
				benefit the Long Lane Pasture Trust. If you have an idea for a project
				you'd like us to assist with, please <ContactUsLink />.
			</p>
			<h3>Contibute to the website</h3>
			<p>
				This website is maintained as an open source project, and contributions
				are welcome. If you have an idea for a feature, please.
			</p>
		</article>
		<article id="meet-some-of-our-volunteers">
			<h2>Meet some of our volunteers</h2>
			<p>
				Here are some of the faces you might see on a Saturday morning. Come
				have a buiscuit with us! 🍪
			</p>
			<div className="figures">
				<Randomise>
					{volunteers.map(({ src, alt }) => (
						<figure key={alt}>
							<img src={src} alt={alt} loading="lazy" />
							<figcaption>{alt}</figcaption>
						</figure>
					))}
				</Randomise>
			</div>
		</article>
	</>
);
