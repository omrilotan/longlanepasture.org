"use client";
import React, { useEffect } from "react";

export function VideoApplication({
	children,
	playbackRate,
}: {
	children: React.ReactElement;
	playbackRate?: number;
}) {
	useEffect(() => {
		if (!children.props.id) return;
		const video = document.getElementById(
			children.props.id,
		) as HTMLVideoElement;
		if (playbackRate) video.playbackRate = playbackRate;
	});

	return children;
}
