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