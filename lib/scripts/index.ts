import { DOMElement } from "react";

function start() {
	document.querySelector("nav")?.addEventListener("click", (event) => {
		if ((event.target as any)?.getAttribute("href").startsWith("#!")) {
			event.preventDefault();
			return;
		}
		(event.target as HTMLAnchorElement)?.blur();
	});
}
start();

export {};
