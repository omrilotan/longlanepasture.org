const pages: {
	name: string;
	path?: string;
	nav?: boolean;
}[] = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "Visitor Information",
	},
	{
		name: "Contribute",
	},
	{
		name: "History",
	},
	{
		name: "Long Lane Pasture Trust",
	},
	{
		name: "Friends",
	},
	{
		name: "X",
		path: "https://x.com/LLPasture",
	},
];

export const linksList = pages.map(({ name, path, nav = true }) => ({
	name,
	path: normalizePath(path || name),
	nav,
}));

function normalizePath(path: string): string {
	return path.startsWith("http")
		? path
		: path
				.toLowerCase()
				.replace(/^\//, "")
				.replace(/[^a-z0-9]/gi, "-")
				.replace(/-+/, "-")
				.replace(/^\/*/, "/");
}
