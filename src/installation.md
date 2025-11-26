---
title: Installation
parent: /#walkthrough
next: /starting-the-client
---

## Bun & Node.js

In server-side projects running on Bun or Node.js, the `@mtkruto/node` package can be used.

{{ "@mtkruto/node" |> install }}

## Deno & Web

1. If you develop for Deno or develop in Deno, install MTKruto using the following command.

```shell
deno add jsr:@mtkruto/mtkruto
```

2. If your project is developed using Node.js with a framework like (Next.js, SvelteKit, etc.) or a bundler (Parcel, Vite, etc.), install MTKruto using one of the following commands

{{ "jsr:@mtkruto/mtkruto" |> install }}

3. You can also import it directly from a CDN into your HTML file.

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
