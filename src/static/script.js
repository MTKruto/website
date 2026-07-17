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
let activeTocItem;

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

  for (const item of tocItems) {
    item.classList.toggle("toc-link-active", item.dataset.toc === activeTocItem);
  }
}

let tocFrame;
function scheduleTocUpdate() {
  if (tocFrame !== undefined) return;
  tocFrame = requestAnimationFrame(() => {
    tocFrame = undefined;
    updateActiveTocItem();
  });
}

updateActiveTocItem();
document.addEventListener("scroll", scheduleTocUpdate, { passive: true });
globalThis.addEventListener("resize", scheduleTocUpdate, { passive: true });
