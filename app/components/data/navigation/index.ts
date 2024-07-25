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
];

export const linksList = pages.map(({ name, path }) => ({
	name,
	path: normalizePath(path || name),
}));

function normalizePath(path: string): string {
	return path
		.toLowerCase()
		.replace(/^\//, "")
		.replace(/[^a-z0-9]/gi, "-")
		.replace(/-+/, "-")
		.replace(/^\/*/, "/");
}
