import type { Metadata } from "next";
import { ContactUsLink } from "../components/ContactUsLink";
import { volunteers } from "../../dynamic/volunteers.ts";

export const metadata: Metadata = {
	title: "Contribute to Long Lane Pasture",
	description:
		"Caring for the Long Lane Pasture is a community effort. Find out how you can help support the Trust's work.",
};

export default () => (
	<>
		<article className="banner">
			<h2>Contribute to Long Lane Pasture</h2>
			<img
				src="/assets/volunteering-banner.jpeg"
				alt="Volunteering in the pasture"
				loading="lazy"
			/>
		</article>
		<article>
			<p>
				The pasture is a community space maintained by community members to the
				benefit of all. There are many ways you can take part in caring for the
				pasture.
			</p>
			<h3>Volunteer — Just Turn Up!</h3>
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
				. We accept donations of any size. If you would like to make a donation,
				please contact us at <ContactUsLink />
			</p>
			<h3>Initiate educational or community projects</h3>
			<p>
				We welcome proposals for educational or community projects that can
				benefit the Long Lane Pasture Trust. If you have an idea for a project
				you'd like us to assist with, please <ContactUsLink />.
			</p>
		</article>
		<article>
			<h3>Meet some of our volunteers</h3>
			<div className="figures">
				{volunteers.map(({ src, alt }) => (
					<figure key={alt}>
						<img src={src} alt={alt} loading="lazy" />
						<figcaption>{alt}</figcaption>
					</figure>
				))}
			</div>
		</article>
	</>
);
