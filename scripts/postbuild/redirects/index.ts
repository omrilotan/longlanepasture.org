/**
 * Create redirects on Cloudflare Pages
 * https://developers.cloudflare.com/pages/configuration/redirects/
 *
 * Redirect pages from the old site to the new site
 */
export async function redirects() {
	return [
		["/visitorinfo.html", "/visitor-information/", "301"],
		["/aboutthepasture.html", "/history/", "301"],
		["/getinvolved.html", "/contribute/", "301"],
		["/news.html", "/", "301"],
		["/photogallery.html", "/", "301"],
		["/thetrust.html", "/long-lane-pasture-trust/", "301"],
		["/newsletters*", "/history/#newsletters", "301"],
		[
			"/aboutthepasture/LLP-ManagementPlan.pdf",
			"/assets/documents/LLP-ManagementPlan.pdf",
			"301",
		],
	]
		.map((line) => line.join(" "))
		.join("\n");
}
