import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import sitemap from "lume/plugins/sitemap.ts";
import toc from "https://deno.land/x/lume_markdown_plugins@v0.7.0/toc.ts";
import sass from "lume/plugins/sass.ts";
import lang_typescript from "npm:highlight.js/lib/languages/typescript";
import lang_plaintext from "npm:highlight.js/lib/languages/plaintext";
import lang_shell from "npm:highlight.js/lib/languages/shell";
import versions from "./_versions.ts";

const site = lume({
  location: new URL("https://mtkru.to"),
  src: `./src`,
}, {
  markdown: { options: { typographer: true } },
});

site.ignore("components");

site.use(
  toc({
    slugify: (text) =>
      text.replaceAll(/\p{P}/ug, "").toLowerCase().replaceAll(/\s+/g, "-"),
  }),
);

site.data("deno", `https://deno.land/x/mtkruto@${versions[0]}`);
site.data("esm", `https://esm.sh/jsr/@mtkruto/mtkruto@${versions[0]}`);

site.use(sass());

site.use(code_highlight({
  languages: {
    typescript: lang_typescript,
    shell: lang_shell,
    txt: lang_plaintext,
  },
}));
site.use(jsx_preact());
site.use(sitemap());

site.data("layout", "layout.tsx");

site.copy("_headers");
site.copy("static", ".");

site.process([".html"], (pages) => {
  for (const page of pages) {
    const document = page.document;
    if (!document) {
      continue;
    }
    for (const code of document.querySelectorAll(".language-shell")) {
      code.innerHTML = code.innerHTML.trim()
        .split("\n").map((v) =>
          `<span style="opacity: 0.5; user-select: none">$ </span>${v}`
        ).join("\n");
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
          controls.innerHTML +=
            `<button data-n=${n++} class="code-group-button${
              first ? " code-group-button-active" : ""
            }">${node.getAttribute("title")}</button>`;
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
  (title) => (site.pages.find((v) => v.src.path == title)?.data.title ?? title),
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
  const jsr = pkg.startsWith('jsr:')
  jsr && (pkg = pkg.slice(4))
  return `
<code-group>

<code-group-item title="pnpm">

\`\`\`shell
pnpm ${jsr ? 'add ' + pkg : 'dlx jsr i ' + pkg}
\`\`\`

</code-group-item>

<code-group-item title="yarn">

\`\`\`shell
yarn ${jsr ? 'add ' + pkg : 'dlx jsr i ' + pkg}
\`\`\`

</code-group-item>

<code-group-item title="npm">

\`\`\`shell
${jsr ? 'npm install ' + pkg : 'npx jsr i ' + pkg}
\`\`\`

</code-group-item>

</code-group>
`
}, { type: "filter" });

export default site;
