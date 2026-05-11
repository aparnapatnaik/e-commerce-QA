/**
 * DEF-006: Payment fails for cards containing '0000' with vague message.
 */
document.addEventListener("DOMContentLoaded", () => {
  if (!window.ShopNest.requireAuth("payment.html")) return;
  const cart = window.ShopNest.getCart();
  if (!cart.length) {
    window.location.href = "cart.html";
    return;
  }

  const sub = window.ShopNest.cartSubtotal();
  document.getElementById("pay-subtotal").textContent = sub.toFixed(2);

  document.getElementById("pay-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const num = (document.getElementById("card-num").value || "").replace(/\s/g, "");
    const name = (document.getElementById("card-name").value || "").trim();
    const err = document.getElementById("pay-error");
    err.classList.add("hidden");

    if (num.length < 12) {
      err.textContent = "Invalid card.";
      err.classList.remove("hidden");
      return;
    }
    if (num.includes("0000")) {
      err.textContent = "Something went wrong.";
      err.classList.remove("hidden");
      return;
    }

    const addr = JSON.parse(sessionStorage.getItem("shopnest_checkout") || "{}");
    const orderId = "ORD-" + Date.now().toString(36).toUpperCase();
    const order = {
      id: orderId,
      items: cart,
      subtotal: sub,
      address: addr,
      paidAt: new Date().toISOString(),
    };
    localStorage.setItem(window.ShopNest.STORAGE_ORDER, JSON.stringify(order));
    window.ShopNest.setCart([]);
    window.ShopNest.updateCartBadge();
    window.location.href = "order-confirmation.html?id=" + encodeURIComponent(orderId);
  });
});
