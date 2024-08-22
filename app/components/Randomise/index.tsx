"use client";

import React, { use, useEffect, useState } from "react";

export function Randomise({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	// TODO: Randomise children. Straight up randomising the order of the children causes an error during hydration (The server HTML was replaced with client content).
	// const childrenArray = React.Children.toArray(children);
	// childrenArray.sort(() => Math.random() - 0.5);
	return <>{children}</>;
}
