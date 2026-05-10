---
title: UpdateGuestQuery
parent: /types
metas:
  description: A guest query was received.
---

A guest query was received.

```ts
client.on("guestQuery", (ctx) => {
  console.log("A guest query was just received.");
  // ctx.update.guestQuery
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;guestQuery&quot;</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_guestQuery" data-anchor="true"><span class="font-bold">guestQuery</span><span class="opacity-50">:</span> <a href="/types/guestquery">GuestQuery</a></div></div><div class="pl-3"><div class="no-margin">

The guest query.

</div></div></div></div>

