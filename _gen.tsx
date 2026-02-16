import { JsDocTagDoc, JsDocTagUnsupported } from "deno_doc/types.d.ts";
import { getDocs } from "./_docs.ts";
import { getMethodOptionalParams, Method } from "./_components/Method.tsx";
import { TsType, TypeParams_ } from "./_components/TsType.tsx";
import { Properties } from "./_components/Properties.tsx";
import { TypeAlias } from "./_components/TypeAlias.tsx";
import { Description } from "./_components/Description.tsx";
import { renderToString } from "preact-render-to-string";

const version = Deno.env.get("VERSION") ? ("/" + Deno.env.get("VERSION")) : "";

const {
  methods,
  getLink,
  methodTypes,
  types,
} = await getDocs(Deno.env.get("VERSION"));

for (const dir of [`src${version}/methods`, `src${version}/types`]) {
  try {
    Deno.removeSync(dir, { recursive: true });
  } catch {
    //
  }
  Deno.mkdirSync(dir, { recursive: true });
}

{ // METHOD INDEX
  const groups = Object.entries({
    "ac": ["Account", "account"],
    "ms": ["Messages", "messages"],
    "ch": ["Chats", "chats"],
    "fs": ["Files", "files"],
    "cq": ["Callback Queries", "callback-queries"],
    "iq": ["Inline Queries", "inline-queries"],
    "bs": ["Bots", "bots"],
    "re": ["Reactions", "reactions"],
    "st": ["Stories", "stories"],
    "vc": ["Video Chats", "video-chats"],
    "co": ["Contacts", "contacts"],
    "pa": ["Payments", "payments"],
    "ta": ["Translations", "translations"],
    "pl": ["Polls", "polls"],
    "gf": ["Gifts", "gifts"],
  }).sort(([, [a]], [, [b]]) => a.localeCompare(b));
  const knowsGroups = groups.map((v) => v[0]);

  const hasGroup = (g: string) => methods.find((v) => v.jsDoc?.tags?.find((v): v is JsDocTagUnsupported => v.kind == "unsupported")?.value.split(/\s/)[1] == g) !== undefined;

  let methods_md = `---
title: Methods
parent: /#api-reference
metas:
  description: List of MTKruto methods
---
`;

  for (const [g, [title]] of groups) {
    if (!hasGroup(g)) {
      continue;
    }
    const methods_ = methods.filter((v) => v.jsDoc?.tags?.find((v): v is JsDocTagUnsupported => v.kind == "unsupported")?.value.split(/\s/)[1] == g).sort((a, b) => a.name.localeCompare(b.name));
    if (!methods_.length) {
      continue;
    }
    methods_md += `## ${title}\n`;

    methods_md += '<div class="descr-list">\n\n';

    for (let method of methods_) {
      method = structuredClone(method);
      if (method.jsDoc?.doc) {
        method.jsDoc.doc = method.jsDoc.doc.replaceAll("User-only.", "");
        method.jsDoc.doc = method.jsDoc.doc.replaceAll("Bot-only.", "");
        method.jsDoc.doc = method.jsDoc.doc.trim();
      }
      methods_md += `<a href="${version ? `${version}/` : "/"}methods/${method.name.toLowerCase()}">${method.name}</a>\n`;
      methods_md += `<div><div>\n\n${method.jsDoc?.doc ?? `<i style="opacity: 0.5">No Description</i>`}\n\n</div></div>\n`;
      methods_md += '<div class="descr-list-border"></div>\n';
    }

    methods_md += "\n</div>\n\n";
  }

  const unlisted = methods.filter((v) => {
    const tag = v.jsDoc?.tags?.find((v): v is JsDocTagUnsupported => v.kind == "unsupported")?.value.split(/\s/)[1];
    if (!tag) {
      return true;
    }
    return !knowsGroups.includes(tag);
  }).sort((a, b) => a.name.localeCompare(b.name));
  if (unlisted.length) {
    methods_md += `## Unlisted\n`;

    methods_md += '<div class="descr-list">\n\n';

    for (let method of unlisted) {
      method = structuredClone(method);
      if (method.jsDoc?.doc) {
        method.jsDoc.doc = method.jsDoc.doc.replaceAll("User-only.", "");
        method.jsDoc.doc = method.jsDoc.doc.replaceAll("Bot-only.", "");
        method.jsDoc.doc = method.jsDoc.doc.trim();
      }
      methods_md += `<a href="${version ? `${version}/` : "/"}methods/${method.name.toLowerCase()}">${method.name}</a>\n`;
      methods_md += `<div><div>\n\n${method.jsDoc?.doc ?? `<i style="opacity: 0.5">No Description</i>`}\n\n</div></div>\n`;
      methods_md += '<div class="descr-list-border"></div>\n';
    }

    methods_md += "\n</div>\n\n";
  }

  Deno.writeTextFileSync(`src${version}/methods.md`, methods_md);
} // METHOD INDEX

{ // TYPE INDEX
  let types_md = `---
title: Types
parent: /#api-reference
metas:
  description: List of MTKruto types
---
`;

  types_md += '<div class="descr-list">\n\n';

  for (
    const type of types
      .filter((v) => {
        for (const tag of (v.jsDoc?.tags ?? [])) {
          if (tag.kind == "unsupported" && tag.value == "@unlisted") {
            return false;
          }
        }
        return true;
      })
  ) {
    types_md += `<a href="${version ? `${version}/` : "/"}types/${type.name.toLowerCase()}">${type.name}</a>\n`;
    types_md += `<div><div>\n\n${type.jsDoc?.doc ?? `<i style="opacity: 0.5">No Description</i>`}\n\n</div></div>\n`;
    types_md += '<div class="descr-list-border"></div>\n';
  }

  types_md += "\n</div>\n\n";

  Deno.writeTextFileSync(`src${version}/types.md`, types_md);
} // TYPE INDEX

{ // METHOD
  for (const method of methods) {
    const cache = method.jsDoc?.tags?.find((
      v,
    ): v is JsDocTagUnsupported => v.kind == "unsupported" && v.value.includes("@cache"));
    const cacheFile = cache?.value.includes("file");
    const tag = (text: string) => (
      <span
        class="inline-flex w-fit items-center"
        style={{ fontSize: 12, whiteSpace: "nowrap", wordBreak: "keep-all" }}
      >
        <span
          class="w-fit bg-dbt select-none text-fgt"
          style={{ padding: "2px 8px", borderRadius: 12 }}
        >
          {text.toUpperCase()}
        </span>
      </span>
    );
    const cacheEl = (cacheFile || cache)
      ? (
        tag(`CACHE${cacheFile ? " [F]" : ""}`)
      )
      // deno-lint-ignore jsx-no-useless-fragment
      : <></>;
    const tagEl = method.jsDoc?.doc?.includes("User-only.") ? tag("User-only") : method.jsDoc?.doc?.includes("Bot-only.")
      ? tag("Bot-only")
      // deno-lint-ignore jsx-no-useless-fragment
      : <></>;
    const tags = <>{tagEl} {cacheEl}</>;

    let method_md = `---
title: ${method.name}
parent: /methods
`;

    if (method.jsDoc?.doc) {
      method_md += `metas:
  description: ${method.jsDoc.doc.trim().split("\n")[0]}
`;
    }
    method_md += `---\n\n`;

    if (method.jsDoc?.doc) {
      const a = renderToString(tags);
      method_md += method.jsDoc.doc.replaceAll("User-only.", "").replaceAll(
        "Bot-only.",
        "",
      ).trim() + (a ? `<span class="select-none"> ${a}</span>` : "");
      method_md += "\n\n";
    }

    //
    if (method.functionDef.typeParams.length > 0) {
      method_md += "### Type Parameters \n\n";
      method_md += renderToString(
        <div class="font-mono">
          <TypeParams_ getLink={getLink}>
            {method.functionDef.typeParams}
          </TypeParams_>
        </div>,
      );
      method_md += "\n\n";
    }
    //
    if (method.functionDef.params.length > 0) {
      method_md += "### Parameters \n\n";
      method_md += renderToString(
        <Method getLink={getLink} methodTypes={methodTypes}>{method}</Method>,
      );
      method_md += "\n\n";
    }
    //
    const ret = method.functionDef.returnType
      ? (method.functionDef.returnType.repr == "Promise" &&
          method.functionDef.returnType.kind == "typeRef")
        ? method.functionDef.returnType.typeRef.typeParams ? method.functionDef.returnType.typeRef.typeParams[0] : undefined
        : method.functionDef.returnType
      : undefined;
    const retDoc = method.jsDoc?.tags?.find((v) => v.kind == "return")?.doc;
    method_md += "### Result \n\n";
    method_md += renderToString(
      <>
        <div class="font-mono">
          {ret ? <TsType getLink={getLink}>{ret}</TsType> : "void"}
        </div>
        {retDoc && (
          <div class="pl-3">
            <Description>{retDoc}</Description>
          </div>
        )}
      </>,
    );
    method_md += "\n\n";
    //
    method_md += "### Syntax\n\n";
    method_md += renderToString(
      <>
        {(() => {
          const requiredParams = method.functionDef.params.filter((v) => v.kind == "identifier" && !v.optional).map((v) => "name" in v ? v.name : "").filter((v) => v);
          const p = getMethodOptionalParams(method, methodTypes);
          const len = (p?.interfaceDef?.properties?.length ?? 0) +
            requiredParams.length;
          const split = len >= 5;

          if (!len) {
            return `\`\`\`ts
await client.${method.name}();
\`\`\``;
          }

          let optional = "";
          if (p?.interfaceDef?.properties.length) {
            const params = p.interfaceDef.properties.map((v) => v.name);
            if (!split) {
              optional += `{ ${(params.join(", "))} }`;
            } else {
              optional += `{\n${params.map((v) => `    ${v},`).join("\n")}\n}`;
            }
          }

          const required = requiredParams.length
            ? `${optional ? "// Required parameters only." : ""}
await client.${method.name}(${requiredParams.join(", ")});`.trim()
            : "";

          optional = optional
            ? `// ${required ? "Required parameters + o" : "O"}ptional parameters.
// Any of the optional parameters can be omitted.
await client.${method.name}(${requiredParams.join(", ")}${optional ? `${requiredParams.length ? "," : ""} ${optional}` : ""});`
            : "";

          return `\`\`\`ts
${
            `${required}

${optional}`.trim()
          }
\`\`\``;
        })()}
      </>,
    );
    method_md += "\n\n";
    //
    const example = method.jsDoc?.tags?.find((v) => v.kind == "example") as JsDocTagDoc;
    if (example?.doc) {
      method_md += "### Examples \n\n";
      method_md += example.doc;
    }
    method_md += "\n\n";
    //

    Deno.writeTextFileSync(
      `src${version}/methods/${method.name.toLowerCase()}.md`,
      method_md,
    ); //
  }
} // METHOD

{ // TYPE
  for (const type of types) {
    if (type.name.startsWith("_")) continue;
    let type_md = `---
title: ${type.name}
parent: /types
`;

    if (type.jsDoc?.doc) {
      type_md += `metas:
  description: ${type.jsDoc.doc.trim().split("\n")[0]}
`;
    }
    type_md += `---\n\n`;

    if (type.jsDoc?.doc) {
      type_md += type.jsDoc.doc.replaceAll("\n\n```", "\n\n```ts");
      type_md += "\n\n";
    }

    //
    if (type.kind == "interface") {
      type_md += "### Properties\n\n";
      type_md += renderToString(
        <Properties getLink={getLink}>
          {type.interfaceDef.properties}
        </Properties>,
      );
      type_md += "\n\n";
    } else {
      type_md += renderToString(
        <TypeAlias getLink={getLink}>{type.typeAliasDef}</TypeAlias>,
      );
      type_md += "\n\n";
    }

    Deno.writeTextFileSync(
      `src${version}/types/${type.name.toLowerCase()}.md`,
      type_md,
    ); //
  }
} // TYPE
