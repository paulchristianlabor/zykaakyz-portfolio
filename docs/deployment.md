# Deployment Guide

## Build for Production

Run the production build before deploying:

```
pnpm run build
```

Output location: `dist/portfolio/browser/`

This folder contains:

- `index.html` — prerendered HTML shell
- `main-*.js` — optimised and bundled JavaScript
- `styles-*.css` — optimised CSS (Tailwind + custom styles)
- `favicon.ico` — site icon
- Source maps (if enabled)

The output is a fully static site — no Node.js server is required.

## Supported Hosting Platforms

### Netlify

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to https://netlify.com and click "Add new site"
3. Connect your repository
4. Set build settings:
   - Build command: `pnpm run build`
   - Publish directory: `dist/portfolio/browser`
5. Click "Deploy site"

For SPA routing, add a `_redirects` file in the `public/` folder:

```
/*  /index.html  200
```

### GitHub Pages

1. Build the project: `pnpm run build`
2. Push the contents of `dist/portfolio/browser/` to a `gh-pages` branch:

```
npx gh-pages -d dist/portfolio/browser
```

3. In your repository settings, set GitHub Pages source to the `gh-pages` branch

Note: If deploying to a subdirectory (e.g. `username.github.io/portfolio`), update the `<base href>` in `src/index.html` to match.

### Vercel

1. Push your code to a Git repository
2. Log in to https://vercel.com and import the repository
3. Set:
   - Framework Preset: Other
   - Build Command: `pnpm run build`
   - Output Directory: `dist/portfolio/browser`
4. Click Deploy

Vercel automatically handles SPA routing. No extra configuration is needed.

### Cloudflare Pages

1. Push your code to a Git repository
2. Log in to https://pages.cloudflare.com and create a new project
3. Connect your repository
4. Set:
   - Build command: `pnpm run build`
   - Build output directory: `dist/portfolio/browser`
5. Click Save and Deploy

### Manual / Self-Hosted

Copy the contents of `dist/portfolio/browser/` to any static file server.

Configure the server to serve `index.html` for all routes that do not match a file. This is required for Angular's client-side routing to work on direct URL access.

Example Nginx configuration:

```
server {
    root /var/www/portfolio/browser;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Build Output Explanation

| File           | Description                                               |
| -------------- | --------------------------------------------------------- |
| `index.html`   | Prerendered HTML shell — main entry point                 |
| `main-*.js`    | Bundled Angular application code (hashed for caching)     |
| `styles-*.css` | All CSS including Tailwind utilities (hashed for caching) |
| `chunk-*.js`   | Code-split chunks for lazy-loaded modules (if any)        |
| `favicon.ico`  | Browser tab icon                                          |

Output hashing (`-*.js`) ensures browsers load new assets immediately after a deployment rather than serving cached old versions.

## Deployment Checklist

Before deploying, verify:

- `pnpm run build` completes without errors
- `pnpm test` passes all tests
- No personal filesystem paths appear in source files
- No secrets or API keys are committed
- The `dist/` folder is in `.gitignore` and not committed
- External links in the site use `rel="noopener noreferrer"`
- Your hosting platform is configured to serve `index.html` for unmatched routes

## Updating the Site

After making content changes, rebuild and redeploy:

```
pnpm run build
# Then push to your hosting platform / redeploy
```

Most Git-connected platforms (Netlify, Vercel, Cloudflare Pages) redeploy automatically on every push to the main branch.
