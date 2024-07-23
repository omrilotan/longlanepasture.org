"use client";
import React, { useEffect } from "react";

export function VideoApplication({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		console.log(children);
	});

	return children;
}
