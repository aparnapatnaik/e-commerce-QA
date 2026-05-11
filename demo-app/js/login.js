/**
 * Demo credentials: demo@shopnest.test / Password123
 * DEF-001: any failed login shows misleading "locked" message (for QA portfolio).
 */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const err = document.getElementById("login-error");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    err.classList.add("hidden");
    const email = (document.getElementById("email").value || "").trim();
    const password = document.getElementById("password").value || "";

    const okEmail = "demo@shopnest.test";
    const okPass = "Password123";

    if (email.toLowerCase() === okEmail.toLowerCase() && password === okPass) {
      window.ShopNest.setUser({ email, name: "Demo Shopper" });
      const params = new URLSearchParams(window.location.search);
      const next = params.get("next") || "index.html";
      window.location.href = next;
      return;
    }

    /* Misleading copy — intentional defect DEF-001 */
    err.textContent =
      "Sign-in failed: Your account is temporarily locked for security reasons. Try again in 30 minutes or contact support.";
    err.classList.remove("hidden");
  });
});
