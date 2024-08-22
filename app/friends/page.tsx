import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Friends of Long Lane Pasture",
	description: "Follow the links to find out more about our friends.",
};

export default () => {
	const friends = [
		{
			name: "Avenue House",
			href: "http://www.avenuehouse.org.uk/",
			description:
				"Beautiful local historic garden and public park. Donated benches to the Pasture.",
		},
		{
			name: "Coppetts Wood",
			href: "https://coppettswood.wordpress.com/",
			description: "A nature reserve on the North Circular",
		},
		{
			name: "Green Flag Award",
			href: "https://www.greenflagaward.org/park-summary/?park=1920",
			description:
				"We are absolutely delighted to have been awarded a Green Flag.",
		},
		{
			name: "Awards For All",
			href: "https://www.tnlcommunityfund.org.uk/funding/programmes/celebratenationallottery25",
			description: "Provided funding the pond, fencing and hedges.",
		},
		{
			name: "Barnet Federation of Allotment Societies",
			href: "http://www.barnetallotments.org.uk/",
			description: "Given donations and a long-term supporter.",
		},
		{
			name: "Barnet Voluntary Service Council",
			href: "http://www.barnetvsc.org.uk/",
			description:
				"Long Lane Pasture Trust is a member. BVSC provides training and support.",
		},
		{
			name: "Breathing Places",
			href: "http://www.bbc.co.uk/breathingplaces",
			description:
				"National Lotery scheme which funded path, sign, mower and educational materials.",
		},
		{
			name: "British Trust for Conservation Volunteers",
			href: "http://www.btcv.org.uk/",
			description:
				"LLP is a Community Network Member and BTCV supplies our insurance.",
		},
		{
			name: "Butterfly Conservation",
			href: "http://www.butterfly-conservation.org/",
			description: "Provides information on the butterflies of the Pasture.",
		},
		{
			name: "The City Bridge Trust",
			href: "https://www.citybridgefoundation.org.uk/",
			description: "Major funder of fencing viewpoint and pathwork.",
		},
		{
			name: "Finchley Society",
			href: "https://www.finchleysociety.org.uk/long-lane-pasture/",
			description:
				"Regular donor and supporter which protects areas of historic or public interest in Finchley.",
		},
		{
			name: "London Natural History Society",
			href: "http://www.lnhs.org.uk/",
			description: "Top level expertise on natural history in London.",
		},
		{
			name: "London Borough of Barnet",
			href: "http://www.barnet.gov.uk/",
			description: "Owner of the Pasture from whom we lease the land.",
		},
		{
			name: "London Wildlife Trust",
			href: "http://www.wildlondon.org.uk/",
			description:
				"Conservation charity for London's wildlife with nature reserves across the Capital.",
		},
		{
			name: "Octavia Hill Society",
			href: "https://octaviahill.org/the-society/",
			description:
				"National Trust founder and greenspace pioneer who lived locally.",
		},
		{
			name: "Pointalls Allotments",
			href: "https://pointallscommunityvolunteers.co.uk/",
			description:
				"Self managed local allotment society. Established for over 90 years.",
		},
		{
			name: "Tree Council",
			href: "http://www.treecouncil.org.uk/",
			description: "Runs National Tree Planting Week in which LLP takes part.",
		},
		{
			name: "Woodcraft Wild Space",
			href: "http://www.woodcroft.org.uk/",
			description:
				"Greenspace in the neighbouring Borough of Enfield which was also saved by local residents.",
		},
	];
	return (
		<>
			<article id="friends-of-long-lane-pasture">
				<h2>Friends of Long Lane Pasture</h2>
				<p>
					Friends and donors of Long Lane Pasture play a vital role in
					maintaining this unique green space. Their support enables dedicated
					volunteers to protect wildlife habitats, manage the beautiful
					wildflower meadows, and ensure the site remains accessible to the
					community. Thanks to their contributions, Long Lane Pasture continues
					to thrive as a peaceful haven for nature and a place of learning for
					visitors of all ages.
				</p>
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
									<a href={href} target="_blank" rel="noopener">
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
};
