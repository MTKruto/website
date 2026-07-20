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

function initIndexSubsections() {
  const panels = Array.from(document.querySelectorAll(".index-subsections"));
  const content = panels[0]?.closest(".content");
  if (!panels.length || !content) return;

  const hoverQuery = globalThis.matchMedia("(hover: hover) and (pointer: fine)");
  const entries = panels.map((panel, index) => {
    const item = panel.parentElement;
    const list = panel.querySelector(":scope > ul");
    const link = item?.querySelector(":scope > a, :scope > p > a");
    if (!item || !list || !link) return null;

    const title = list.getAttribute("aria-label")?.replace(/^Sections in /, "") || link.textContent.trim();
    const button = document.createElement("button");
    const panelId = `index-subsections-${index + 1}`;

    panel.id = panelId;
    item.classList.add("index-item-collapsible");
    button.type = "button";
    button.className = "index-subsection-toggle";
    button.setAttribute("aria-controls", panelId);
    button.innerHTML = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 5.5l5 5 5-5" /></svg>';
    link.after(button);

    const entry = { button, item, panel, title };
    button.addEventListener("click", () => {
      if (!hoverQuery.matches) setOpen(entry, !item.classList.contains("is-open"));
    });
    return entry;
  }).filter(Boolean);

  function setOpen(entry, open) {
    entry.item.classList.toggle("is-open", open);
    entry.panel.inert = !open;
    entry.panel.setAttribute("aria-hidden", String(!open));
    entry.button.setAttribute("aria-expanded", String(open));
    entry.button.setAttribute("aria-label", `${open ? "Hide" : "Show"} sections in ${entry.title}`);
  }

  function syncInputMode() {
    for (const entry of entries) {
      entry.item.classList.remove("is-open");
      if (hoverQuery.matches) {
        entry.panel.inert = false;
        entry.panel.removeAttribute("aria-hidden");
        entry.button.tabIndex = -1;
        entry.button.setAttribute("aria-hidden", "true");
        entry.button.removeAttribute("aria-expanded");
        entry.button.removeAttribute("aria-label");
      } else {
        entry.button.tabIndex = 0;
        entry.button.removeAttribute("aria-hidden");
        setOpen(entry, false);
      }
    }
  }

  syncInputMode();
  content.classList.add("index-subsections-enhanced");
  hoverQuery.addEventListener("change", syncInputMode);
}

function initToc() {
  const toc = document.querySelector(".toc");
  const viewport = toc?.querySelector(".toc-list-wrap");
  const list = toc?.querySelector(".toc-list");
  const rail = toc?.querySelector(".toc-rail");
  const railThumb = toc?.querySelector(".toc-rail-thumb");
  const footer = document.querySelector(".site-footer");

  if (!toc || !viewport || !list || !rail || !railThumb) return;

  const entries = Array.from(toc.querySelectorAll("[data-toc]"), (link) => {
    const selector = link.dataset.toc;
    const target = selector?.startsWith("#") ? document.getElementById(selector.slice(1)) : null;
    return target ? { link, item: link.parentElement, target } : null;
  }).filter(Boolean);

  if (!entries.length) return;

  const headerOffset = 100;
  const groupX = 0;
  const nestedX = 12;
  const strokeWidth = 2;
  let activeEntry;
  let lockedEntry;
  let lastGroup;
  let programmatic = false;
  let programmaticEntry;
  let programmaticTarget = 0;
  let settleTimer;
  let ticking = false;
  let boundsTicking = false;
  let relayoutTicking = false;

  toc.classList.add("toc-enhanced");

  function parentItem(item) {
    return item.parentElement?.closest(".toc-item");
  }

  function groupOf(item) {
    return parentItem(item) || item;
  }

  function isNested(item) {
    return Boolean(parentItem(item));
  }

  function segmentOf(link) {
    const linkRect = link.getBoundingClientRect();
    const viewportRect = viewport.getBoundingClientRect();
    const style = getComputedStyle(link);
    const contentTop = linkRect.top - viewportRect.top + viewport.scrollTop;
    const paddingTop = Number.parseFloat(style.paddingTop) || 0;
    const paddingBottom = Number.parseFloat(style.paddingBottom) || 0;

    return {
      top: contentTop + paddingTop,
      bottom: contentTop + link.clientHeight - paddingBottom,
    };
  }

  function buildRail() {
    const rows = entries
      .filter(({ link }) => link.getClientRects().length > 0)
      .map(({ link, item }) => ({ link, x: isNested(item) ? nestedX : groupX }));

    if (!rows.length) {
      rail.style.width = "0";
      rail.style.height = "0";
      return;
    }

    let width = 0;
    let height = 0;
    const path = [];

    for (const [index, row] of rows.entries()) {
      const x = row.x + strokeWidth / 2;
      const segment = segmentOf(row.link);
      width = Math.max(width, x);
      height = Math.max(height, segment.bottom);
      path.push(`${index === 0 ? "M" : "L"}${x} ${segment.top}`);
      path.push(`L${x} ${segment.bottom}`);
    }

    width += strokeWidth / 2;
    rail.style.width = `${width}px`;
    rail.style.height = `${height}px`;

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"><path d="${path.join(" ")}" stroke="black" stroke-width="${strokeWidth}" fill="none" stroke-linejoin="round"/></svg>`;
    const mask = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
    rail.style.webkitMaskImage = mask;
    rail.style.maskImage = mask;
  }

  function positionThumb(link) {
    const segment = segmentOf(link);
    railThumb.style.marginTop = `${segment.top}px`;
    railThumb.style.height = `${segment.bottom - segment.top}px`;
  }

  function revealLink(link) {
    if (viewport.clientHeight === 0 || viewport.scrollHeight <= viewport.clientHeight) return;

    const edgePadding = 8;
    const linkRect = link.getBoundingClientRect();
    const viewportRect = viewport.getBoundingClientRect();

    if (linkRect.top < viewportRect.top + edgePadding) {
      viewport.scrollTop -= viewportRect.top - linkRect.top + edgePadding;
    } else if (linkRect.bottom > viewportRect.bottom - edgePadding) {
      viewport.scrollTop += linkRect.bottom - viewportRect.bottom + edgePadding;
    }
  }

  function updateTocBounds() {
    const style = getComputedStyle(toc);
    if (style.display === "none") return;

    const top = Number.parseFloat(style.top) || 0;
    const viewportBottom = globalThis.innerHeight - top;
    const footerBottom = footer ? footer.getBoundingClientRect().top - 16 : viewportBottom;
    const bottom = Math.min(viewportBottom, footerBottom);
    toc.style.setProperty("--toc-max-height", `${Math.max(0, bottom - top)}px`);
  }

  function requestTocBoundsUpdate() {
    if (boundsTicking) return;
    boundsTicking = true;
    globalThis.requestAnimationFrame(() => {
      boundsTicking = false;
      updateTocBounds();
    });
  }

  function findCurrent() {
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - globalThis.innerHeight);
    if (maxScroll < 1) return activeEntry || entries[0];

    const activationPoints = entries.map((entry, index) => {
      if (index === 0) return 0;
      const top = entry.target.getBoundingClientRect().top + globalThis.scrollY;
      return Math.max(0, Math.min(top - headerOffset, maxScroll));
    });
    const activationSpan = activationPoints.at(-1) || 0;
    const minimumRange = entries.length > 1 ? Math.min(48, activationSpan / (entries.length - 1)) : 0;

    for (let index = activationPoints.length - 2; index > 0; index--) {
      activationPoints[index] = Math.max(0, Math.min(activationPoints[index], activationPoints[index + 1] - minimumRange));
    }

    let current = entries[0];
    for (const [index, activationPoint] of activationPoints.entries()) {
      if (activationPoint > globalThis.scrollY + 1) break;
      current = entries[index];
    }
    return current;
  }

  function entryForHash(hash) {
    let targetId;
    try {
      targetId = decodeURIComponent(hash.slice(1));
    } catch {
      return;
    }
    return entries.find((candidate) => candidate.target.id === targetId);
  }

  function applyCurrent(current, forceSnap = false) {
    if (!current) return;

    const previousEntry = activeEntry;
    const previousGroup = previousEntry ? groupOf(previousEntry.item) : null;

    for (const item of list.querySelectorAll(".toc-item-active, .toc-group-active")) {
      item.classList.remove("toc-item-active", "toc-group-active");
    }
    for (const link of list.querySelectorAll("[aria-current]")) {
      link.removeAttribute("aria-current");
    }

    current.item.classList.add("toc-item-active");
    current.link.classList.add("toc-link-active");
    current.link.setAttribute("aria-current", "location");

    for (const entry of entries) {
      if (entry !== current) entry.link.classList.remove("toc-link-active");
    }

    const group = groupOf(current.item);
    group.classList.add("toc-group-active");
    revealLink(current.link);

    const railChanged = group !== lastGroup;
    if (railChanged) {
      buildRail();
      lastGroup = group;
    }

    if (!previousEntry || forceSnap) {
      railThumb.classList.remove("is-animated");
      positionThumb(current.link);
      void railThumb.offsetHeight;
      railThumb.classList.add("is-animated");
    } else if (group !== previousGroup) {
      const startLink = previousEntry.link.getClientRects().length > 0 ? previousEntry.link : previousGroup.firstElementChild;
      railThumb.classList.remove("is-animated");
      positionThumb(startLink);
      void railThumb.offsetHeight;
      railThumb.classList.add("is-animated");
      positionThumb(current.link);
    } else if (current !== previousEntry) {
      positionThumb(current.link);
    }

    activeEntry = current;
  }

  function updateActive() {
    ticking = false;
    applyCurrent(lockedEntry || findCurrent());
  }

  function endProgrammaticScroll() {
    programmatic = false;
    globalThis.clearTimeout(settleTimer);
    const clickedEntry = programmaticEntry;
    programmaticEntry = undefined;
    if (clickedEntry) applyCurrent(clickedEntry);
    else updateActive();
  }

  function activateHashEntry() {
    const entry = entryForHash(globalThis.location.hash);
    if (!entry) return false;

    lockedEntry = entry;
    programmatic = true;
    programmaticEntry = entry;
    programmaticTarget = Number.NaN;
    applyCurrent(entry);
    globalThis.clearTimeout(settleTimer);
    settleTimer = globalThis.setTimeout(endProgrammaticScroll, 500);
    return true;
  }

  function onHashChange() {
    if (activateHashEntry()) return;
    releaseLockedEntry();
    updateActive();
  }

  function onScroll() {
    requestTocBoundsUpdate();
    if (programmatic) {
      if (Math.abs(globalThis.scrollY - programmaticTarget) <= 2) endProgrammaticScroll();
      return;
    }
    if (ticking) return;
    ticking = true;
    globalThis.requestAnimationFrame(updateActive);
  }

  function onClick(event) {
    const link = event.target instanceof Element ? event.target.closest("[data-toc]") : null;
    if (!link || !toc.contains(link)) return;

    const entry = entries.find((candidate) => candidate.link === link);
    if (!entry) return;
    event.preventDefault();

    const isHeader = !isNested(entry.item);
    lockedEntry = entry;
    programmatic = true;
    programmaticEntry = entry;
    applyCurrent(entry);

    const top = entry.target.getBoundingClientRect().top + globalThis.scrollY - 20;
    const maxScroll = document.documentElement.scrollHeight - globalThis.innerHeight;
    programmaticTarget = Math.max(0, Math.min(top, maxScroll));

    const reduceMotion = globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isHeader) {
      const previousScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      globalThis.scrollTo({ top });
      globalThis.requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = previousScrollBehavior;
      });
    } else {
      globalThis.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
    }

    const hash = link.dataset.toc;
    if (globalThis.history.replaceState) globalThis.history.replaceState(null, "", hash);
    else globalThis.location.hash = hash;

    globalThis.clearTimeout(settleTimer);
    settleTimer = globalThis.setTimeout(endProgrammaticScroll, 2000);
  }

  function onDocumentFragmentClick(event) {
    const link = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null;
    if (!link || toc.contains(link) || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const entry = entryForHash(link.hash);
    if (!entry) return;
    lockedEntry = entry;
    applyCurrent(entry);
  }

  function releaseLockedEntry() {
    lockedEntry = undefined;
    if (!programmatic) return;
    programmatic = false;
    programmaticEntry = undefined;
    globalThis.clearTimeout(settleTimer);
  }

  function onKeyDown(event) {
    if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) releaseLockedEntry();
  }

  function relayout() {
    if (relayoutTicking) return;
    relayoutTicking = true;
    globalThis.requestAnimationFrame(() => {
      relayoutTicking = false;
      updateTocBounds();
      lastGroup = null;
      applyCurrent(programmaticEntry || lockedEntry || findCurrent(), true);
    });
  }

  toc.addEventListener("click", onClick);
  document.addEventListener("click", onDocumentFragmentClick);
  globalThis.addEventListener("scroll", onScroll, { passive: true });
  globalThis.addEventListener("resize", relayout, { passive: true });
  globalThis.addEventListener("load", relayout);
  globalThis.addEventListener("hashchange", onHashChange);
  globalThis.addEventListener("wheel", releaseLockedEntry, { passive: true });
  globalThis.addEventListener("touchstart", releaseLockedEntry, { passive: true });
  globalThis.addEventListener("pointerdown", releaseLockedEntry, { passive: true });
  globalThis.addEventListener("keydown", onKeyDown);

  if (globalThis.ResizeObserver) {
    const resizeObserver = new ResizeObserver(relayout);
    resizeObserver.observe(list);
  }

  updateTocBounds();
  if (!activateHashEntry()) updateActive();
}

initIndexSubsections();
initToc();
