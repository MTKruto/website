---
title: Installation
parent: /#walkthrough
walkthrough:
  track: main
  order: 1
---

## Bun & Node.js

In server-side projects running on Bun or Node.js, the `@mtkruto/node` package can be used.

{{ "@mtkruto/node" |> install }}

## Deno & Web

1. If you develop for Deno or develop in Deno, install MTKruto using the following command.

```shell
deno add jsr:@mtkruto/mtkruto
```

2. If your Node.js project uses a framework (such as Next.js or SvelteKit) or a bundler (such as Parcel or Vite), install MTKruto using one of the following commands.

{{ "jsr:@mtkruto/mtkruto" |> install }}

As an alternative, you can also use `@mtkruto/browser` from npm:

{{ "@mtkruto/browser" |> install }}

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
