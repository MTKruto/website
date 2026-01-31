---
title: UpdatePoll
parent: /types
---

A poll was updated.

```ts
client.on("poll", (ctx) => {
  console.log("A poll just changed.");
  // ctx.update.poll
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_poll" data-anchor="true"><span class="font-bold">poll</span><span class="opacity-50">:</span> <a href="/types/poll">Poll</a></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div><div class="pl-3"><div class="no-margin">

The poll with its new state.

</div></div></div></div>

