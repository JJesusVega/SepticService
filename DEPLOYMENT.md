# Deployment

This is a Vite single-page application. Deploy the generated `dist/` directory
to the UAT or production static hosting environment.

## Environment files

Create the environment file for the target environment from its example:

```sh
cp .env.uat.example .env.uat
# or
cp .env.production.example .env.production
```

Replace the placeholder values before building. Do not commit `.env.uat` or
`.env.production` when they contain environment-specific values.

Vite embeds `VITE_*` values into browser JavaScript at build time. These values
must be treated as public configuration, not server-side secrets.

To change the displayed contact details per environment, set
`VITE_CONTACT_PHONE` and `VITE_CONTACT_EMAIL`. The build rejects a non-empty
phone or email value that does not match the expected format.

## Builds

```sh
npm ci
npm run lint
npm run build:uat
```

For production, run:

```sh
npm ci
npm run lint
npm run build:production
```

The UAT and production builds both output to `dist/`. Publish that directory
after the build succeeds. To verify an artifact locally, run `npm run preview`.

## GitHub Pages

GitHub Pages serves project sites from `/<repo-name>/`, so use the dedicated
`ghpages` build mode, which sets the Vite `base` path to `/SepticService/`:

```sh
npm ci
npm run lint
npm run build:ghpages
```

Publish the resulting `dist/` directory to the `gh-pages` branch (or the
branch/folder configured in the repository's Pages settings).

A [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)
workflow builds and deploys automatically on every push to `main` using
GitHub's official Pages actions. Enable it by setting the repository's
**Settings → Pages → Source** to "GitHub Actions". Provide the
`VITE_EMAILJS_*` secrets and, optionally, the `VITE_CONTACT_PHONE` /
`VITE_CONTACT_EMAIL` repository variables the workflow references.

Because GitHub Pages has no server-side rewrite support for the SPA's browser
history routes, [public/404.html](public/404.html) redirects unknown paths
back to the app with the original path encoded in the query string, and
[index.html](index.html) decodes it before React Router mounts (the
[rafgraph/spa-github-pages](https://github.com/rafgraph/spa-github-pages)
technique). If the repository is renamed, update `GITHUB_PAGES_BASE` in
[vite.config.ts](vite.config.ts) to match.

## SPA route fallback

The app uses browser history routing. Configure the host to return
`/index.html` with status `200` for application routes, including a direct load
of `/services` or `/contact`.

For Netlify, add this redirect rule to `public/_redirects`:

```text
/* /index.html 200
```

For Vercel, add a rewrite from `/(.*)` to `/` in `vercel.json`. For Nginx, use
`try_files $uri $uri/ /index.html;` in the site location block.

## CI/CD variables

When building in CI, provide the three `VITE_EMAILJS_*` values as environment
variables or generate the matching `.env.uat` / `.env.production` file during
the build job. Select the build command using the deployment target:

| Target | Command |
| --- | --- |
| UAT | `npm run build:uat` |
| Production | `npm run build:production` |
| GitHub Pages | `npm run build:ghpages` |