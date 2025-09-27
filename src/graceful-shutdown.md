---
title: Graceful Shutdown
parent: /#guides
---

If you're running MTKruto with a **persistent storage** outside browsers where
you can control the behavior of `SIGINT`, it is recommended that you disconnect
the client before the process exits. This way, you'll make sure that important
cache that can later improve the performance of your app is persisted.

Here's how it can be done.

<code-group>

<code-group-item title="Deno">

```ts
Deno.addSignalListener("SIGINT", async () => {
  await client.disconnect();
  Deno.exit(0);
});
```

</code-group-item>

<code-group-item title="Node.js">

```ts
process.on("SIGINT", async () => {
  await client.disconnect();
  process.exit();
});
```

</code-group-item>

</code-group>

## How to Know If You Need This

If you don't have the client parameter
[`persistCache`](https://jsr.io/@mtkruto/mtkruto/doc/~/ClientParams.persistCache)
set to `true`, which is `false` by default, you don't have to worry about
graceful shutdowns at all.

If you use the
[memory storage adapter](http://localhost:3000/storage-adapters/#memory), you
don't need this regardless of what you set `persistCache` to.
