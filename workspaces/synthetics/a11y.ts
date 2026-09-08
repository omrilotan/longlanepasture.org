import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { navigation } from "../../dynamic/navigation";

/**
 * Every route the site builds. `dynamic/navigation` is generated at prebuild
 * time by globbing the page files under `app`, so a new page is covered the
 * moment it is added. External and `mailto:` destinations belong to somebody
 * else to get right.
 */
const PAGES = navigation
	.map(({ path }) => path)
	.filter((path) => path.startsWith("/"));

/**
 * WCAG 2.0/2.1/2.2 level A and AA, plus axe's best-practice rules — things
 * like heading order that are not strictly failures but degrade navigation.
 */
const TAGS = [
	"wcag2a",
	"wcag2aa",
	"wcag21a",
	"wcag21aa",
	"wcag22aa",
	"best-practice",
];

test("there are pages to check", () => {
	// Guards against `dynamic/` being missing, which would silently pass
	expect(PAGES.length).toBeGreaterThan(1);
});

/**
 * Colour contrast is the one rule whose result depends on the colour scheme,
 * and the site ships a separate dark palette, so both are checked.
 */
for (const colorScheme of ["light", "dark"] as const) {
	test.describe(`${colorScheme} mode`, () => {
		test.use({ colorScheme });

		for (const path of PAGES) {
			test(`${path} has no accessibility violations`, async ({ page }) => {
				await page.goto(path);
				const { violations } = await new AxeBuilder({ page })
					.withTags(TAGS)
					.analyze();

				expect(
					violations.map(
						({ id, impact, nodes }) =>
							`${id} (${impact}) — ${nodes.length} element(s): ${nodes
								.map(({ target }) => target.join(" "))
								.join(", ")}`,
					),
				).toEqual([]);
			});
		}
	});
}
