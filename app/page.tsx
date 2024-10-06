import dynamic from "next/dynamic";
import { pictures } from "../dynamic/gallery";
import { mergeMetadata } from "../lib/helpers";
import { Campaign } from "./components/Campaign";
import { NavigationLink } from "./components/navigation";
import { OpeningTimes } from "./components/OpeningTimes";
import { Volunteer } from "./components/Volunteer";

export const metadata = mergeMetadata({
	title: "Long Lane Pasture. A wildlife haven in the heart of Finchley.",
	description:
		"Long Lane Pasture is a volunteer-run nature reserve in Finchley, North London. This peaceful green space provides a home for birds, insects, and wildflowers, serving as an urban sanctuary that connects visitors with nature and supports local conservation.",
	alternates: {
		canonical: "https://longlanepasture.org/",
	},
});

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
				Long Lane Pasture is a volunteer-run nature reserve in Finchley, North
				London. This peaceful green space provides a home for birds, insects,
				and wildflowers, serving as an urban sanctuary that connects visitors
				with nature and supports local conservation.
			</p>
			<p>
				Discover the beauty of Long Lane Pasture, where birds, butterflies, and
				wildflowers thrive. Enjoy a peaceful escape from the city. Please
				respect the wildlife and keep dogs on a lead.
			</p>
			<Campaign />
			<p className="highlight">
				Our{" "}
				<a
					href="https://www.gofundme.com/f/buy-long-lane-pastures-new-equipment"
					target="_blank"
					rel="noopener"
				>
					GoFundMe
				</a>{" "}
				is raising funds to replace vital equipment. Help us sustain this
				community nature reserve 🌿. Every contribution helps.
			</p>
			<OpeningTimes />
			<p>
				Check our{" "}
				<NavigationLink to="visit">visitor information page</NavigationLink> for
				more information on how to get there and what to expect.
			</p>
		</article>
		<article id="volunteers-are-welcome">
			<Volunteer />
			More information about ways to help available on{" "}
			<NavigationLink to="contribute">Contribute page</NavigationLink>.
		</article>
		<article id="photos-gallery">
			<h3>Photos taken at Long Lane Pasture</h3>
			<PicturesGallery pictures={pictures} />
		</article>
	</>
);
