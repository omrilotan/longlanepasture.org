export async function onRequest(context: EventContext) {
	const host =
		context.request.headers.get("host") || new URL(context.request.url).host;
	if (!host.endsWith("pages.dev")) return await context.next();

	const cookies = parseCookie(context.request.headers.get("cookie"));
	if (cookies.password === context.env.PASSWORD) return await context.next();

	if (context.request.method === "POST") {
		const formData = await context.request.formData();
		const password = formData.get("password");
		if (password === context.env.PASSWORD) {
			return new Response(refreshHTML(), {
				headers: {
					"Set-Cookie": `password=${password}; Max-Age=${60 * 60 * 3}; path=/`,
					"Content-Type": "text/html",
				},
			});
		} else {
			return new Response(formHTML("Wrong password. Try again"), {
				headers: {
					"Content-Type": "text/html",
				},
				status: 401,
			});
		}
	}
	return new Response(formHTML(), {
		headers: {
			"Content-Type": "text/html",
		},
		status: 403,
	});
}

function parseCookie(string: string): Record<string, string> {
	try {
		return string
			.split(";")
			.map((pair) => pair.split("="))
			.reduce((acc, [key, value]) => {
				acc[key.trim()] = value.trim();
				return acc;
			}, {});
	} catch (error) {
		// ignore
		return {};
	}
}

function formHTML(title = "This page is password protected.") {
	return `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body { text-align: center; padding-top: 2em; }
input { width: 90%; font-size: 1.5em; padding: 0.5em; }
button { font-size: 1.5em; padding: 0.5em; margin-top: 1em; }
</style>
</head>
<body>
<h1>${title}</h1>
<form method="post">
	<input name="password" type="password" placeholder="Enter Password" />
	<button>Submit</button>
</form>
</body>
</html>
`;
}

function refreshHTML() {
	return `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body { text-align: center; padding-top: 2em; }
</style>
</head>
<body>
<h1>Logged in.</h1>
<script>
	setTimeout(() => {
		window.location = window.location;
	}, 1000);
</script>
</body>
</html>
`;
}
