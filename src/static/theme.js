(function () {
  const storageKey = "mtkruto-color-scheme";
  const schemes = new Set(["light", "dark", "auto"]);
  const systemDark = globalThis.matchMedia("(prefers-color-scheme: dark)");

  function storedScheme() {
    try {
      const scheme = globalThis.localStorage.getItem(storageKey);
      return schemes.has(scheme) ? scheme : "auto";
    } catch {
      return "auto";
    }
  }

  function resolvedScheme(scheme) {
    return scheme === "auto" ? (systemDark.matches ? "dark" : "light") : scheme;
  }

  function syncPage(scheme) {
    const resolved = resolvedScheme(scheme);
    const lightHighlight = document.getElementById("highlight-theme-light");
    const darkHighlight = document.getElementById("highlight-theme-dark");
    const themeColor = document.getElementById("theme-color");

    document.documentElement.dataset.colorScheme = scheme;

    if (lightHighlight instanceof HTMLLinkElement && darkHighlight instanceof HTMLLinkElement) {
      lightHighlight.media = resolved === "light" ? "all" : "not all";
      darkHighlight.media = resolved === "dark" ? "all" : "not all";
    }

    if (themeColor instanceof HTMLMetaElement) {
      themeColor.content = resolved === "dark" ? "#0e0f0f" : "#ffffff";
    }

    const selected = document.querySelector(
      `[data-color-scheme-toggle] input[value="${scheme}"]`,
    );
    if (selected instanceof HTMLInputElement) selected.checked = true;
  }

  function selectScheme(scheme, persist = true) {
    if (!schemes.has(scheme)) return;

    if (persist) {
      try {
        globalThis.localStorage.setItem(storageKey, scheme);
      } catch {
        // The selected scheme still applies for the current page.
      }
    }

    syncPage(scheme);
  }

  const initialScheme = storedScheme();
  syncPage(initialScheme);

  document.addEventListener("DOMContentLoaded", () => {
    syncPage(initialScheme);

    const toggle = document.querySelector("[data-color-scheme-toggle]");
    toggle?.addEventListener("change", (event) => {
      const input = event.target;
      if (input instanceof HTMLInputElement) selectScheme(input.value);
    });
  });

  systemDark.addEventListener("change", () => {
    if (document.documentElement.dataset.colorScheme === "auto") syncPage("auto");
  });

  globalThis.addEventListener("storage", (event) => {
    if (event.key === storageKey) syncPage(storedScheme());
  });
})();
