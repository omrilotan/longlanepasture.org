import { VideoApplication } from "./videoApplication";

export default () => {
	return (
		<>
			<article>
				<h2>A wildlife haven in the heart of Finchley.</h2>
				<p>
					The pasture is a nature reserve. It is managed by the Long Lane
					Pasture Trust and is maintained by volunteers.
				</p>
			</article>
			<article>
				<VideoApplication>
					<video
						autoPlay
						muted
						loop
						playsInline
						controls={false}
						className="backgound"
					>
						<source src="/llp.mp4" type="video/mp4" />
					</video>
				</VideoApplication>
			</article>
		</>
	);
};
