"use client";
import { useEffect } from "react";

export const CustomScriptLoader = ({ path }: { path: string }) => {
	useEffect(() => {
		import(`../../../lib/${path}`).then((module) => {
			// do nothing
		});
	}, []);

	return null;
};
