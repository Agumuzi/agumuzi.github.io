# Agumuzi · Independent Software

The source for **[agumuzi.github.io](https://agumuzi.github.io/)**, a bilingual (English / 简体中文) portfolio for my independent software projects.

## Projects

| Project | Focus | Website |
| --- | --- | --- |
| **FinTrack** | Native macOS personal finance | [Visit](https://agumuzi.github.io/FinTrack/) |
| **Currency Tracker** | Native macOS exchange-rate menu bar utility | [Visit](https://agumuzi.github.io/Currency-Tracker/) |
| **CR-Hopper** | Third-party public proxy feed preparation | [Visit](https://agumuzi.github.io/crhopper/) |

## Site architecture

- `index.html` — accessible bilingual page structure, project descriptions, links, and metadata
- `style.css` — responsive layout and product-specific visual treatments
- `site.js` — language toggle and local language preference; no framework or analytics
- `favicon.svg` — personal site mark
- `.nojekyll` — serves the static files as-is from GitHub Pages

The layout uses **actual app screenshots and original project icons** from public repositories; it does not recreate or claim to show live application state. Each project keeps its own product site, release workflow and licensing rules.

## Publishing and maintenance

This repository is the **single source of truth for the personal website**. GitHub Pages publishes from `main` at the repository root. Update the source files here; a push to `main` triggers the Pages build. Do not publish from the older staging copy in the profile repository `Agumuzi/Agumuzi/site/`, which predates this redesign.

To test changes before publishing, inspect `index.html` locally. The site does not require npm, a bundler, a backend, or a paid hosting account. Verify external GitHub-hosted screenshots and all links when editing project showcases.

## Principles

Local-first when practical · modular architecture · iterative real-world testing.

**Note:** CR-Hopper republishes third-party public proxy entries. It does not operate or guarantee the security, privacy or uptime of those servers.
