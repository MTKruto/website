---
title: UpdateBusinessConnection
parent: /types
---

A business connection was added, modified, or removed.

```ts
client.on("businessConnection", (ctx) => {
  console.log("Business connection with", ctx.from.id, ctx.update.businessConnection.isEnabled ? "created" : "lost");
  console.log(ctx.update.businessConnection);
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_businessConnection" data-anchor="true"><span class="font-bold">businessConnection</span><span class="opacity-50">:</span> <a href="/types/businessconnection">BusinessConnection</a></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div></div></div>

