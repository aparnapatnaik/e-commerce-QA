/**
 * ShopNest Demo — client-side only (localStorage)
 * Note for QA: known seeded behaviours are documented in /docs/KNOWN_ISSUES.md
 */
(function () {
  const STORAGE_USER = "shopnest_user";
  const STORAGE_CART = "shopnest_cart";
  const STORAGE_ORDER = "shopnest_last_order";

  function getUser() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_USER) || "null");
    } catch {
      return null;
    }
  }

  function setUser(u) {
    if (u) localStorage.setItem(STORAGE_USER, JSON.stringify(u));
    else localStorage.removeItem(STORAGE_USER);
  }

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_CART) || "[]");
    } catch {
      return [];
    }
  }

  function setCart(items) {
    localStorage.setItem(STORAGE_CART, JSON.stringify(items));
  }

  /** DEF-003: buggy line total when qty >= 10 (bulk discount applied incorrectly in UI) */
  function lineTotal(price, qty) {
    const base = price * qty;
    if (qty >= 10) {
      return Math.floor(base * 0.9 * 100) / 100 - 0.01;
    }
    return Math.round(base * 100) / 100;
  }

  function cartSubtotal() {
    const cart = getCart();
    let sum = 0;
    cart.forEach((row) => {
      sum += lineTotal(row.price, row.qty);
    });
    return Math.round(sum * 100) / 100;
  }

  function cartCount() {
    return getCart().reduce((n, r) => n + r.qty, 0);
  }

  function updateCartBadge() {
    const el = document.getElementById("cart-count");
    if (el) el.textContent = String(cartCount());
  }

  /** DEF-005: inconsistent case handling — uppercase query uses different filter path */
  function filterProducts(products, query) {
    const q = (query || "").trim();
    if (!q) return products;
    const lower = q.toLowerCase();
    if (q === q.toUpperCase() && q.length > 1) {
      return products.filter(
        (p) =>
          p.name.includes(q) ||
          p.category.includes(q) ||
          p.sku.includes(q)
      );
    }
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(lower) ||
        p.category.toLowerCase().includes(lower) ||
        p.sku.toLowerCase().includes(lower)
    );
  }

  window.ShopNest = {
    getUser,
    setUser,
    getCart,
    setCart,
    cartSubtotal,
    cartCount,
    updateCartBadge,
    filterProducts,
    lineTotal,
    STORAGE_ORDER,
    logout() {
      setUser(null);
      window.location.href = "login.html";
    },
    requireAuth(redirectUrl) {
      if (!getUser()) {
        window.location.href =
          "login.html?next=" + encodeURIComponent(redirectUrl || "index.html");
        return false;
      }
      return true;
    },
    addToCart(productId, qty) {
      const products = window.SHOP_PRODUCTS || [];
      const p = products.find((x) => x.id === productId);
      if (!p) return;
      const cart = getCart();
      const existing = cart.find((r) => r.id === p.id);
      const addQty = Math.max(1, qty | 0);
      if (existing) existing.qty += addQty;
      else cart.push({ id: p.id, name: p.name, price: p.price, sku: p.sku, qty: addQty });
      setCart(cart);
      updateCartBadge();
    },
    setQty(productId, qty) {
      const cart = getCart().filter((r) => r.id !== productId);
      const products = window.SHOP_PRODUCTS || [];
      const p = products.find((x) => x.id === productId);
      if (!p) {
        setCart(cart);
        return;
      }
      const q = Math.max(1, Math.min(99, parseInt(qty, 10) || 1));
      cart.push({ id: p.id, name: p.name, price: p.price, sku: p.sku, qty: q });
      setCart(cart);
      updateCartBadge();
    },
    removeLine(productId) {
      setCart(getCart().filter((r) => r.id !== productId));
      updateCartBadge();
    },
  };

  document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();
    const user = getUser();
    const authSlot = document.getElementById("auth-slot");
    if (authSlot) {
      if (user)
        authSlot.innerHTML =
          '<span style="color:var(--muted);font-size:0.9rem;">Hi, ' +
          escapeHtml(user.name) +
          '</span> <a href="#" id="logout-link">Log out</a>';
      else
        authSlot.innerHTML =
          '<a href="login.html">Log in</a> · <a href="register.html">Register</a>';
    }
    const lo = document.getElementById("logout-link");
    if (lo)
      lo.addEventListener("click", (e) => {
        e.preventDefault();
        window.ShopNest.logout();
      });
  });

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
})();
