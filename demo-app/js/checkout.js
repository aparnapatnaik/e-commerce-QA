/**
 * DEF-002: City field not validated — can submit spaces only (broken checkout validation).
 */
document.addEventListener("DOMContentLoaded", () => {
  if (!window.ShopNest.requireAuth("checkout.html")) return;
  const cart = window.ShopNest.getCart();
  const empty = document.getElementById("checkout-empty");
  const formBlock = document.getElementById("checkout-form-block");
  if (!cart.length) {
    empty.classList.remove("hidden");
    formBlock.classList.add("hidden");
    return;
  }
  empty.classList.add("hidden");
  formBlock.classList.remove("hidden");

  document.getElementById("checkout-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const full = (document.getElementById("addr-full").value || "").trim();
    const line2 = (document.getElementById("addr-line2").value || "").trim();
    const city = document.getElementById("addr-city").value || "";
    const zip = (document.getElementById("addr-zip").value || "").trim();

    if (full.length < 5) {
      alert("Please enter a complete street address.");
      return;
    }
    /* Missing: city should not allow whitespace-only — DEF-002 */
    if (zip.length < 3) {
      alert("Please enter a valid postal code.");
      return;
    }

    sessionStorage.setItem(
      "shopnest_checkout",
      JSON.stringify({ full, line2, city, zip })
    );
    window.location.href = "payment.html";
  });
});
