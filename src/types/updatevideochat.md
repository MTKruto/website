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



