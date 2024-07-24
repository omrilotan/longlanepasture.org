import { getLink } from "../../src/data/navigation";

export default () => (
	<>
		<article>
			<h2>Long Lane Pasture Trust</h2>
			<p>
				Long Lane Pasture Trust is a charity registered in England & Wales (№
				1122236) and is run in accordance with its Trust Deed. Charity details
				are available on{" "}
				<a
					href="https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/4035882"
					rel="noreferrer nofollow"
				>
					the registry
				</a>
			</p>
			<p>
				The Trust was established in April 2006 in order to protect, restore and
				manage the Pasture. It holds a 25 year lease from London Borough of
				Barnet and is responsible for maintaining and safeguarding the land for
				the benefit of the community. The Trust took over the assets and
				replaced the now defunct Long Lane Pasture Action Group, a pressure
				group set up to prevent houses being build on the land.
			</p>
			<p>
				The Trust is managed wholly by volunteers and has no paid staff. Long
				Lane Pasture Trust relies on donations to protect, maintain and restore
				the Pasture. It has received generous grants from the Postcode Lottery
				Trust, Panton Trust, Rowse Honey, Big Lottery (Awards For All and BBC
				Breathing Places), the City Bridge Trust, the Milly Apthorp Charitable
				Trust, Grassroots Grants, and Neighbourhood Renewal. Organisations which
				have supported our work include BTCV, The Finchley Society, and The
				Barnet Federation of Allotment Societies. Above all, we have received
				many donations from individuals without whose contributions we would not
				have been able to safeguard this land.
			</p>
			<p>
				We appreciate all donations, large or small. If you would like to make a
				donation, please visit our {getLink("donations")} page.
			</p>
		</article>
	</>
);
