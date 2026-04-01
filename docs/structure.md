# Project Structure

## Root Directory

```
zykaakyz-portfolio/
├── src/                  Application source code
├── public/               Static assets served at the site root (favicon, etc.)
├── docs/                 Project documentation
├── dist/                 Build output (git-ignored)
├── angular.json          Angular CLI configuration
├── package.json          Dependencies and pnpm scripts
├── tsconfig.json         TypeScript root configuration
├── tsconfig.app.json     TypeScript configuration for the app build
├── tsconfig.spec.json    TypeScript configuration for tests
├── eslint.config.js      ESLint flat configuration
├── postcss.config.mjs    PostCSS configuration (Tailwind CSS v4)
├── .prettierrc           Prettier formatting rules
├── .gitignore            Git ignore rules
└── README.md             Project overview
```

## Source Directory (src/)

```
src/
├── app/
│   ├── app.ts              Root component (bootstraps router-outlet)
│   ├── app.routes.ts       Route definitions (single home route)
│   ├── app.config.ts       Application-level Angular providers
│   ├── app.config.server.ts Server-side config for SSG prerendering
│   ├── app.routes.server.ts Prerendering route configuration
│   ├── app.spec.ts         Root component tests
│   │
│   ├── components/         Feature section components
│   │   ├── navbar/         Fixed navigation bar with mobile menu
│   │   ├── hero/           Full-viewport hero / landing section
│   │   ├── about/          Bio, initials avatar, and highlight stats
│   │   ├── interests/      Grid of interest/passion cards
│   │   ├── projects/       Showcase of selected projects
│   │   ├── gallery/        Visual grid of gallery items
│   │   ├── writing/        List of writing entries / blog posts
│   │   ├── contact/        Contact info and reactive form
│   │   └── footer/         Footer with navigation and social links
│   │
│   ├── pages/
│   │   └── home/           Home page — composes all section components
│   │
│   ├── shared/
│   │   ├── ui/
│   │   │   ├── badge/          Inline badge/tag chip component
│   │   │   └── section-heading/ Reusable section title block
│   │   └── directives/
│   │       └── scroll-reveal.directive.ts  Intersection Observer animation
│   │
│   └── core/
│       └── models/
│           └── portfolio.models.ts  TypeScript interfaces for site content
│
├── assets/
│   └── images/             Place your image files here
│
├── data/
│   └── content.ts          All site text and data (edit this!)
│
├── index.html              HTML shell with meta tags and Google Fonts
├── main.ts                 Browser bootstrap entry point
├── main.server.ts          Server/SSG bootstrap entry point
└── styles.css              Global styles: Tailwind import + base CSS
```

## Key Design Decisions

### Data-Driven Content

All placeholder content is centralised in `src/data/content.ts`. Components import this data rather than hardcoding strings. This makes the site easy to personalise without touching component code.

### Standalone Components

Every component is standalone (Angular 19+ default). No NgModules are used.

### No Backend

The site is entirely static. The contact form demonstrates validation UI only; actual email sending requires integrating a service like Netlify Forms or EmailJS.

### SSG (Static Site Generation)

The build uses Angular's `outputMode: "static"` which prerendering the home route to a static `index.html` at build time. This improves initial page load and SEO without any server infrastructure.

### Tailwind CSS v4

Tailwind v4 uses a CSS-first configuration model. The theme is extended via CSS variables in `src/styles.css`. Component styles use Tailwind utility classes directly in templates.

### Scroll Reveal Animations

The `ScrollRevealDirective` attaches an `IntersectionObserver` to any element using `appScrollReveal`. Elements animate in (fade + slide up) when they enter the viewport. The directive degrades gracefully in environments where `IntersectionObserver` is unavailable (e.g. test runners).
