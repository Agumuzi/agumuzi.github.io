(() => {
  "use strict";

  const root = document.documentElement;
  const buttons = document.querySelectorAll(".language-choice");
  const STORAGE_KEY = "agumuzi.portfolio.language";

  const copy = {
    en: {
      title: "Agumuzi — Independent Software",
      description: "Agumuzi — independent macOS apps, network utilities and practical automation. Meet FinTrack, Currency Tracker and CR-Hopper.",
      nav: "Main navigation",
      brand: "Agumuzi — back to top",
      github: "Visit Agumuzi on GitHub",
      about: "About Agumuzi",
      workflow: "Publication process: collect, filter, prepare and publish"
    },
    "zh-CN": {
      title: "Agumuzi — 独立软件与开发作品",
      description: "Agumuzi 的独立软件项目：FinTrack、Currency Tracker、CR-Hopper，以及原生 Mac 应用与自动化工具。",
      nav: "主导航",
      brand: "Agumuzi — 返回顶部",
      github: "在 GitHub 上查看 Agumuzi",
      about: "关于 Agumuzi",
      workflow: "发布流程：收集、过滤、整理和发布"
    },
    ru: {
      title: "Agumuzi — Независимые программы и проекты",
      description: "Независимые приложения для macOS, сетевые инструменты и автоматизация: FinTrack, Currency Tracker и CR-Hopper.",
      nav: "Основная навигация",
      brand: "Agumuzi — наверх",
      github: "Профиль Agumuzi на GitHub",
      about: "Об Agumuzi",
      workflow: "Публикация: сбор, фильтрация, подготовка и выпуск"
    }
  };

  function setLanguage(language, persist) {
    const selected = Object.hasOwn(copy, language) ? language : "en";
    const current = copy[selected];
    root.lang = selected;
    document.title = current.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = current.description;

    for (const [selector, label] of [
      [".main-nav", current.nav],
      [".brand", current.brand],
      [".github-link", current.github],
      [".intro-strip", current.about],
      [".terminal-flow", current.workflow]
    ]) {
      const element = document.querySelector(selector);
      if (element) element.setAttribute("aria-label", label);
    }
    buttons.forEach(button => {
      const active = button.dataset.language === selected;
      button.setAttribute("aria-pressed", String(active));
    });
    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, selected); }
      catch (_) { /* Storage can be disabled; the current choice still works. */ }
    }
  }

  let preferred = "en";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && Object.hasOwn(copy, stored)) preferred = stored;
  } catch (_) { /* English remains the default. */ }
  setLanguage(preferred, false);

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.language, true);
    });
  });

  const header = document.querySelector(".site-header");
  if (header) {
    const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 6);
    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();
  }
})();
