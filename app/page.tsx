import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Long Lane Pasture. A wildlife haven in the heart of Finchley.",
	description:
		"Come enjoy the tranquility of the pasture and the wildlife. It is a haven for birds, butterflies and wild flowers.",
};

export default () => (
	<>
		<article>
			<h2>A wildlife haven in the heart of Finchley.</h2>
			<p>
				The pasture is a nature reserve. It is managed by the Long Lane Pasture
				Trust and is maintained by volunteers. Purchased for public recreation
				in 1912, it was neglected for many years and recently threatened by a
				housing development.
			</p>
			<p>
				Come and enjoy the tranquility of the pasture and the wildlife. It is a
				haven for birds, butterflies and wild flowers. Please respect the
				wildlife and keep dogs on a lead.
			</p>
		</article>
		<article>
			<h2>Volunteers are welcome — Just Turn Up!</h2>
			<p>
				We meet every
				<mark>
					{" "}
					<strong>Saturday 10am—12noon</strong>{" "}
				</mark>
				and have a break for buiscuits and chatting at 11am.
			</p>
			<p>
				Help with the maintenance of the pasture. Trim, Weed, Cut, Rake, Mow,
				Plant, Prune, Clean, Maintain…
			</p>
			<ul>
				<li>Necessary tools and equipment provided.</li>
				<li>Volunteering is suitable for all ages.</li>
				<li>
					Most jobs require some physical effort but do not require great
					strength or skill.
				</li>
			</ul>
		</article>
		<article>TBD Pictures or something</article>
	</>
);
