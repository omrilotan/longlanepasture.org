import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { pictures } from "../dynamic/gallery";
import { NavigationLink } from "./components/navigation";
import { OpeningTimes } from "./components/OpeningTimes";
import { Volunteer } from "./components/Volunteer";

const title = "Long Lane Pasture. A wildlife haven in the heart of Finchley.";
const description =
	"Long Lane Pasture is a volunteer-run nature reserve in Finchley, North London. This peaceful green space provides a home for birds, insects, and wildflowers, serving as an urban sanctuary that connects visitors with nature and supports local conservation.";

export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		title,
		description,
	},
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
		<article id="pictures-gallery">
			<PicturesGallery pictures={pictures} />
		</article>
	</>
);
