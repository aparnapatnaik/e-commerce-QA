# Software Requirements Specification (SRS)

**Project:** ShopNest — E-Commerce Web Demo (Manual QA Portfolio)  
**Version:** 1.0  
**Date:** 1 May 2025  
**Author:** Aparna Patnaik — Manual QA

---

## 1. Introduction

### 1.1 Purpose
This document specifies the functional and non-functional requirements for **ShopNest**, a browser-based e-commerce demo used for **manual testing practice**, interview portfolios, and **ATS-friendly** résumé keywords (test planning, test cases, RTM, defect lifecycle).

### 1.2 Scope
ShopNest provides: user registration, login, product browsing, search, shopping cart, checkout capture, mock payment, and order confirmation. **Out of scope:** real payment processing, inventory sync, email delivery, admin back-office, mobile native apps.

### 1.3 Definitions
| Term | Meaning |
|------|---------|
| UAT | User Acceptance Testing |
| RTM | Requirements Traceability Matrix |
| BVA | Boundary Value Analysis |
| EP | Equivalence Partitioning |

### 1.4 References
- IEEE 29148-style structure (adapted for fresher portfolio brevity)
- Internal: `KNOWN_ISSUES.md` (seeded defects for practice)

---

## 2. Overall Description

### 2.1 Product Perspective
ShopNest is a **static multi-page website** with client-side scripts. Data persists in **localStorage** on the user’s machine only.

### 2.2 User Classes
- **Guest:** browse catalog, search, add to cart.
- **Registered / logged-in shopper:** checkout and payment (demo rules apply).

### 2.3 Operating Environment
Modern evergreen browsers (Chrome, Edge, Firefox) on desktop or tablet. JavaScript enabled.

### 2.4 Design Constraints
No server API; session is device-local. Demo credentials documented on the login page for predictable testing.

---

## 3. Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-AUTH-01 | System shall allow a new user to register with name, email, password, confirmation | Must |
| FR-AUTH-02 | System shall validate email format and minimum password length (8) | Must |
| FR-AUTH-03 | System shall allow login with correct email/password | Must |
| FR-AUTH-04 | System shall reject invalid credentials with **accurate** messaging | Should |
| FR-AUTH-05 | Logged-in state shall persist across pages until logout | Must |
| FR-CAT-01 | System shall display product list with name, category, SKU, price | Must |
| FR-CAT-02 | System shall allow adding products to cart with configurable quantity | Must |
| FR-SRCH-01 | Search shall return consistent results regardless of letter case | Should |
| FR-CART-01 | Cart shall show line totals and order subtotal correctly | Must |
| FR-CART-02 | User shall update quantity (1–99) and remove line items | Must |
| FR-CHK-01 | Checkout shall collect street, optional line 2, city, postal code | Must |
| FR-CHK-02 | Checkout shall reject invalid / empty mandatory address fields | Must |
| FR-PAY-01 | Payment page shall display order subtotal | Must |
| FR-PAY-02 | Mock payment shall succeed for valid-format test cards without failure trigger | Must |
| FR-PAY-03 | Failed payment shall show **clear** reason | Should |
| FR-ORD-01 | Confirmation page shall display order id and line items | Must |

---

## 4. Non-Functional Requirements

| ID | Category | Statement |
|----|----------|-------------|
| NFR-USA-01 | Usability | Primary flows completable without training in under 5 minutes |
| NFR-ACC-01 | Accessibility | Forms expose labels; errors associated with fields where feasible |
| NFR-PER-01 | Performance | Typical interactions respond on local file/open without noticeable lag |
| NFR-SEC-01 | Security | Demo only — no real PII processing; passwords not transmitted |

---

## 5. Assumptions & Dependencies
- Tester has file access to open `demo-app/index.html` or serves folder via lightweight static server.
- Clock used for order IDs is client system time.

---

## 6. Acceptance Criteria (high level)
- Happy path: register → login → add item → checkout → pay (success card) → confirmation shows matching items and totals.
- Documented defects in `KNOWN_ISSUES.md` are reproducible and logged in the defect register for learning purposes.

---

*End of SRS (portfolio edition)*
