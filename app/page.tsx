import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { pictures } from "../dynamic/gallery";
import { NavigationLink } from "./components/navigation";

export const metadata: Metadata = {
	title: "Long Lane Pasture. A wildlife haven in the heart of Finchley.",
	description:
		"Come enjoy the tranquility of the pasture and the wildlife. It is a haven for birds, butterflies and wild flowers.",
};

const PicturesGallery = dynamic(() => import("./components/PicturesGallery"), {
	ssr: false,
});

export default () => (
	<>
		<article id="a-wildlife-haven">
			<figure className="hero">
				<img
					src="/assets/homepage-hero.jpeg"
					alt="A path in Long Lane Pasture"
				/>
				<figcaption>
					<h2>
						A wildlife haven in the heart of Finchley.
						<a
							href="#a-wildlife-haven"
							aria-label="Anchor link to A wildlife haven in the heart of Finchley."
						></a>
					</h2>
				</figcaption>
			</figure>
			<p>
				The pasture is a nature reserve. It is managed by the Long Lane Pasture
				Trust and is maintained by volunteers. Purchased for public recreation
				in 1912, it was neglected for many years and recently threatened by a
				housing development.
			</p>
			<p>
				Come and enjoy the tranquility of the pasture and the wildlife. It is a
				haven for birds, butterflies and wild flowers. Please respect the
				wildlife and keep dogs on a lead. Check our{" "}
				<NavigationLink to="visit">visitor information page</NavigationLink> for
				opening times, how to get there and what to expect.
			</p>
		</article>
		<article id="volunteers-are-welcome">
			<h2>
				Volunteers are welcome - Just Turn Up!
				<a
					href="#volunteers-are-welcome"
					aria-label="Anchor link to Volunteers are welcome - Just Turn Up!"
				></a>
			</h2>
			<p>
				We meet every
				<mark>
					{" "}
					<strong>Saturday 10am-12noon</strong>{" "}
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
			More information about ways to help available on{" "}
			<NavigationLink to="contribute">Contribute page</NavigationLink>.
		</article>
		<article id="pictures-gallery">
			<PicturesGallery pictures={pictures} />
		</article>
	</>
);
