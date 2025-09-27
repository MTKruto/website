import $ from "@david/dax";
import versions from "./_versions.ts";
import { getDocs } from "./_docs.ts";

Deno.env.set("WRITE", "1");

const lastTag = await fetch("https://api.github.com/repos/MTKruto/MTKruto/tags")
  .then((v) => v.json()).then((v) => v[0].name);

let last = false;
if (!versions.includes(lastTag)) {
  const newVersions = [lastTag, ...versions];
  while (versions.pop()) {
    //
  }
  for (const version of newVersions) {
    versions.push(version);
  }
  last = true;
}

if (last) {
  await getDocs();
}
await getDocs("gh");
Deno.writeTextFileSync(
  "_versions.ts",
  `export default ${JSON.stringify(versions, null, 2)};\n`,
);
await $`deno fmt`;
await $`git add doc/*`;
if (last) {
  await $`git add _versions.ts`;
}
