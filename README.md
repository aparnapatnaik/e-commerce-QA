# ShopNest — manual QA portfolio (e-commerce demo)

**Owner:** Aparna Patnaik  
**Sample timeline on docs:** 1–10 May 2025 (fictional cycle dates for the write-up)

This repo is a **practice storefront** (HTML/CSS/JS, no backend) bundled with **real QA paperwork**: SRS, test plan, scenarios, RTM, defect log style, smoke/sanity/regression notes, and **76** scripted manual cases. I built it so I can open one folder in an interview and walk through **requirements → tests → bugs → retest** without pretending it is a production system.

---

## Quick start

**Browse the app:** open `demo-app/index.html` in a browser (Chrome or Edge is fine).

**Optional local server** (avoids some `file://` quirks):

```powershell
cd demo-app
npx --yes serve -p 5173
```

Then visit `http://localhost:5173`.

**Demo login:** `demo@shopnest.test` / `Password123`

---

## Repo layout

```
E-commerce/
├── README.md                 ← you are here
├── requirements.txt        ← Python deps for document export
├── demo-app/               ← static “ShopNest” UI (login → confirmation)
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── products.html
│   ├── cart.html
│   ├── checkout.html
│   ├── payment.html
│   ├── order-confirmation.html
│   ├── css/
│   └── js/
├── docs/                   ← SRS, test plan, RTM, TSR template, etc. (Markdown)
├── exports/
│   ├── build_portfolio.py  ← builds xlsx / docx / print HTML
│   └── output/             ← generated workbook + Word + PDF-friendly HTML
└── screenshots/            ← add your own PNGs for the GitHub readme (optional)
```

---

## What the demo actually does

- Register / login (stored in `localStorage` on your machine only)  
- Product list, search, add to cart, change qty, remove lines  
- Checkout form → mock payment → order confirmation  
- A handful of **intentional bugs** so the defect sheet does not look empty — see `docs/KNOWN_ISSUES.md`

---

## Testing work included (keywords for CV / ATS)

| Area | Examples |
|------|----------|
| Docs | SRS, master test plan, scenarios, RTM, test summary template |
| Case design | Positive / negative, boundary values, equivalence partitions |
| Cycles | Smoke, sanity, regression checklist (written up in `docs/`) |
| Defects | Jira-style fields: ID, severity, priority, steps, expected vs actual, status |
| Traceability | Requirements ↔ test cases ↔ defects (RTM + workbook) |

**Tools:** browser, Markdown, Excel workbook (generated), Word export, Python 3 + `openpyxl` / `python-docx` for regeneration.

---

## Regenerate Excel / Word / print pack

From the repo root:

```powershell
pip install -r requirements.txt
python exports/build_portfolio.py
```

Outputs land in `exports/output/`:

- `ShopNest_QA_Portfolio.xlsx` — test cases, defects, RTM, smoke/sanity/regression sheet  
- `ShopNest_QA_Portfolio.docx` — stitched narrative from `docs/` + appendix tables  
- `ShopNest_QA_Print.html` — open in browser → **Print → Save as PDF**

---

## Screenshots (GitHub)

I left `screenshots/` empty on purpose. Drop 3–4 images there (home, cart, Excel cover, confirmation), then link them in this README, for example:

```markdown
![Catalog](screenshots/catalog.png)
```

See `screenshots/README.txt` for ideas.

---

## Honest scope note

No real payments, no server, no database. Good for **manual test design, documentation, and triage storytelling** — not for load testing or security sign-off.

---

## Résumé bullets (short — edit to match how you talk)

- 76 manual test cases (black-box) across auth, catalog, search, cart, checkout, payment, order confirmation for a static e-commerce demo.  
- SRS, test plan, RTM, severity/priority notes, smoke/sanity/regression, Jira-style defect write-ups.  
- Excel + Word export pipeline (Python) for interview-ready artefacts.

---

## License

No license file yet — default is “all rights reserved.” If you fork this for a job application, a one-line note in the README is enough unless you want MIT / CC-BY.
