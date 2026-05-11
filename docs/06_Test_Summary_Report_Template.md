# Test Summary Report (TSR) — Template + Sample Fill-In

**Project:** ShopNest Demo  
**Release / Build:** portfolio-static-1.0  
**Test cycle:** Cycle 1  
**Execution period:** 1 May 2025 – 9 May 2025  
**Report date:** 10 May 2025  
**Prepared by:** Aparna Patnaik, Manual QA  

---

## 1. Executive summary
Cycle 1 focused on authentication, catalog/search, cart maths, checkout validation, payment messaging, and order confirmation. **76** manual test cases were executed. **Pass rate:** 82% (illustrative sample numbers for portfolio storytelling). Key failures align with **seeded known issues** documented for learning.

## 2. Test scope
In scope per Master Test Plan. Out of scope: performance, real payment rails.

## 3. Metrics

| Metric | Value |
|--------|-------|
| Total cases executed | 76 |
| Passed | 46 |
| Failed | 8 |
| Blocked | 2 |
| Defects logged | 12 (includes duplicates / UX copy) |

## 4. Defect summary by severity

| Severity | Count |
|----------|-------|
| S2 | 4 |
| S3 | 5 |
| S4 | 3 |

## 5. Risks & recommendations
- Fix **checkout city validation** before any demo labelled “production-like.”
- Standardise **search** to case-insensitive single code path.
- Improve **payment decline** copy for accessibility and support load.

## 6. Sign-off recommendation
**Not ready** for “production-like” label until S2 items closed or formally accepted as known limitations.

## 7. Appendices
- Detailed cases: `ShopNest_QA_Portfolio.xlsx`
- Defect log sheet: `Defects_Jira_Style`

---

*Update pass/fail counts after each real execution run — interviewers appreciate honest metrics.*
