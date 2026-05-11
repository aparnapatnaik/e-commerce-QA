# Master Test Plan — ShopNest E-Commerce Demo

**Document ID:** TP-SHOPNEST-1.0  
**Version:** 1.0 | **Date:** 3 May 2025  
**Test Manager / Author:** Aparna Patnaik  

---

## 1. Test Plan Identifier
ShopNest Manual Test Plan covering authentication, catalog, search, cart, checkout, payment, and order confirmation for the static demo build.

## 2. Introduction
### 2.1 Objectives
- Verify implemented features against the SRS.
- Practise **black-box** manual techniques: EP, BVA, smoke, sanity, regression.
- Produce **traceable** evidence (test cases ↔ requirements ↔ defects).

### 2.2 Scope
**In scope:** UI workflows listed in SRS §3.  
**Out of scope:** API automation, load testing, security pen-test, cross-browser exhaustive matrices (time-boxed portfolio project).

### 2.3 References
- SRS: `01_SRS_Software_Requirements_Specification.md`
- Known issues: `KNOWN_ISSUES.md`

## 3. Test Items
HTML/CSS/JS assets under `demo-app/` including: `index.html`, `login.html`, `register.html`, `products.html`, `cart.html`, `checkout.html`, `payment.html`, `order-confirmation.html`.

## 4. Features to Be Tested
Authentication, registration validation, product listing, search, cart maths and UX, checkout validation, payment messaging, confirmation content, navigation/header consistency.

## 5. Features Not to Be Tested
Email OTP, password reset email, real card vaulting, inventory deduction server-side.

## 6. Approach
- **Manual exploratory** sessions time-boxed (e.g. 45 min) per build.
- **Scripted** regression pack (see `07_Smoke_Sanity_Regression.md`).
- Defects logged with **severity** (impact) and **priority** (scheduling).

## 7. Pass / Fail Criteria
| Level | Criteria |
|-------|----------|
| Pass | Expected result matches test case; no blocking defect |
| Fail | Observable deviation with repro steps; logged |
| Blocked | Cannot execute due to environment / dependency |

## 8. Suspension & Resumption
Suspend if demo assets fail to load (broken paths). Resume after fix or workaround documented.

## 9. Test Deliverables
Test scenarios, detailed cases (50+), RTM, defect log, test summary report, exported workbook (`exports/output/`).

## 10. Environmental Needs
Browser + local file protocol **or** `npx serve demo-app` (optional).

## 11. Staffing & Training
Single fresher QA owner; familiar with basic web inspection (DevTools optional).

## 12. Risks & Mitigations
| Risk | Mitigation |
|------|------------|
| localStorage cleared mid-run | Note preconditions; re-seed cart |
| “Works on my machine” | Capture browser + version in defect |

## 13. Schedule (May 2025 — illustrative)
| Phase | Dates |
|-------|--------|
| Test design & review | 1 May – 2 May 2025 |
| Cycle 1 execution | 3 May – 7 May 2025 |
| Defect retest / smoke | 8 May – 9 May 2025 |
| Test summary report | 10 May 2025 |

---

*End of Test Plan*
