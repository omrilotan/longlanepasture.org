start();
function start() {
	const nav = document.querySelector("header nav");
	nav?.addEventListener("click", (event) => {
		if ((event.target as any)?.getAttribute("href")?.startsWith("#!")) {
			event.preventDefault();
			return;
		}
		(event.target as HTMLAnchorElement)?.blur();
	});
	menuState(nav);

	notice("#closure-notice", false).then(
		(shown) => shown || notice("#temporary-notice", true),
	);
}

/**
 * The menu is opened by focus (CSS `:focus-within`), so mirror that state onto
 * the toggle for assistive technology and let Escape close it.
 */
function menuState(nav: Element | null | undefined) {
	if (!nav) return;
	const toggle = nav.querySelector<HTMLAnchorElement>(".hamburger");
	if (!toggle) return;
	const set = (open: boolean) => {
		toggle.setAttribute("aria-expanded", open.toString());
		toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
	};
	set(false);
	nav.addEventListener("focusin", () => set(true));
	nav.addEventListener("focusout", () => {
		// Focus moves between children before landing, so check on the next tick
		setTimeout(() => set(nav.contains(document.activeElement)));
	});
	nav.addEventListener("keydown", (event) => {
		if ((event as KeyboardEvent).key !== "Escape") return;
		(document.activeElement as HTMLElement)?.blur();
		toggle.blur();
		set(false);
	});
}

async function notice(selector: string, force = false): Promise<boolean> {
	const notice = document.querySelector(selector);
	if (!notice) return false;
	const shouldShowNotice =
		force ||
		(await fetch("/api/notice")
			.then((response) => response.text())
			.then((remoteState) => /^t/i.test(remoteState)));
	if (!shouldShowNotice) {
		notice.remove();
		return false;
	}
	const DISMISS_NOTICE_UNTIL = "kJRPXQY6" + selector;
	const time = window.localStorage.getItem(DISMISS_NOTICE_UNTIL);
	if (time && Number(time) > Date.now()) {
		notice.remove();
		return false;
	}
	window.localStorage.removeItem(DISMISS_NOTICE_UNTIL);
	notice.classList.remove("hidden");
	notice.querySelector("button")?.addEventListener("click", (event) => {
		(event.target as HTMLButtonElement)?.closest(".notice")?.remove();
		window.localStorage.setItem(
			DISMISS_NOTICE_UNTIL,
			(Date.now() + 1000 * 60 * 60 * 24 * 30).toString(),
		);
	});
	return true;
}

(() => {
	const icons = [
		"🌱",
		"🌿",
		"🍃",
		"🌾",
		"🌳",
		"🌲",
		"🌷",
		"🌸",
		"🌹",
		"🌺",
		"🌻",
		"🌼",
	];
	const originalTitle = document.title;
	let timeout: ReturnType<typeof setInterval>;
	function prefixTitle(prefix?: string) {
		document.title = [
			prefix ?? icons[Math.floor(Math.random() * icons.length)],
			originalTitle,
		]
			.filter(Boolean)
			.join(" ");
	}
	document.addEventListener("visibilitychange", () => {
		if (document.visibilityState === "visible") {
			clearInterval(timeout);
			prefixTitle("");
		} else {
			prefixTitle();
			timeout = setInterval(prefixTitle, 1000);
		}
	});
})();

export {};
