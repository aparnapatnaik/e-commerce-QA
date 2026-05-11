# Severity & Priority — How This Portfolio Uses Them

**Author:** Aparna Patnaik · **Version date:** 5 May 2025  

A quick, interviewer-friendly explanation: **Severity** is “how bad is it for the user/business?” **Priority** is “how soon should we fix it?” They often correlate — but not always (e.g. rare edge case with high severity might be lower priority if release is tomorrow).

---

## 1. Defect Severity (impact)

| Level | Definition | Example in ShopNest |
|-------|------------|---------------------|
| **S1 — Critical** | Core business flow broken; data loss; security breach | Cannot complete payment for **any** card (not our demo) |
| **S2 — Major** | Major feature broken; workaround painful | Checkout accepts invalid city; misleading login lock message |
| **S3 — Minor** | Feature impaired but usable | Search case inconsistency; vague decline message |
| **S4 — Trivial** | Cosmetic / typo | Slight footer misalignment |

## 2. Defect Priority (scheduling)

| Level | Definition |
|-------|------------|
| **P1 — Immediate** | Stop ship / hotfix |
| **P2 — High** | Next sprint / release candidate blocker |
| **P3 — Medium** | Scheduled backlog |
| **P4 — Low** | Nice-to-have when capacity allows |

## 3. Sample mapping (portfolio)

| Defect | Severity | Priority | Rationale (human voice) |
|--------|----------|----------|-------------------------|
| DEF-002 | S2 | P1 | Bad addresses can slip through — shipping chaos later. |
| DEF-001 | S2 | P2 | Users panic about “locked” account — support noise. |
| DEF-006 | S3 | P2 | Payment fails but user does not know why — frustrating. |
| DEF-003 | S2 | P2 | Money maths issues erode trust fast. |
| DEF-005 | S3 | P3 | Annoying, but people can try lowercase. |
| DEF-004 | S4 | P4 | Does not block buying; polish item. |

---

*Use this table in interviews to show you understand triage conversations between QA, Dev, and Product.*
