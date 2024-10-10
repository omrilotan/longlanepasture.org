import dynamic from "next/dynamic";
import { pictures } from "../../dynamic/gallery";
import { ContactUsLink } from "../components/ContactUsLink";
import { NavigationLink } from "../components/NavigationLink";

const PicturesGallery = dynamic(() => import("../components/PicturesGallery"), {
	ssr: false,
});

export default () => (
	<article id="photos-gallery">
		<h2>Photos taken at Long Lane Pasture</h2>
		<p>
			Discover the beauty of Long Lane Pasture, where birds, butterflies, and
			wildflowers thrive. Enjoy a peaceful escape from the city. Please respect
			the wildlife and keep dogs on a lead. See{" "}
			<NavigationLink to="visit">visitor information</NavigationLink> for more
			information on how to get there and what to expect.
		</p>
		<p>
			Have a photo you'd like to share?{" "}
			<ContactUsLink>Get in touch with us</ContactUsLink>.
		</p>
		<PicturesGallery pictures={pictures} />
		<p>All photos are taken by volunteers and visitors to Long Lane Pasture.</p>
	</article>
);
