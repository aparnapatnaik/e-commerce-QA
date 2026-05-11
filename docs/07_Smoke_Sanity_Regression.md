# Smoke, Sanity, and Regression — ShopNest

**Author:** Aparna Patnaik · **Version date:** 8 May 2025  

---

## 1. Smoke testing (build acceptance — ~15 minutes)
**Goal:** “Is this build remotely testable?” Catches show-stoppers fast.

| # | Check | Expected |
|---|-------|----------|
| SM-01 | Open `index.html` | Page renders, no blank screen |
| SM-02 | Header links (Home, Catalog, Cart) | Navigate without 404 |
| SM-03 | Add one item from catalog | Cart badge increments |
| SM-04 | Login with demo credentials | Lands on site with greeting |
| SM-05 | Open checkout with non-empty cart | Form visible |
| SM-06 | Complete payment with safe demo PAN | Order confirmation shows ID |

---

## 2. Sanity testing (post-fix spot-check — ~20 minutes)
**Goal:** “Did the fix break the area around it?” Narrower than full regression.

Example: after DEF-003 cart fix — re-run: add item, qty 10 line total, subtotal, checkout still reachable.

| # | Check | When to use |
|---|-------|-------------|
| SN-01 | Search `lifestyle` | Results render |
| SN-02 | Search `LIFESTYLE` | Compare to SN-01 after DEF-005 fix |
| SN-03 | Cart qty edit | Totals refresh |
| SN-04 | Logout / login | Session stable |

---

## 3. Regression testing checklist (full — tie to release)
Run **after** multiple fixes or before milestone demo.

- [ ] Registration: valid + invalid partitions (email/password)
- [ ] Login: valid, invalid password, empty fields
- [ ] Catalog: all products render; price format `$xx.xx`
- [ ] Search: EP/BVA on query length and case
- [ ] Cart: add, remove, qty 1, 9, 10, 11, 99
- [ ] Checkout: mandatory fields, optional line2, bad city
- [ ] Payment: success path + decline path messaging
- [ ] Order confirmation: items match cart submitted
- [ ] Cross-page: header/footer consistency (incl. cart page)
- [ ] Logout clears protected access to checkout (redirect)

---

*Attach failed case IDs and defect keys to each regression run for audit trail.*
