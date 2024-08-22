"use client";

import type { ReactImageGalleryItem } from "react-image-gallery";
import ReactImageGallery from "react-image-gallery";

export function PicturesGallery({ pictures }: { pictures?: string[] }) {
	const images: ReactImageGalleryItem[] =
		pictures?.filter(Boolean).map(
			(original: string): ReactImageGalleryItem => ({
				original,
				originalAlt: "A picture taken in Long Lane Pasture",
			}),
		) || [];
	return (
		<ReactImageGallery items={images} lazyLoad={true} slideDuration={200} />
	);
}
