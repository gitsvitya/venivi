# Venivi.ru

Landing/archive page for the historical project **“Veni, Vidi, Vici”** (Venivi.ru): a giveaway platform where advertisers ran contests and prize draws to attract and retain audiences.

The website presents:
- project overview
- key results
- team/authors
- archived platform screenshots

## Tech Stack

- `React 18`
- `Vite 5`
- CSS Modules

## Getting Started

### Prerequisites

- `Node.js >= 18.18.0` (see `.nvmrc`)
- `npm`

### Install

```bash
npm install
```

## Scripts

### `npm run dev`

Starts the Vite development server (usually at `http://localhost:5173`).

### `npm run build`

Builds the project for production into the `dist/` folder.

### `npm run preview`

Runs a local preview of the production build.

## Project Structure

```text
src/
  components/      # UI sections and modal components
  constants/       # Shared UI timing constants
  images/          # Local image assets
  fonts/           # Local font files
  utils/lng.js     # RU/EN texts and SEO metadata
public/
  robots.txt
  sitemap.xml
```

## Features

- RU / EN language switch with animated transition
- Accessible modal (keyboard support, focus trap, ESC close)
- SEO basics:
  - dynamic page title and meta updates by language
  - Open Graph / Twitter meta
  - JSON-LD (`AboutPage`)
  - `robots.txt` and `sitemap.xml`
- Vite-based production build

## Author

**Victor Strokov**

- Website: [svitya.com](https://svitya.com/)
