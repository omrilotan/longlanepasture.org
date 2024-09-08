/**
 * Create redirects on Cloudflare Pages
 * https://developers.cloudflare.com/pages/configuration/redirects/
 *
 * Redirect pages from the old site to the new site
 */
export async function redirects() {
	return [
		["/aboutthepasture.html", "/history/", "301"],
		[
			"/aboutthepasture/LLP-ManagementPlan.pdf",
			"/assets/documents/LLP-ManagementPlan.pdf",
			"301",
		],
		["/events*", "/", "301"],
		["/getinvolved.html", "/contribute/", "301"],
		["/news*", "/history/", "301"],
		["/newsletters*", "/history/#newsletters", "301"],
		["/photogallery*", "/", "301"],
		["/thetrust.html", "/long-lane-pasture-trust/", "301"],
		["/visitor-information/", "/visit/", "301"],
		["/visitorinfo.html", "/visit/", "301"],
	]
		.map((line) => line.join(" "))
		.join("\n");
}
