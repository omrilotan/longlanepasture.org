const pages: {
	name: string;
	path?: string;
}[] = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "Visitor Information",
	},
	{
		name: "History",
	},
	{
		name: "Long Lane Pasture Trust",
	},
	{
		name: "Donations",
	},
	{
		name: "Friends",
	},
	{
		name: "X",
		path: "https://x.com/LLPasture",
	},
];

export const linksList = pages.map(({ name, path }) => ({
	name,
	path: normalizePath(path || name),
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
