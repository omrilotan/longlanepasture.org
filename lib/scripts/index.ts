start();
function start() {
	document.querySelector("nav")?.addEventListener("click", (event) => {
		if ((event.target as any)?.getAttribute("href")?.startsWith("#!")) {
			event.preventDefault();
			return;
		}
		(event.target as HTMLAnchorElement)?.blur();
	});

	notice();
}

function notice() {
	const notice = document.querySelector(".notice");
	if (!notice) return;

	const cookies = document.cookie.split(";").reduce(
		(acc, pair) => {
			const [key, value] = pair.split("=");
			acc[key.trim()] = value?.trim();
			return acc;
		},
		{} as Record<string, string>,
	);
	if (cookies["dismiss-notice"]) {
		notice.remove();
		return;
	}
	notice.classList.remove("hidden");
	notice.querySelector("button")?.addEventListener("click", (event) => {
		(event.target as HTMLButtonElement)?.closest(".notice")?.remove();
		document.cookie = `dismiss-notice=please; Max-Age=${60 * 60 * 24 * 30}`;
	});
}

export {};
