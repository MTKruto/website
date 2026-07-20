function installPagefindMetadataCompatibility() {
  const originalFetch = globalThis.fetch.bind(globalThis);

  globalThis.fetch = (input, init) => {
    const requestUrl = input instanceof Request ? input.url : input;
    if (typeof requestUrl !== "string" && !(requestUrl instanceof URL)) {
      return originalFetch(input, init);
    }

    const url = new URL(requestUrl, globalThis.location.href);
    if (url.pathname.endsWith("/pagefind/pagefind-entry.json") && url.searchParams.has("ts")) {
      url.searchParams.delete("ts");
      input = input instanceof Request ? new Request(url, input) : url;
    }

    return originalFetch(input, init);
  };
}

installPagefindMetadataCompatibility();

function initSearchDialog() {
  const dialog = document.getElementById("search-dialog");
  const closeButton = dialog?.querySelector("[data-search-close]");
  const openButtons = document.querySelectorAll("[data-search-open]");

  if (!(dialog instanceof HTMLDialogElement) || !closeButton || !openButtons.length) return;

  let returnFocus;
  let focusTimer;

  function searchInput() {
    return dialog.querySelector(".pagefind-ui__search-input, input[type='search']");
  }

  function focusInput(attempt = 0) {
    globalThis.clearTimeout(focusTimer);
    const input = searchInput();
    if (input instanceof HTMLInputElement) {
      input.focus({ preventScroll: true });
      return;
    }
    if (attempt < 20) {
      focusTimer = globalThis.setTimeout(() => focusInput(attempt + 1), 50);
    }
  }

  function openSearch(source) {
    if (dialog.open) {
      focusInput();
      return;
    }

    returnFocus = source instanceof HTMLElement ? source : document.activeElement;
    dialog.showModal();
    document.documentElement.classList.add("search-open");
    focusInput();
  }

  function closeSearch() {
    if (dialog.open) dialog.close();
  }

  for (const button of openButtons) {
    button.addEventListener("click", () => openSearch(button));
  }

  closeButton.addEventListener("click", closeSearch);

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeSearch();
  });

  dialog.addEventListener("close", () => {
    globalThis.clearTimeout(focusTimer);
    document.documentElement.classList.remove("search-open");
    if (returnFocus instanceof HTMLElement && returnFocus.isConnected) {
      returnFocus.focus({ preventScroll: true });
    }
    returnFocus = undefined;
  });

  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    const target = event.target;
    const editable = target instanceof HTMLElement &&
      (target.matches("input, textarea, select") || target.isContentEditable);

    if (key === "k" && (event.metaKey || event.ctrlKey) && !event.altKey) {
      event.preventDefault();
      openSearch(document.activeElement);
      return;
    }

    if (key === "/" && !dialog.open && !editable && !event.metaKey && !event.ctrlKey && !event.altKey) {
      event.preventDefault();
      openSearch(document.activeElement);
    }
  });

  const shortcut = document.querySelector("[data-search-shortcut]");
  if (shortcut && !/Mac|iPhone|iPad|iPod/.test(navigator.userAgent)) {
    shortcut.textContent = "Ctrl K";
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSearchDialog, { once: true });
} else {
  initSearchDialog();
}
