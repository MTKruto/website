import {
  doc as doc_,
  DocNodeClass,
  DocNodeInterface,
  DocNodeNamespace,
  DocNodeTypeAlias,
  TsTypeDef,
} from "@deno/doc";
import versions from "./_versions.ts";

const mdnLinks: Record<string, string> = {
  "Uint8Array":
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array",
  "Promise":
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
  "ReadableStream":
    "https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream",
  "URL": "https://developer.mozilla.org/en-US/docs/Web/API/URL",
};

export class InvalidVersion extends Error {
}
export class UnsupportedVersion extends Error {
}
export type Docs = Awaited<ReturnType<typeof getDocs>>;
export async function getDocs(version?: string) {
  version ??= versions[0];
  if (!(versions.includes(version))) {
    throw new InvalidVersion(version);
  }

  const mod = await doc(
    version == "gh"
      ? "https://raw.githubusercontent.com/MTKruto/MTKruto/main/mod.ts"
      : `https://deno.land/x/mtkruto@${version}/mod.ts`,
  );
  const typeNodes = mod.filter((v) => v.location.filename.includes("/types/"));

  const errorNodes =
    mod.find((v): v is DocNodeNamespace =>
      v.kind == "namespace" && v.name == "errors"
    )?.namespaceDef.elements ?? [];

  const methodTypeNodes = mod.filter((v) =>
    v.location.filename.endsWith("/client/0_params.ts") ||
    v.location.filename.endsWith("/client/3_params.ts")
  );

  const allElements =
    mod.find((v): v is DocNodeNamespace =>
      v.kind == "namespace" && v.name == "enums"
    )?.namespaceDef.elements ?? [];
  for (const ns of allElements) {
    if (ns.kind == "namespace") {
      const prefix = ns.name + ".";
      for (const el of ns.namespaceDef.elements) {
        el.name = prefix + el.name;
        allElements.push(el);
      }
    }
  }

  const errors = errorNodes
    .filter((v): v is DocNodeClass => v.kind == "class")
    .sort((a, b) => a.name.localeCompare(b.name));

  const types = typeNodes
    .filter((v): v is DocNodeInterface | DocNodeTypeAlias =>
      v.kind == "interface" || v.kind == "typeAlias"
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const namespaces = typeNodes
    .filter((v): v is DocNodeNamespace => v.kind == "namespace");
  for (const ns of namespaces) {
    const to = ns.namespaceDef.elements.map((v) => v.name);
    for (const el of ns.namespaceDef.elements) {
      if (el.kind == "interface") {
        types.push({
          ...el,
          interfaceDef: {
            ...el.interfaceDef,
            extends: el.interfaceDef.extends.map((v) => {
              addPrefix(v, `${ns.name}.`, to);
              return v;
            }),
          },
          name: `${ns.name}.${el.name}`,
        });
      } else if (el.kind == "typeAlias") {
        addPrefix(el.typeAliasDef.tsType, `${ns.name}.`, to);
        types.push({
          ...el,
          name: `${ns.name}.${el.name}`,
        });
      }
    }
  }

  for (let i = 0; i < 2; ++i) {
    for (const type of types) {
      if (type.kind != "interface") {
        continue;
      }
      for (const e of type.interfaceDef.extends.reverse()) {
        const t = types.find((v) => v.name == e.repr);
        if (!t || t.kind != "interface") {
          continue;
        }
        type.interfaceDef.properties = t.interfaceDef.properties.map((v) =>
          type.interfaceDef.properties.some((v_) => v.name == v_.name)
            ? type.interfaceDef.properties.find((v_) => v.name == v_.name)!
            : v
        ).concat(
          type.interfaceDef.properties.filter((v) =>
            !t.interfaceDef.properties.some((v_) => v.name == v_.name)
          ),
        );
      }
    }
  }

  const Client = mod
    .find((v): v is DocNodeClass =>
      (v.kind == "class") && (v.name == "Client")
    );
  const names = new Set<string>();
  const methods = Client === undefined ? [] : Client.classDef.methods
    .filter((v) =>
      (v.accessibility === undefined) || (v.accessibility == "public")
    )
    .filter((v) =>
      v.jsDoc?.tags?.some((v) =>
        v.kind == "unsupported" && v.value.startsWith("@method")
      )
    )
    .filter((v) => !v.name.includes("["))
    .filter((v) => {
      try {
        return !names.has(v.name);
      } finally {
        names.add(v.name);
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const methodTypes = methodTypeNodes
    .filter((v): v is DocNodeInterface => v.kind == "interface");

  const getLink = (typeRef: string) => {
    const type = types.find((v) => v.name == typeRef);
    if (type !== undefined) {
      return `/${version == "gh" ? "gh/" : ""}types/${type.name.toLowerCase()}`;
    } else {
      return mdnLinks[typeRef] ?? null;
    }
  };

  return {
    version,
    types,
    methods,
    methodTypes,
    getLink,
    errors,
  };
}

function collectTypeDefs(td: TsTypeDef) {
  let o = new Array<TsTypeDef>();
  switch (td.kind) {
    case "keyword":
    case "literal":
      break;
    case "union":
      o = o.concat(td.union);
      break;
    case "intersection":
      o = o.concat(td.intersection);
      break;
    case "array":
      o.push(td.array);
      break;
    case "tuple":
      o = o.concat(td.tuple);
      break;
    case "typeOperator":
      o.push(td.typeOperator.tsType);
      break;
    case "parenthesized":
      o.push(td.parenthesized);
      break;
    case "rest":
      o.push(td.rest);
      break;
    case "optional":
      o.push(td.optional);
      break;
    case "typeQuery":
      //
      break;
    case "this":
      //
      break;
    case "fnOrConstructor":
      o.push(td.fnOrConstructor.tsType);
      o = o.concat(
        td.fnOrConstructor.typeParams
          .map((v) =>
            [v.constraint, v.default]
              .filter((v): v is NonNullable<typeof v> => v !== undefined)
          ).flat(),
      );
      break;
    case "conditional":
      o.push(td.conditionalType.checkType);
      o.push(td.conditionalType.extendsType);
      o.push(td.conditionalType.falseType);
      o.push(td.conditionalType.trueType);
      break;
    case "importType":
      o = o.concat(
        td.importType.typeParams
          ?.filter((v): v is NonNullable<typeof v> => v !== undefined) ?? [],
      );
      break;
    case "infer":
      if (td.infer.typeParam.default) {
        o.push(td.infer.typeParam.default);
      }
      if (td.infer.typeParam.constraint) {
        o.push(td.infer.typeParam.constraint);
      }
      break;
    case "indexedAccess":
      o.push(td.indexedAccess.indexType);
      o.push(td.indexedAccess.objType);
      break;
    case "mapped":
      if (td.mappedType.nameType) {
        o.push(td.mappedType.nameType);
      }
      if (td.mappedType.nameType) {
        o.push(td.mappedType.nameType);
      }
      if (td.mappedType.typeParam.constraint) {
        o.push(td.mappedType.typeParam.constraint);
      }
      if (td.mappedType.typeParam.constraint) {
        o.push(td.mappedType.typeParam.constraint);
      }
      break;
    case "typeLiteral":
      for (const p of td.typeLiteral.properties) {
        for (const a of p.params) {
          if (a.tsType) {
            o.push(a.tsType);
          }
        }
        if (p.tsType) {
          o.push(p.tsType);
        }
        for (const tp of p.typeParams) {
          if (tp.default) {
            o.push(tp.default);
          }
          if (tp.constraint) {
            o.push(tp.constraint);
          }
        }
      }
      break;
    case "typePredicate":
      if (td.typePredicate.type) {
        o.push(td.typePredicate.type);
      }
      break;
    case "typeRef":
      o.push(td);
      if (td.typeRef.typeParams) {
        o = o.concat(td.typeRef.typeParams);
      }
  }
  return o;
}

function addPrefix(td: TsTypeDef, prefix: string, to: string[]) {
  const typeDefs = collectTypeDefs(td);
  for (const td of typeDefs) {
    if (td.kind == "typeRef") {
      if (to.includes(td.repr)) {
        td.repr = prefix + td.repr;
      }
    } else {
      addPrefix(td, prefix, to);
    }
  }
}

async function doc(spec: string): ReturnType<typeof doc_> {
  const path = `./doc/${spec.replaceAll("/", "")}.json`;

  const GH_PREFIX = "https://raw.githubusercontent.com/MTKruto/MTKruto/main/";
  if (spec.startsWith(GH_PREFIX)) {
    try {
      const lastCommitId = await (await fetch(
        "https://api.github.com/repos/MTKruto/MTKruto/commits/main",
        { headers: { accept: "application/vnd.github.VERSION.sha" } },
      )).text();
      spec =
        `https://raw.githubusercontent.com/MTKruto/MTKruto/${lastCommitId.trim()}/` +
        spec.slice(GH_PREFIX.length);
    } catch (err) {
      console.log(err);
    }
  }

  if (!Deno.env.get("WRITE")) {
    try {
      return JSON.parse(await Deno.readTextFile(path));
    } catch {
      //
    }
    throw new UnsupportedVersion();
  }
  let doc: Awaited<ReturnType<typeof doc_>>;
  try {
    doc = await doc_(spec);
  } catch (err) {
    console.trace(err);
    if (err instanceof Error && err.message.includes("Module not found")) {
      throw new UnsupportedVersion();
    } else {
      throw err;
    }
  }
  Deno.writeTextFileSync(path, JSON.stringify(doc));
  return doc;
}
