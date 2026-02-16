import lume from "lume/mod.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import jsx from "lume/plugins/jsx.ts";
import toc from "lume_markdown_plugins/toc.ts";
import lang_typescript from "highlight.js/lib/languages/typescript";
import lang_plaintext from "highlight.js/lib/languages/plaintext";
import lang_shell from "highlight.js/lib/languages/shell";
import sass from "lume/plugins/sass.ts";
import sitemap from "lume/plugins/sitemap.ts";
import versions from "./_versions.ts";
import metas from "lume/plugins/metas.ts";

const site = lume({ src: "src" }, {
  markdown: { options: { typographer: true } },
});

// site.use(metas());

site.use(jsx());

site.ignore("components");

site.use(
  toc({
    slugify: (text) => toAnchor(text),
  }),
);

site.data("deno", "@mtkruto/mtkruto");
site.data("esm", `https://esm.sh/jsr/@mtkruto/mtkruto@${versions[0]}`);
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

site.use(sass());

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
      console.error("Tha page", page.src.path, "has an invalid parent.");
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
    for (const codeGroup of document.querySelectorAll("code-group")) {
      const div = document.createElement("div");
      let first = true;

      {
        const controls = document.createElement("div");
        controls.classList.add("code-group-header");
        let first = true;
        let n = 0;
        for (const node of codeGroup.querySelectorAll("code-group-item")) {
          controls.innerHTML += `<button data-n=${n++} class="code-group-button${first ? " code-group-button-active" : ""}">${node.getAttribute("title")}</button>`;
          first = false;
        }
        div.append(controls);
      }
      let n = 0;
      for (const pre of codeGroup.querySelectorAll("pre")) {
        if (!first) {
          pre.setAttribute("hidden", "");
        } else {
          first = false;
        }
        pre.setAttribute("data-n", n++ + "");
        pre.classList.add("code-group-item");
        div.append(pre);
      }
      div.classList.add("code-group");
      codeGroup.replaceWith(div);
    }
  }
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
${jsr ? "npx jsr i " + pkg : "npm install " + pkg}
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

site.helper("i", (page) => {
  const content = site.pages.find((v) => v.src.path === page)?.data.content;
  if (typeof content !== "string") {
    return "no for " + page;
  }
  const links = new Array<[string, string]>();
  for (let line of content.split("\n")) {
    if (!line.startsWith("## ")) {
      continue;
    }
    line = line.slice(3).trim();
    const title = line;
    const link = page + "#" + toAnchor(line);
    links.push([title, link]);
  }
  return "\n" + links.map((v) => `    - [${v[0]}](${v[1]})`).join("\n");
}, { type: "filter" });

site.data("layout", "layout.tsx");

export default site;
