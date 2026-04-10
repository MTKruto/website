---
title: UpdatePollAnswer
parent: /types
metas:
  description: A poll was answered.
---

A poll was answered.

```ts
client.on("pollAnswer", (ctx) => {
  console.log("A poll just got an answer.");
  // ctx.update.poll
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;pollAnswer&quot;</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_pollAnswer" data-anchor="true"><span class="font-bold">pollAnswer</span><span class="opacity-50">:</span> <a href="/gh/types/pollanswer">PollAnswer</a></div></div><div class="pl-3"><div class="no-margin">

The poll answer.

</div></div></div></div>

