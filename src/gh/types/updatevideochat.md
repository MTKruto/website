---
title: UpdateVideoChat
parent: /types
metas:
  description: A video chat was started, scheduled, or ended.
---

A video chat was started, scheduled, or ended.

```ts
client.on("videoChat", (ctx) => {
  console.log("Video chat", ctx.update.videoChat.type);
  console.log(ctx.update.videoChat);
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;videoChat&quot;</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_videoChat" data-anchor="true"><span class="font-bold">videoChat</span><span class="opacity-50">:</span> <a href="/gh/types/videochat">VideoChat</a></div></div></div></div>

