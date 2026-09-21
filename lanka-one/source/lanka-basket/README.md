# Lanka Basket

An offline household grocery basket and local price tracker for Sri Lanka.

## What it does

- Tracks a weekly grocery basket against a household budget.
- Stores locally entered shop prices for comparison.
- Groups the buying list by shop.
- Shows simple decision hints for budget pressure and basket balance.
- Copies a text summary, exports CSV, and prints a household basket card.
- Supports English, Sinhala, and Tamil interface text.
- Runs as a static app and caches itself offline when served from localhost.

## Run

Open `index.html` directly, or serve the folder:

```powershell
python -m http.server 4174
```

Then visit `http://localhost:4174`.

## Notes

The app does not claim live market prices. It is a notebook for prices that families enter and verify themselves at local shops, markets, co-ops, and groceries.
