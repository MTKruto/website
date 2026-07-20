import lume from "lume/mod.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import jsx from "lume/plugins/jsx.ts";
import toc from "lume_markdown_plugins/toc.ts";
import lang_typescript from "highlight.js/lib/languages/typescript";
import lang_plaintext from "highlight.js/lib/languages/plaintext";
import lang_shell from "highlight.js/lib/languages/shell";
import sass from "lume/plugins/sass.ts";
import sitemap from "lume/plugins/sitemap.ts";
import pagefind from "lume/plugins/pagefind.ts";
import versions from "./_versions.ts";
import metas from "lume/plugins/metas.ts";

const site = lume({ src: "src" }, {
  markdown: { options: { typographer: true } },
});

site.use(sass());

site.use(metas());

site.use(jsx());

site.ignore("components");

site.use(
  toc({
    slugify: (text) => toAnchor(text),
  }),
);

site.data("deno", "@mtkruto/mtkruto");
site.data("esm", `https://cdn.jsdelivr.net/npm/@mtkruto/browser@${versions[0]}/esm/mod.js`);
site.helper("bc", (path: string) => {
  if (path.endsWith("/")) {
    path = path.slice(0, -1);
  }
  const items = new Array<[string, string]>();
  let parent = parentMap[path];
  while (parent) {
    items.push([parent, getTitle(parent)!]);
    parent = parentMap[parent];
  }
  items.push(["/", "MTKruto"]);
  return items.toReversed();
}, { type: "filter" });

site.use(codeHighlight({
  languages: {
    typescript: lang_typescript,
    shell: lang_shell,
    txt: lang_plaintext,
  },
}));

site.use(sitemap());

site.copy("_headers");
site.copy("static", ".");
site.add("style.scss");

function toAnchor(title: string) {
  return title.replaceAll(/\p{P}/ug, "").toLowerCase().replaceAll(/\s+/g, "-");
}

const walkthroughTracks = ["main", "user", "bot"] as const;
type WalkthroughTrack = typeof walkthroughTracks[number];
type WalkthroughAudience = Exclude<WalkthroughTrack, "main">;

interface WalkthroughData {
  track: WalkthroughTrack;
  order: number;
  sections?: Record<string, WalkthroughAudience>;
}

function isWalkthroughTrack(value: unknown): value is WalkthroughTrack {
  return walkthroughTracks.includes(value as WalkthroughTrack);
}

function getWalkthroughData(page: Lume.Page): WalkthroughData | undefined {
  const data = page.data.walkthrough;
  if (
    typeof data !== "object" || data === null ||
    !isWalkthroughTrack(data.track) ||
    typeof data.order !== "number" || !Number.isFinite(data.order)
  ) {
    return undefined;
  }
  return data as WalkthroughData;
}

function getWalkthroughPages(
  track: WalkthroughTrack,
  pages: Lume.Page[] = site.pages,
) {
  return pages
    .filter((page) => getWalkthroughData(page)?.track === track)
    .sort((a, b) => {
      const order = getWalkthroughData(a)!.order - getWalkthroughData(b)!.order;
      return order || a.src.path.localeCompare(b.src.path);
    });
}

function getH2Links(page: Lume.Page) {
  const content = page.data.content;
  const links = new Array<[string, string, string]>();
  if (typeof content !== "string") {
    return links;
  }
  for (let line of content.split("\n")) {
    if (!line.startsWith("## ")) {
      continue;
    }
    line = line.slice(3).trim();
    const id = toAnchor(line);
    links.push([line, page.src.path + "#" + id, id]);
  }
  return links;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function getTitle(path: string) {
  let anchor: string | undefined;
  if (path.includes("#")) {
    [path, anchor] = path.split("#");
  }
  if (path === "/") {
    path = "/index";
  }
  const page = site.pages.find((v) => v.src.path == path);
  if (page === undefined) {
    return path;
  } else if (anchor !== undefined) {
    const fallback = path + "#" + anchor;
    const fileName = page.src.entry?.src;
    if (fileName) {
      const md = Deno.readTextFileSync(fileName);
      for (let line of md.split("\n")) {
        if (!line.startsWith("#") && line.includes("# ")) {
          continue;
        }
        while (line.startsWith("#")) {
          line = line.slice(1);
        }
        line = line.trim();
        if (toAnchor(line) === anchor) {
          return line;
        }
      }
    }
    return fallback;
  } else {
    return page.data.title;
  }
}

const titleMap: Record<string, string> = {};
const parentMap: Record<string, string> = {};
site.preprocess([".html"], (pages) => {
  let error = false;
  let errorCount = 0;
  for (const page of pages) {
    if (page.src.path === "/index" || page.src.path === "/404") {
      continue;
    }
    if (!page.data.title) {
      console.error("The page", page.src.path, "does not have a title.");
      error = true;
      ++errorCount;
    } else {
      titleMap[page.src.path] = page.data.title;
    }
    if (!page.data.parent) {
      console.error("The page", page.src.path, "does not have a parent.");
      error = true;
      ++errorCount;
    } else {
      parentMap[page.src.path] = page.data.parent;
    }
  }

  for (const page of pages) {
    delete page.data.walkthroughProgress;
  }

  const trackLabels: Record<WalkthroughTrack, string> = {
    main: "Main",
    user: "User",
    bot: "Bot",
  };
  for (const track of walkthroughTracks) {
    const trackPages = getWalkthroughPages(track, pages);
    for (let index = 0; index < trackPages.length; ++index) {
      const page = trackPages[index];
      delete page.data.prev;
      delete page.data.next;
      page.data.walkthroughProgress = {
        label: trackLabels[track],
        step: index + 1,
        total: trackPages.length,
      };
      if (index > 0) {
        page.data.prev = trackPages[index - 1].src.path;
      }
      if (index < trackPages.length - 1) {
        page.data.next = trackPages[index + 1].src.path;
      }
    }
  }

  errorCount && console.error("Aborting because of", errorCount, "error(s).");
  error && Deno.exit(1);
});

site.process([".html"], (pages) => {
  let error = false;
  let errorCount = 0;
  for (const page of pages) {
    if (
      page.data.parent !== undefined &&
      (getTitle(page.data.parent) === page.data.parent)
    ) {
      console.error("The page", page.src.path, "has an invalid parent.");
      error = true;
      ++errorCount;
    }
  }

  errorCount && console.log("Aborting because of", errorCount, "error(s).");
  error && Deno.exit(1);
});

site.process([".html"], (pages) => {
  for (const page of pages) {
    const document = page.document;
    if (!document) {
      continue;
    }
    for (const code of document.querySelectorAll(".language-shell")) {
      code.innerHTML = code.innerHTML.trim()
        .split("\n").map((v) => `<span style="opacity: 0.5; user-select: none">$ </span>${v}`).join("\n");
    }
  }
});

site.process([".html"], (pages) => {
  for (const page of pages) {
    const document = page.document;
    if (!document) {
      continue;
    }
    for (const [groupIndex, codeGroup] of [...document.querySelectorAll("code-group")].entries()) {
      const div = document.createElement("div");
      const controls = document.createElement("div");
      const items = [...codeGroup.querySelectorAll("code-group-item")];
      const panels = new Array<Element>();

      controls.classList.add("code-group-header");
      controls.setAttribute("role", "tablist");
      controls.setAttribute("aria-label", "Code example variants");

      for (const [itemIndex, item] of items.entries()) {
        const pre = item.querySelector("pre");
        if (!pre) continue;

        const label = item.getAttribute("title")?.trim() || `Example ${itemIndex + 1}`;
        const selected = panels.length === 0;
        const tabId = `code-group-${groupIndex + 1}-tab-${itemIndex + 1}`;
        const panelId = `code-group-${groupIndex + 1}-panel-${itemIndex + 1}`;
        const button = document.createElement("button");

        button.textContent = label;
        button.className = `code-group-button${selected ? " code-group-button-active" : ""}`;
        button.setAttribute("type", "button");
        button.setAttribute("id", tabId);
        button.setAttribute("role", "tab");
        button.setAttribute("aria-controls", panelId);
        button.setAttribute("aria-selected", String(selected));
        button.setAttribute("tabindex", selected ? "0" : "-1");
        button.setAttribute("data-code-group-label", label);
        controls.append(button);

        pre.setAttribute("id", panelId);
        pre.setAttribute("role", "tabpanel");
        pre.setAttribute("aria-labelledby", tabId);
        if (!selected) pre.setAttribute("hidden", "");
        pre.classList.add("code-group-item");
        panels.push(pre);
      }

      div.append(controls, ...panels);
      div.classList.add("code-group");
      codeGroup.replaceWith(div);
    }
  }
});

site.process([".html"], (pages) => {
  let error = false;
  let errorCount = 0;

  for (const page of pages) {
    const document = page.document;
    const sections = getWalkthroughData(page)?.sections;
    if (!document || !sections) {
      continue;
    }

    for (const [id, audience] of Object.entries(sections)) {
      if (audience !== "user" && audience !== "bot") {
        console.error(
          "The walkthrough section",
          `${page.src.path}#${id}`,
          "has an invalid audience.",
        );
        error = true;
        ++errorCount;
        continue;
      }

      const heading = document.querySelector(`#${id}`);
      if (!heading) {
        console.error(
          "The walkthrough section",
          `${page.src.path}#${id}`,
          "does not exist.",
        );
        error = true;
        ++errorCount;
        continue;
      }

      heading.classList.add("audience-heading");
      const badge = document.createElement("span");
      badge.classList.add("inline-flex", "w-fit", "items-center");
      badge.setAttribute(
        "style",
        "font-size:12px;white-space:nowrap;word-break:keep-all;",
      );
      const badgeText = document.createElement("span");
      badgeText.classList.add("w-fit", "bg-dbt", "select-none", "text-fgt");
      badgeText.setAttribute("style", "padding:2px 8px;border-radius:12px;");
      badgeText.textContent = `${audience.toUpperCase()}-ONLY`;
      badge.append(badgeText);
      heading.append(badge);
    }
  }

  errorCount && console.error("Aborting because of", errorCount, "error(s).");
  error && Deno.exit(1);
});

site.preprocess(
  [".md"],
  (pages) => pages.forEach((page) => page.data.templateEngine = ["vto", "md"]),
);

site.helper(
  "getTitle",
  (path) => getTitle(path),
  { type: "filter" },
);
site.helper(
  "m",
  (name) => (`[${name}](/methods/${name.toLowerCase()})`),
  { type: "filter" },
);
site.helper(
  "t",
  (name) => (`[${name}](/types/${name.toLowerCase()})`),
  { type: "filter" },
);

site.helper("install", (pkg: string) => {
  const jsr = pkg.startsWith("jsr:");
  jsr && (pkg = pkg.slice(4));
  return `
<code-group>

<code-group-item title="pnpm">

\`\`\`shell
pnpm ${jsr ? "add jsr:" + pkg : "add " + pkg}
\`\`\`

</code-group-item>

<code-group-item title="Yarn">

\`\`\`shell
yarn ${jsr ? "add jsr:" + pkg : "add " + pkg}
\`\`\`

</code-group-item>

<code-group-item title="npm">

\`\`\`shell
${jsr ? "npx jsr add " + pkg : "npm install " + pkg}
\`\`\`

</code-group-item>

<code-group-item title="Bun">

\`\`\`shell
${jsr ? "bunx jsr add " + pkg : "bun add " + pkg}
\`\`\`

</code-group-item>

</code-group>
`;
}, { type: "filter" });

site.helper("create", (pkg: string) => {
  return `
<code-group>

<code-group-item title="Deno">

\`\`\`shell
deno -A jsr:${pkg}
\`\`\`

</code-group-item>

<code-group-item title="pnpm">

\`\`\`shell
pnpm create ${pkg}
\`\`\`

</code-group-item>

<code-group-item title="Yarn">

\`\`\`shell
yarn create ${pkg}
\`\`\`

</code-group-item>

<code-group-item title="npm">

\`\`\`shell
npm create ${pkg}
\`\`\`

</code-group-item>

<code-group-item title="Bun">

\`\`\`shell
bun create ${pkg}
\`\`\`

</code-group-item>

</code-group>
`;
}, { type: "filter" });

site.helper("i", (path) => {
  const page = site.pages.find((v) => v.src.path === path);
  const content = page?.data.content;
  if (typeof content !== "string") {
    return "no for " + path;
  }
  const links = new Array<[string, string]>();
  for (let line of content.split("\n")) {
    if (!line.startsWith("## ")) {
      continue;
    }
    line = line.slice(3).trim();
    const title = line;
    const link = path + "#" + toAnchor(line);
    links.push([title, link]);
  }
  if (!links.length) {
    return "";
  }
  const title = page.data.title ?? path;
  const items = links.map(([heading, link], index) => `        <li style="--subsection-delay: ${index * 28}ms"><a href="${escapeHtml(link)}">${escapeHtml(heading)}</a></li>`).join("\n");
  return `
    <div class="index-subsections">
      <ul aria-label="Sections in ${escapeHtml(title)}">
${items}
      </ul>
    </div>`;
}, { type: "filter" });

site.helper("walkthrough", (track: string) => {
  if (!isWalkthroughTrack(track)) {
    throw new Error(`Invalid walkthrough track: ${track}`);
  }

  const label = {
    main: "Main walkthrough",
    user: "User account walkthrough",
    bot: "Bot account walkthrough",
  }[track];
  const items = getWalkthroughPages(track).map((page) => {
    const title = page.data.title ?? page.src.path;
    const headings = getH2Links(page);
    const audiences = getWalkthroughData(page)?.sections ?? {};
    const sections = headings.length
      ? `\n    <div class="index-subsections">\n      <ul aria-label="Sections in ${escapeHtml(title)}">\n${
        headings.map(([heading, link, id], index) => {
          const audience = audiences[id];
          const badge = audience ? `<span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">${audience.toUpperCase()}-ONLY</span></span>` : "";
          return `        <li style="--subsection-delay: ${index * 28}ms"><a href="${escapeHtml(link)}">${escapeHtml(heading)}</a>${badge}</li>`;
        }).join("\n")
      }\n      </ul>\n    </div>`
      : "";
    return `  <li><a href="${escapeHtml(page.src.path)}">${escapeHtml(title)}</a>${sections}\n  </li>`;
  });

  return `<ol class="walkthrough-list" aria-label="${label}">\n${items.join("\n")}\n</ol>`;
}, { type: "filter" });

site.data("layout", "layout.tsx");

const pagefindUi = {
  containerId: "pagefind-search",
  pageSize: 8,
  showSubResults: true,
  showImages: false,
  excerptLength: 24,
  showEmptyFilters: false,
  resetStyles: true,
  debounceTimeoutMs: 150,
  translations: {
    placeholder: "Search...",
    clear_search: "Clear Search",
    search_label: "Search documentation",
    zero_results: "No results were found for “[SEARCH_TERM]”.",
  },
  // Pagefind UI forwards additional options to the search API.
  // API reference pages vary greatly in length, so length should not outrank a closer title match.
  ranking: { pageLength: 0 },
};

site.use(pagefind({
  ui: pagefindUi,
  indexing: {
    rootSelector: "html",
    verbose: false,
    excludeSelectors: [
      ".bottom-nav",
      ".walkthrough-list",
      ".index-subsections",
      ".descr-list",
      ".page-home > ul",
      ".page-home > ol",
    ],
  },
}));

site.process([".html"], (pages) => {
  for (const page of pages) {
    page.document?.querySelector('script[src$="/pagefind-ui.js"]')?.setAttribute("defer", "");
  }
});

export default site;
