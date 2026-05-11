# Test Scenarios — ShopNest (High-Level)

**Author:** Aparna Patnaik · **Version date:** 4 May 2025  

Scenarios are **user journeys**. Each scenario decomposes into multiple **test cases** in the Excel/Word export.

---

## S-AUTH-01 Registration happy path
**Actor:** New shopper  
**Goal:** Create account and land on home logged in  
**Pre:** Browser cache cleared or incognito  
**Main:** Open Register → valid data → submit → redirected home with greeting.

## S-AUTH-02 Login happy path
**Actor:** Returning shopper  
**Goal:** Access protected checkout  
**Pre:** Valid demo credentials  
**Main:** Login → navigate to cart/checkout.

## S-AUTH-03 Login negative
**Actor:** Attacker / mistaken user  
**Goal:** System denies access  
**Main:** Wrong password → **accurate** error (linked to DEF-001).

## S-CAT-01 Browse & add
**Actor:** Guest or logged-in  
**Goal:** Populate cart from catalog  
**Main:** Catalog → set qty → add → verify badge.

## S-SRCH-01 Search consistency
**Actor:** Shopper  
**Goal:** Same semantic query returns stable results  
**Main:** Compare `LIFESTYLE` vs `lifestyle` (linked to DEF-005).

## S-CART-01 Update quantities
**Actor:** Shopper  
**Goal:** Correct totals  
**Main:** Change qty across boundaries 1, 9, 10, 11 (BVA for DEF-003).

## S-FLOW-01 End-to-end purchase
**Actor:** Logged-in shopper  
**Goal:** Paid order confirmation  
**Main:** Cart → checkout valid address → pay with success card → confirmation.

## S-FLOW-02 Checkout validation
**Actor:** Shopper  
**Goal:** Invalid address blocked  
**Main:** Whitespace city only (DEF-002).

## S-PAY-01 Decline path clarity
**Actor:** Shopper  
**Goal:** Understand failure  
**Main:** Card containing `0000` (DEF-006).

## S-UI-01 Visual consistency
**Actor:** Shopper  
**Goal:** Professional layout  
**Main:** Compare footer alignment cart vs home (DEF-004).

---

*Scenarios map to smoke (subset) and full regression.*
