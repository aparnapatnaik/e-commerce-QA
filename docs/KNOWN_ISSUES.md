# ShopNest Demo — Known Seeded Issues (for defect practice)

These behaviours are **intentionally** imperfect so you can practise writing Jira-style bug reports and regression checks. They are called out in the SRS and test pack.

| ID | Area | What happens | Expected (good practice) |
|----|------|----------------|---------------------------|
| DEF-001 | Login | Any failed login shows a misleading “account locked” style message | Clear distinction: wrong password vs locked account vs unknown email |
| DEF-002 | Checkout | City field accepts whitespace-only input; flow continues | Validation rejects empty / whitespace-only city |
| DEF-003 | Cart | For quantity ≥ 10 (bulk discount), displayed line total can be off by $0.01 vs true 10% maths | Line totals match financial rounding rules consistently |
| DEF-004 | UI | Cart page footer columns shift slightly compared to other pages | Consistent grid alignment across pages |
| DEF-005 | Search | All-uppercase queries use a different filter path than mixed/lowercase — result counts can differ for the same word | Case-insensitive, consistent results |
| DEF-006 | Payment | Card numbers containing `0000` fail with a vague “Something went wrong.” | Actionable decline reason (e.g. test card rule, invalid PAN) |

> Honest note for interviewers: this is a **static front-end demo** (localStorage only). It is meant to exercise **manual test design, documentation, and traceability** — not production security or performance.  
> **Portfolio maintainer:** Aparna Patnaik (May 2025 sample timeline).
