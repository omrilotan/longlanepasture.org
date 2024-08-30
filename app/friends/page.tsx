import { friends } from "../../dynamic/friends.ts";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Friends of Long Lane Pasture",
	description: "Follow the links to find out more about our friends.",
};

export default () => (
	<>
		<article id="friends-of-long-lane-pasture">
			<h2>Friends of Long Lane Pasture</h2>
			<p>
				Friends and donors of Long Lane Pasture play a vital role in maintaining
				this unique green space. Their support enables dedicated volunteers to
				protect wildlife habitats, manage the beautiful wildflower meadows, and
				ensure the site remains accessible to the community. Thanks to their
				contributions, Long Lane Pasture continues to thrive as a peaceful haven
				for nature and a place of learning for visitors of all ages.
			</p>
			<img
				src="/assets/cwhbrown-panoramic-llp.jpg"
				alt="Panoramic view from Octavia Hill in Long Lane Pasture"
			/>
			<table className="links">
				<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{friends.map(({ name, href, description }) => (
						<tr key={name}>
							<td>
								<a
									href={href}
									target="_blank"
									rel="noopener"
									aria-label={[name, description].join(": ")}
								>
									{name}
								</a>
							</td>
							<td>{description}</td>
						</tr>
					))}
				</tbody>
			</table>
		</article>
	</>
);
