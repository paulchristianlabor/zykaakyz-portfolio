# zykaakyz-portfolio

A modern, elegant static personal website built with Angular 21 and Tailwind CSS v4. Fully prerendered at build time for instant load and zero server costs.

## Tech Stack

| Technology   | Version          | Purpose                           |
| ------------ | ---------------- | --------------------------------- |
| Angular      | 21.2.4           | Framework (standalone components) |
| Tailwind CSS | 4.1.0            | Utility-first styling             |
| Angular SSG  | via @angular/ssr | Static prerendering               |
| Vitest       | 4.x              | Unit testing                      |
| ESLint       | 9.x              | Linting (flat config)             |
| Prettier     | 3.x              | Code formatting                   |

## Features

- 9 sections: Navbar, Hero, About, Interests, Projects, Gallery, Writing, Contact, Footer
- Scroll-reveal animations via IntersectionObserver directive
- Reactive contact form with full validation
- Responsive layout for all screen sizes
- Accessible — semantic HTML, ARIA attributes, keyboard navigation
- Zero runtime dependencies — fully static output
- 60 unit tests passing

## Quick Start

```bash
pnpm install
pnpm start
```

Then open `http://localhost:4200` in your browser.

## Commands

| Command                 | Description                                             |
| ----------------------- | ------------------------------------------------------- |
| `pnpm start`            | Development server with hot reload                      |
| `pnpm run build`        | Production build (outputs to `dist/portfolio/browser/`) |
| `pnpm test`             | Run unit tests with Vitest                              |
| `pnpm run lint`         | Lint with ESLint                                        |
| `pnpm run format`       | Format with Prettier                                    |
| `pnpm run format:check` | Check formatting without writing                        |

## Customize Content

All site content lives in one file: `src/data/content.ts`

Edit the exported `siteContent` object to update your name, bio, projects, writing entries, interests, and contact details. No other files need to change.

To replace placeholder images, add your files to `src/assets/images/` and update the relevant `imageUrl` fields in `content.ts`.

## Deployment

Build the project then deploy the `dist/portfolio/browser/` folder to any static host:

```bash
pnpm run build
```

Supported hosts: GitHub Pages, Netlify, Vercel, Cloudflare Pages, AWS S3 + CloudFront.

See [docs/deployment.md](docs/deployment.md) for host-specific instructions.

## Documentation

| File                                     | Description                      |
| ---------------------------------------- | -------------------------------- |
| [docs/setup.md](docs/setup.md)           | Full setup and local dev guide   |
| [docs/structure.md](docs/structure.md)   | Project folder structure         |
| [docs/testing.md](docs/testing.md)       | Testing approach and conventions |
| [docs/security.md](docs/security.md)     | Security practices               |
| [docs/deployment.md](docs/deployment.md) | Deployment instructions          |
