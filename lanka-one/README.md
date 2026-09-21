# Lanka One

Lanka One is a local-first everyday essentials workspace built for personal planning, household readiness, budgeting, crop tracking, and accessibility checks. It brings several small tools into one connected web app that runs locally in the browser and stores user data on the device.

![Lanka One dashboard](docs/lanka-one-dashboard.png)

## Features

- Readiness planning with tasks, supplies, contacts, meeting points, and printable plans.
- Lanka Basket for shopping lists, budgets, local price tracking, shop comparisons, and CSV export.
- Monthly expense tracking with income, expenses, category insights, filters, and recurring labels.
- Lanka Grow for crop logs, harvest dates, seasonal planning, and pest or disease references.
- Clarity Lens for color contrast checks, text estimates, target sizing, and copied reports.
- Local workspace data with backup and restore support.

## Technologies

- HTML
- CSS
- JavaScript
- Node.js
- LocalStorage
- Service Worker
- Playwright
- LinkeDOM
- Acorn

## My Contribution

- Designed and built the connected dashboard experience.
- Combined multiple standalone tools into one shared workspace.
- Added local data persistence, backup, restore, and offline-friendly behavior.
- Improved navigation, responsive layout, print support, and browser testing.
- Added validation and usability improvements across the basket, grow, readiness, expenses, and accessibility tools.

## Project Structure

```text
lanka-one/
|-- docs/                  # README screenshot and GitHub social preview image
|-- scripts/               # Build scripts
|-- site/                  # Deployable static website
|-- source/                # Original tool sources
|-- templates/             # Shared layout templates
|-- tests/                 # Browser tests
|-- package.json
`-- README.md
```

## Run Locally

```powershell
npm install
npm run build
npm start
```

Then open:

```text
http://localhost:4180
```

The complete deployable website is available in the `site/` folder.

## Testing

Run the browser tests while the local server is running:

```powershell
npm test
```

The tests cover real interactions, persistence, translated views, desktop/mobile overflow, backup validation, print mode, and offline navigation.

## GitHub Social Preview

Use this image for the repository cover:

```text
docs/lanka-one-social-preview.png
```

On GitHub, upload it from:

```text
Settings -> General -> Social preview -> Edit
```

## Data and Privacy

Lanka One does not require an account, API key, cloud backend, or server database. User data is stored in the browser using `localStorage`, and backups can be exported as JSON.

## References and Assets

- W3C contrast criteria: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- W3C enhanced target size: https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html
- Department of Agriculture: https://doa.gov.lk/
- Icons: Lucide
- Font: DM Sans
