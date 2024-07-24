Object.defineProperty(globalThis, "start", {
	value: async function start() {
		const video = document.querySelector("video");
		video && (video.playbackRate = 0.5);
	},
	writable: false,
	enumerable: true,
	configurable: false,
});

export {};
