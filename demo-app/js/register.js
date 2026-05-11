document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("register-form");
  const err = document.getElementById("reg-error");
  const ok = document.getElementById("reg-success");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    err.classList.add("hidden");
    ok.classList.add("hidden");
    const name = (document.getElementById("reg-name").value || "").trim();
    const email = (document.getElementById("reg-email").value || "").trim();
    const pass = document.getElementById("reg-pass").value || "";
    const pass2 = document.getElementById("reg-pass2").value || "";

    if (name.length < 2) {
      err.textContent = "Please enter your full name.";
      err.classList.remove("hidden");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      err.textContent = "Please enter a valid email address.";
      err.classList.remove("hidden");
      return;
    }
    if (pass.length < 8) {
      err.textContent = "Password must be at least 8 characters.";
      err.classList.remove("hidden");
      return;
    }
    if (pass !== pass2) {
      err.textContent = "Passwords do not match.";
      err.classList.remove("hidden");
      return;
    }

    window.ShopNest.setUser({ email, name });
    ok.textContent = "Account created. Redirecting…";
    ok.classList.remove("hidden");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 800);
  });
});
