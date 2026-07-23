---
title: UpdateManagedBot
parent: /types
metas:
  description: A managed bot was updated. Bot-only.
---

A managed bot was updated. Bot-only.

```ts
client.on("managedBot", (ctx) => {
  // ctx.update.managedBot
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;managedBot&quot;</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_user" data-anchor="true"><span class="font-bold">user</span><span class="opacity-50">:</span> <a href="/types/user">User</a></div></div><div class="pl-3"><div class="no-margin">

The owner of the managed bot.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_bot" data-anchor="true"><span class="font-bold">bot</span><span class="opacity-50">:</span> <a href="/types/user">User</a></div></div><div class="pl-3"><div class="no-margin">

The managed bot.

</div></div></div></div>

