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



