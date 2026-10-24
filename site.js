(() => {
  "use strict";

  const root = document.documentElement;
  const toggle = document.getElementById("lang-toggle");
  const STORAGE_KEY = "agumuzi.portfolio.language";

  function setLanguage(language, persist) {
    const chinese = language === "zh-CN";
    root.lang = chinese ? "zh-CN" : "en";
    document.title = chinese
      ? "Agumuzi — 独立软件与开发作品"
      : "Agumuzi — Independent Software";

    if (toggle) {
      toggle.setAttribute("aria-label", chinese ? "Switch to English" : "切换为简体中文");
      toggle.setAttribute("aria-pressed", String(chinese));
      toggle.title = chinese ? "Switch to English" : "切换为简体中文";
    }
    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, root.lang); } catch (_) { /* Storage may be disabled. */ }
    }
  }

  let preferred = "en";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "zh-CN") preferred = stored;
  } catch (_) { /* English remains the default. */ }
  setLanguage(preferred, false);

  if (toggle) {
    toggle.addEventListener("click", () => {
      setLanguage(root.lang === "en" ? "zh-CN" : "en", true);
    });
  }

  const header = document.querySelector(".site-header");
  if (header) {
    const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 6);
    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();
  }
})();