document.querySelectorAll(".code-group-button").forEach((button) => {
  button.addEventListener("click", (e) => {
    const codeGroup = e.target.parentElement.parentElement;
    const codeGroupControls = e.target.parentElement;

    for (const pre of codeGroup.querySelectorAll("pre")) {
      if (pre.dataset.n == button.dataset.n) {
        pre.hidden = false;
      } else {
        pre.hidden = true;
      }
    }

    for (const button of codeGroupControls.querySelectorAll("button")) {
      if (button == e.target) {
        button.classList.add("code-group-button-active");
      } else {
        button.classList.remove("code-group-button-active");
      }
    }
  });
});

const headings = Array.from(document.querySelectorAll(".header-anchor"));
const tocItems = Array.from(document.querySelectorAll("[data-toc]"));
const toc = document.querySelector(".toc");
let activeTocItem;

function revealTocItem(item) {
  if (!toc || !item || toc.clientHeight === 0 || toc.scrollHeight <= toc.clientHeight) return;

  const edgePadding = 12;
  const tocRect = toc.getBoundingClientRect();
  const itemRect = item.getBoundingClientRect();

  if (itemRect.top < tocRect.top + edgePadding) {
    toc.scrollTop += itemRect.top - tocRect.top - edgePadding;
  } else if (itemRect.bottom > tocRect.bottom - edgePadding) {
    toc.scrollTop += itemRect.bottom - tocRect.bottom + edgePadding;
  }
}

function updateActiveTocItem() {
  if (!headings.length || !tocItems.length) return;

  let nextActiveItem = null;
  const atPageBottom = globalThis.scrollY + globalThis.innerHeight >= document.documentElement.scrollHeight - 2;

  if (atPageBottom) {
    nextActiveItem = headings.at(-1).getAttribute("href");
  } else if (globalThis.scrollY > 0) {
    for (const heading of headings) {
      if (heading.parentElement.getBoundingClientRect().top > 40) break;
      nextActiveItem = heading.getAttribute("href");
    }
  }

  if (nextActiveItem === activeTocItem) return;
  activeTocItem = nextActiveItem;

  let activeItemElement;
  for (const item of tocItems) {
    const isActive = item.dataset.toc === activeTocItem;
    item.classList.toggle("toc-link-active", isActive);
    if (isActive) activeItemElement = item;
  }

  if (activeItemElement) revealTocItem(activeItemElement);
  else if (toc && globalThis.scrollY < 1) toc.scrollTop = 0;
}

updateActiveTocItem();
globalThis.addEventListener("scroll", updateActiveTocItem, { passive: true });
globalThis.addEventListener("resize", updateActiveTocItem, { passive: true });
