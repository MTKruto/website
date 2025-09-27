---
title: UpdatePollAnswer
parent: /types
---

A poll was answered.

```ts
client.on("pollAnswer", (ctx) => {
  console.log("A poll just got an answer.");
  // ctx.poll
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_pollAnswer" data-anchor><span class="font-bold">pollAnswer</span><span class="opacity-50">:</span> <a href="/gh/types/pollanswer"  >PollAnswer</a></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div><div class="pl-3"><div class="no-margin">

The poll answer.

</div></div></div></div>

