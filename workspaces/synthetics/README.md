# Synthetic monitoring

`index.ts` checks that the site works. `a11y.ts` runs [axe-core] over **every
route**, in both colour schemes, and fails on any WCAG 2.0/2.1/2.2 A or AA
violation or axe best-practice finding.

The route list comes from `dynamic/navigation`, which prebuild generates by
globbing the page files under `app` — so a new page is covered automatically,
with nothing to add here.

Both run against `baseURL` (localhost:3000), so start the site first — either
`node --run dev`, or `node --run build && node --run start` to test what ships.
`node --run test` from the repo root does the build-and-serve for you.

## Run

```bash
 npm t -w synthetics -- [--ui]
```

Only the accessibility checks:

```bash
 npm t -w synthetics -- a11y.ts
```

[axe-core]: https://github.com/dequelabs/axe-core
