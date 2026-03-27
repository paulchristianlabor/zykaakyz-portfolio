# Setup Guide

## Prerequisites

| Requirement | Minimum Version |
|-------------|-----------------|
| Node.js | 20.x |
| npm | 10.x |
| Git | Any recent version |

Verify your installations:

```
node --version
npm --version
```

## Installation

Clone the repository and install dependencies:

```
git clone <your-repository-url>
cd zykaakyz-portfolio
npm install
```

## Starting the Development Server

```
npm start
```

Open http://localhost:4200 in your browser. The server reloads automatically when you edit source files.

## Building for Production

```
npm run build
```

The static output is written to `dist/portfolio/browser/`. This folder contains all HTML, CSS, and JavaScript files ready for deployment to any static hosting service.

## Other Useful Commands

```
npm test              Run all unit tests
npm run lint          Lint TypeScript and HTML source files
npm run format        Format all source files with Prettier
npm run format:check  Check formatting without writing changes
npm run watch         Run a development build in watch mode
```

## Updating Content

All site content (name, bio, projects, interests, etc.) is defined in:

```
src/data/content.ts
```

Edit that file to replace placeholder content with your own. No component code changes are needed for basic content updates.

## Environment Variables

This is a static frontend project. It does not require environment variables for operation.

If you ever integrate a third-party form or analytics service, do NOT embed API keys or tokens in this source code. Use the service's client-safe public keys only, and document them in this file clearly labeled as public keys.
