(() => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  const getTheme = () =>
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "dark"
      : "light";

  const syncThemeToggle = () => {
    if (!(themeToggle instanceof HTMLButtonElement)) return;
    const isDark = getTheme() === "dark";
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );
    themeToggle.setAttribute("aria-pressed", String(isDark));
    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", isDark ? "#2a2433" : "#b9b8cc");
    }
  };

  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore quota / private mode */
    }
    syncThemeToggle();
  };

  if (themeToggle) {
    syncThemeToggle();
    themeToggle.addEventListener("click", () => {
      setTheme(getTheme() === "dark" ? "light" : "dark");
    });
  }

  const toggleButton = document.getElementById("mobile-nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (toggleButton && mobileNav) {
    const firstLink = () => mobileNav.querySelector("a");

    const closeMenu = ({ returnFocus = false } = {}) => {
      mobileNav.classList.remove("is-open");
      toggleButton.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      if (returnFocus) {
        toggleButton.focus();
      }
    };

    const openMenu = () => {
      mobileNav.classList.add("is-open");
      toggleButton.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      const link = firstLink();
      if (link instanceof HTMLElement) {
        link.focus();
      }
    };

    toggleButton.addEventListener("click", () => {
      const isOpen = mobileNav.classList.contains("is-open");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeMenu());
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && mobileNav.classList.contains("is-open")) {
        closeMenu({ returnFocus: true });
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    });
  }
})();
