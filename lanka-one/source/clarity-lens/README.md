# Clarity Lens

An offline accessibility lab for contrast, readable copy, and touch target checks.

## What it does

- Calculates color contrast ratios.
- Checks WCAG AA and AAA thresholds for normal and large text.
- Scores touch target size against a 44 by 44 pixel baseline.
- Estimates reading ease, sentence length, and long-word rate.
- Shows a live component preview.
- Saves recent checks locally.
- Copies a plain text accessibility report.

## Run

Open `index.html` directly, or serve the folder locally:

```powershell
python -m http.server 4175
```

Then visit `http://localhost:4175`.

## Notes

The readability score is a lightweight estimate. It is useful for quick design checks, not as a substitute for user testing with the people who will use the interface.
