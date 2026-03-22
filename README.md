# mkalaimalai.github.io

Personal portfolio website for **Madhu Kalaimalai** — Principal Architect based in Bangalore, India.

## Overview

A single-page responsive portfolio site showcasing 25+ years of experience in building complex, large-scale distributed systems across companies like Intuit, ADP, Warner Bros., and more.

## Sections

- **Hero** — Introduction and role summary
- **About** — Career overview, core strengths
- **Experience** — Full career timeline from 1997 to present
- **Tech Stack** — Languages, data systems, frameworks, DevOps, and architecture skills
- **Education & Patents** — MBA, B.Tech, AWS certification, and 2 U.S. patents
- **Contact** — Email and social links

## Tech Stack

- **Next.js 16** (App Router) with static export
- **Tailwind CSS v4** for styling
- **TypeScript**
- Google Fonts via `next/font` (Instrument Serif, DM Sans, JetBrains Mono)
- Scroll-based reveal animations with Intersection Observer

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static output is generated in the `out/` directory.

## Deployment

Hosted via [GitHub Pages](https://pages.github.com/) at `https://mkalaimalai.github.io`. This repository is the GitHub user site, so it deploys at the root domain with no `basePath`. Use the included GitHub Actions workflow to build and deploy.
