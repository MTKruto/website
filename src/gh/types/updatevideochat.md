---
title: UpdateVideoChat
---

A video chat was started, scheduled, or ended.

```ts
client.on("videoChat", (ctx) => {
  console.log("Video chat", ctx.videoChat.type);
  console.log(ctx.videoChat);
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">videoChat</span><span class="opacity-50">:</span> <a href="/gh/types/videochat"  >VideoChat</a></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div></div></div>

