---
title: Splitting Code
parent: /#guides
---

Larger projects with clients that include a lot of handlers assigned might need
to split the handler codes into different files.

This can be done levaraging the `Composer` class.

Consider that your project's structure is:

```txt
handlers/
    start.ts
    hello.ts
main.ts
```

In each file that resides in handlers/ you could create and export an instance
of `Composer`:

File: handlers/start.ts

<code-group>

<code-group-item title="Deno">

```ts
import { Composer } from "{{ deno }}/mod.ts";

const composer = new Composer();

export default composer;

composer.command("start", async (ctx) => {
  await ctx.reply("Hey, you just started me!");
});
```

</code-group-item>

<code-group-item title="Node.js (CommonJS)">

```ts
const { Composer } = require("@mtkruto/node");

const composer = new Composer();

module.exports = composer;

composer.command("start", async (ctx) => {
  await ctx.reply("Hey, you just started me!");
});
```

</code-group-item>

<code-group-item title="Node.js (ECMAScript)">

```ts
import { Composer } from "@mtkruto/node";

const composer = new Composer();

export default composer;

composer.command("start", async (ctx) => {
  await ctx.reply("Hey, you just started me!");
});
```

</code-group-item>

</code-group>

File: handlers/hello.ts

<code-group>

<code-group-item title="Deno">

```ts
import { Composer } from "{{ deno }}/mod.ts";

const composer = new Composer();

export default composer;

composer.command("hello", async (ctx) => {
  await ctx.reply("Hello, world!");
});
```

</code-group-item>

<code-group-item title="Node.js (CommonJS)">

```ts
const { Composer } = require("@mtkruto/node");

const composer = new Composer();

module.exports = composer;

composer.command("hello", async (ctx) => {
  await ctx.reply("Hello, world!");
});
```

</code-group-item>

<code-group-item title="Node.js (ECMAScript)">

```ts
import { Composer } from "@mtkruto/node";

const composer = new Composer();

export default composer;

composer.command("hello", async (ctx) => {
  await ctx.reply("Hello, world!");
});
```

</code-group-item>

</code-group>

Then, you can assign their handlers to a client instance:

File: main.ts

<code-group>

<code-group-item title="Deno">

```ts
/* ... */
import start from "./handlers/start.ts";
import hello from "./handlers/hello.ts";

const client = new Client(/* ... */);

client.use(start);
client.use(hello);

/* ... */
```

</code-group-item>

<code-group-item title="Node.js (CommonJS)">

```ts
/* ... */
const start = require("./handlers/start");
const hello = require("./handlers/hello");

const client = new Client(/* ... */);

client.use(start);
client.use(hello);

/* ... */
```

</code-group-item>

<code-group-item title="Node.js (ECMAScript)">

```ts
/* ... */
import start from "./handlers/start";
import hello from "./handlers/hello";

const client = new Client(/* ... */);

client.use(start);
client.use(hello);

/* ... */
```

</code-group-item>

</code-group>

If you wanted to access the client instance inside the handlers for whatever
reason, it is available in the context object, so you can access it like
`ctx.client`.
