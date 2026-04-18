---
title: UpdatePoll
parent: /types
metas:
  description: A poll was updated.
---

A poll was updated.

```ts
client.on("poll", (ctx) => {
  console.log("A poll just changed.");
  // ctx.update.poll
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;poll&quot;</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_poll" data-anchor="true"><span class="font-bold">poll</span><span class="opacity-50">:</span> <a href="/types/poll">Poll</a></div></div><div class="pl-3"><div class="no-margin">

The poll with its new state.

</div></div></div></div>

