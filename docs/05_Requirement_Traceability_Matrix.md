# Requirement Traceability Matrix (RTM)

**Project:** ShopNest Demo | **RTM Version:** 1.0 | **Date:** 7 May 2025 | **Maintained by:** Aparna Patnaik  

Legend: **TC** = Test Case ID prefix from workbook (`TC_*`). Coverage means at least one scripted case exists.

| Req ID | Requirement summary | Test scenarios | Representative test cases | Coverage |
|--------|---------------------|----------------|---------------------------|----------|
| FR-AUTH-01 | User registration | S-AUTH-01 | TC_REG_001, TC_REG_002 | Yes |
| FR-AUTH-02 | Registration validation | S-AUTH-01 | TC_REG_010–TC_REG_014 | Yes |
| FR-AUTH-03 | Successful login | S-AUTH-02 | TC_LGN_001 | Yes |
| FR-AUTH-04 | Accurate invalid-login messaging | S-AUTH-03 | TC_LGN_005, TC_LGN_006 | Partial (known defect) |
| FR-AUTH-05 | Session persistence | S-AUTH-02 | TC_LGN_008, TC_XCUT_002 | Yes |
| FR-CAT-01 | Product listing | S-CAT-01 | TC_CAT_001, TC_CAT_002 | Yes |
| FR-CAT-02 | Add to cart with qty | S-CAT-01 | TC_CAT_005, TC_CART_003 | Yes |
| FR-SRCH-01 | Consistent search | S-SRCH-01 | TC_SRCH_004, TC_SRCH_005 | Partial (DEF-005) |
| FR-CART-01 | Correct totals | S-CART-01 | TC_CART_010–TC_CART_014 | Partial (DEF-003) |
| FR-CART-02 | Edit/remove lines | S-CART-01 | TC_CART_004, TC_CART_006 | Yes |
| FR-CHK-01 | Collect address | S-FLOW-01 | TC_CHK_001 | Yes |
| FR-CHK-02 | Reject bad address | S-FLOW-02 | TC_CHK_005 | Fail (DEF-002) |
| FR-PAY-01 | Show subtotal | S-PAY-01 | TC_PAY_001 | Yes |
| FR-PAY-02 | Successful mock pay | S-FLOW-01 | TC_PAY_003 | Yes |
| FR-PAY-03 | Clear failure reason | S-PAY-01 | TC_PAY_006 | Fail (DEF-006) |
| FR-ORD-01 | Confirmation details | S-FLOW-01 | TC_ORD_001, TC_ORD_002 | Yes |

**Traceability to defects:** DEF-001 ↔ FR-AUTH-04; DEF-002 ↔ FR-CHK-02; DEF-003 ↔ FR-CART-01; DEF-005 ↔ FR-SRCH-01; DEF-006 ↔ FR-PAY-03; DEF-004 ↔ NFR-USA-01 (usability/polish).

---

*Excel export duplicates this matrix on sheet `RTM` for sorting and filters.*
