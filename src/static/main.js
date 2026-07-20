document.addEventListener("click", (e) => {
  if (e.target instanceof HTMLButtonElement) {
    const button = e.target;
    if (button.dataset["codeblock"]) {
      const i_ = Number(button.dataset["codeblock"]);
      for (const [i, v] of [...button.parentElement.children].entries()) {
        if (i == i_) {
          v.style.background = "";
        } else {
          v.style.background = "transparent";
        }
      }

      for (
        const [i, v] of [...button.parentElement.parentElement.children].slice(
          1,
        ).entries()
      ) {
        if (i == i_) {
          v.style.display = "block";
        } else {
          v.style.display = "none";
        }
      }
    }
  }
  for (const el of e.composedPath()) {
    if (el.dataset && "anchor" in el.dataset && el.id) {
      location.href = "#" + el.id;
    }
  }
});

function initCodeCopyButtons() {
  const resetTimers = new WeakMap();

  function codeText(source) {
    const copy = source.cloneNode(true);

    copy.querySelectorAll("[data-copy-ignore]").forEach((element) => element.remove());
    if (source.matches(".language-shell")) {
      copy.querySelectorAll('span[style*="user-select: none"]').forEach((prompt) => prompt.remove());
    }

    return copy.textContent.replace(/\r?\n$/, "");
  }

  function fallbackCopy(text) {
    const textarea = document.createElement("textarea");
    const activeElement = document.activeElement;

    textarea.value = text;
    textarea.readOnly = true;
    textarea.setAttribute("aria-hidden", "true");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    textarea.style.pointerEvents = "none";
    document.body.append(textarea);
    textarea.select();
    textarea.setSelectionRange(0, text.length);

    let copied = false;
    try {
      copied = document.execCommand("copy");
    } finally {
      textarea.remove();
      if (activeElement instanceof HTMLElement) {
        activeElement.focus({ preventScroll: true });
      }
    }

    if (!copied) throw new Error("The browser refused the copy command.");
  }

  async function copyText(text) {
    if (globalThis.isSecureContext && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch {
        // The fallback also works when clipboard permission has been denied.
      }
    }

    fallbackCopy(text);
  }

  function makeCopyControl(getSource) {
    const button = document.createElement("button");
    const status = document.createElement("span");

    button.type = "button";
    button.className = "code-copy-button";
    button.setAttribute("aria-label", "Copy code to clipboard");
    button.dataset.copyState = "idle";
    button.innerHTML = `
      <svg class="code-copy-icon" viewBox="0 0 16 16" aria-hidden="true">
        <path class="code-copy-icon-copy" d="M5.5 4.5v-2h8v8h-2m-9-5h8v8h-8z" />
        <path class="code-copy-icon-check" d="m3 8.5 3 3 7-7" />
      </svg>
      <span class="code-copy-label">Copy</span>
    `;

    status.className = "code-copy-status";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");

    button.addEventListener("click", async () => {
      const label = button.querySelector(".code-copy-label");
      const source = getSource();
      if (!label || !source) return;

      const oldTimer = resetTimers.get(button);
      if (oldTimer) clearTimeout(oldTimer);
      button.dataset.copyState = "idle";
      label.textContent = "Copy";
      status.textContent = "";

      try {
        await copyText(codeText(source));
        button.dataset.copyState = "success";
        label.textContent = "Copied";
        status.textContent = "Code copied to clipboard.";
      } catch {
        button.dataset.copyState = "error";
        label.textContent = "Try again";
        status.textContent = "Could not copy code to the clipboard.";
      }

      resetTimers.set(
        button,
        setTimeout(() => {
          button.dataset.copyState = "idle";
          label.textContent = "Copy";
          status.textContent = "";
        }, 2000),
      );
    });

    return { button, status };
  }

  const codeGroups = new Set(document.querySelectorAll(".content .code-group"));
  for (const group of codeGroups) {
    if (group.classList.contains("code-copy-group")) continue;

    const { button, status } = makeCopyControl(() => {
      const activeBlock = [...group.querySelectorAll(":scope > pre")].find((pre) => !pre.hidden);
      return activeBlock?.querySelector(":scope > code") || activeBlock;
    });

    group.classList.add("code-copy-group");
    group.append(button, status);
  }

  for (const pre of document.querySelectorAll(".content pre")) {
    if (pre.closest(".code-group") || pre.closest(".code-copy-wrap")) continue;

    const source = pre.querySelector(":scope > code") || pre;
    const wrapper = document.createElement("div");
    const { button, status } = makeCopyControl(() => source);

    wrapper.className = "code-copy-wrap";
    pre.before(wrapper);
    wrapper.append(pre, button, status);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCodeCopyButtons, { once: true });
} else {
  initCodeCopyButtons();
}
