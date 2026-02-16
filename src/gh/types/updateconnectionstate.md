---
title: UpdateConnectionState
parent: /types
metas:
  description: A client's connection state was changed.  ``` client.on("connectionState", (ctx) => {   console.log("The client's connection state is now:", ctx.update.connectionState); }); ```
---

A client's connection state was changed.

```ts
client.on("connectionState", (ctx) => {
  console.log("The client's connection state is now:", ctx.update.connectionState);
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_connectionState" data-anchor="true"><span class="font-bold">connectionState</span><span class="opacity-50">:</span> <a href="/gh/types/connectionstate">ConnectionState</a></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div><div class="pl-3"><div class="no-margin">

The client's new connection state

</div></div></div></div>

