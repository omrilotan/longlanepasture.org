import { linkToPage } from "../components/navigation";
import { VideoApplication } from "../components/videoApplication";

export default () => (
	<>
		<article>
			<h2>About the Pasture</h2>
			<p>
				The Pasture (1.05 ha, 2.6 acres) is a meadow, which has remained largely
				undisturbed for centuries (apart from a small area under cultivation
				during World War 2). It has never been built on. It is within an area
				defined as being ‘deprived of public open space’.
			</p>
			<p>
				Up to the early 1980s (when it was closed to the public because of
				proposed road works) it was well-used by local people and had a public
				footpath across it. Horses grazed here for many years. The Pasture was a
				popular place. There is evidence of many activities on the land: kite
				flying, picnics, pony riding, and nature walks by school children.
			</p>
			<p>The wildlife here is now of considerable local importance.</p>
			<p>
				In 1999, after years of neglect, the Council decided that the land was
				surplus to requirements and decided to sell it for housing development.
				However, after a public campaign to keep the Pasture as green space,
				this decision was overturned and in 2006 the land was designated for
				community use.
			</p>
			<p>
				In 2005 the {linkToPage("trust")} was granted a licence to access the
				land, and work began to restore the Pasture, clear rubbish and improve
				the land for wildlife.
			</p>
		</article>
		<article>
			<VideoApplication playbackRate={0.75}>
				<video
					autoPlay
					muted
					loop
					playsInline
					controls={false}
					className="backgound"
					id={Math.random().toString(36).replace(/^\d\./, "")}
				>
					<source src="/assets/llp.mp4" type="video/mp4" />
				</video>
			</VideoApplication>
		</article>
	</>
);
