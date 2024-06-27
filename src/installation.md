---
title: Installation
next: /starting-the-client
---

## Node.js

In server-side Node.js projects, the `@mtkruto/node` package can be used.

{{ "@mtkruto/node" |> install }}

It supports both ECMAScript and CommonJS.

## Deno

MTKruto is available on [deno.land/x](https://deno.land/x/mtkruto).

No setup is required, but here’s an import map entry for it in case you use one.

```json
"mtkruto/": "{{ deno }}/",
```

## Web

1. If your project is developed using Node.js with a framework like (Next.js,
   SvelteKit, etc.) or a bundler (Parcel, Vite, etc.), use the
   `@mtkruto/browser` package.

{{ "@mtkruto/browser" |> install }}

1. If your project is developed using Deno with a framework like Fresh or Ultra,
   it is the same case as [above](#deno).

2. You can also import it directly from a CDN into your HTML file.

```html
<!DOCTYPE html>
<html>
  <body>
    <script type="module">
      import { ... } from "{{ esm }}";
    </script>
  </body>
</html>
```

## Bun

The recommended way to use MTKruto with Bun is through
[JSR](https://jsr.io/@mtkruto/mtkruto).

```shell
bunx jsr add @mtkruto/mtkruto
```
