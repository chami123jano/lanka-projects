# Lanka Ready

An offline-first household preparedness planner made for Sri Lankan families and neighbourhood groups.

## What it does

- Builds a simple plan from household size, days, known local risks, and care needs.
- Calculates practical water, food, medicine, and lighting targets.
- Stores locally verified contacts, a meeting point, and a safe route note.
- Tracks family readiness tasks and household stock in the browser.
- Creates a printable pocket card for sharing at home.
- Works as a static web app; when served over `http://localhost`, it can cache itself for offline use.

## Run

Open `index.html` in a browser, or serve the folder locally:

```powershell
python -m http.server 4173
```

Then visit `http://localhost:4173`.

## Notes

This app deliberately does not hard-code emergency numbers. Families should add contacts they have verified locally, such as GN, PHI, police station, hospital, school, workplace, and trusted neighbours.
