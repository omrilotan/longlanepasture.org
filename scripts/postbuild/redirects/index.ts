/**
 * Create redirects on Cloudflare Pages
 * https://developers.cloudflare.com/pages/configuration/redirects/
 *
 * Redirect pages from the old site to the new site
 */
export async function redirects() {
	return [
		[
			"/aboutthepasture/LLP-ManagementPlan.pdf",
			"/assets/documents/llp-management-plan.pdf",
			"301",
		],
		["/aboutthepasture*", "/history/", "301"],
		["/events*", "/", "301"],
		["/getinvolved.html", "/contribute/", "301"],
		["/news*", "/history/", "301"],
		["/thetrust*", "/the-trust/", "301"],
		["/newsletters*", "/history/#newsletters", "301"],
		["/photogallery*", "/photos/", "301"],
		["/visitor-information/", "/visit/", "301"],
		["/visitorinfo.html", "/visit/", "301"],
	]
		.map((line) => line.join(" "))
		.join("\n");
}
