"use client";
import type { ReactElement } from "react";
import ImageGallery from "react-image-gallery";

export function PicturesGallery({ pictures }: { pictures?: string[] }) {
	const images = pictures?.map((picture) => ({
		original: picture,
		thumbnail: picture,
	}));
	return <ImageGallery items={images} lazyLoad={true} slideDuration={200} />;
}
