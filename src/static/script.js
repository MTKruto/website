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

const SCROLL_OFFSET = 134;
function updateActiveTocItem() {
  const scrollY = window.scrollY;
  const innerHeight = window.innerHeight;
  const offsetHeight = document.body.offsetHeight;
  const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;

  let activeItem;

  // page top
  if (window.scrollY < 1) {
    activeItem = null;
  } else if (isBottom) {
    activeItem = headings[headings.length - 1].getAttribute("href");
  } else {
    const a = headings.map((v) => ({
      link: v.getAttribute("href"),
      top: getAbsoluteTop(v),
    }))
      .filter(({ top }) => !Number.isNaN(top))
      .sort((a, b) => a.top - b.top);
    for (const { link, top } of a) {
      if (top > scrollY + SCROLL_OFFSET + 4) {
        break;
      }
      activeItem = link;
    }
  }
  for (const tocItem of tocItems) {
    if (tocItem.dataset.toc == activeItem) {
      tocItem.classList.add("toc-link-active");
    } else {
      tocItem.classList.remove("toc-link-active");
    }
  }
}

updateActiveTocItem();

document.addEventListener("scroll", () => {
  requestAnimationFrame(() => {
    updateActiveTocItem();
  });
});

function getAbsoluteTop(element) {
  let offsetTop = 0;
  while (element !== document.body) {
    if (element === null) {
      // child element is:
      // - not attached to the DOM (display: none)
      // - set to fixed position (not scrollable)
      // - body or html element (null offsetParent)
      return NaN;
    }
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}
