# Test Design Techniques — Worked Examples (ShopNest)

**Author:** Aparna Patnaik · **Version date:** 2 May 2025  

This file gives **short, interview-ready** examples tied to the demo.

---

## 1. Equivalence Partitioning (EP) — Registration email

| Partition | Representative | Expectation |
|-----------|----------------|-------------|
| Valid email | `you@example.com` | Accept |
| Missing `@` | `youexample.com` | Reject with message |
| Missing domain | `you@` | Reject |
| Blank | ` ` | Reject |

*Why interviewers care:* You reduce infinite inputs to a **small meaningful set**.

---

## 2. Boundary Value Analysis (BVA) — Cart quantity

Field rule (demo): **1–99** accepted in UI.

| Boundary | Value | Notes |
|----------|-------|-------|
| Below min | 0, -1 | Should clamp or reject |
| Min | 1 | Must work |
| Interior | 50 | Typical |
| Near bulk threshold | 9, 10, 11 | DEF-003 risk zone |
| Max | 99 | Must work |
| Above max | 100 | Should clamp or reject |

---

## 3. Smoke vs Sanity (one-liner)
- **Smoke:** “Can we breathe?” — minimal path proves build not dead.
- **Sanity:** “Is the brain still wired after surgery?” — targeted re-check near a change.

---

## 4. Positive vs Negative (examples)

| Type | Example |
|------|---------|
| Positive | Successful E2E purchase |
| Negative | Wrong password on login |
| Negative | Payment with failing test PAN pattern |

---

## 5. Traceability sound bite
“Every **requirement** should map to at least one **test**. When a test fails, we link a **defect** — that is how coverage stops being a guess.”

---

*Pair this file with the RTM and the workbook `TestCases` sheet.*
