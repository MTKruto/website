---
title: UpdateBusinessConnection
---

A business connection was added, modified, or removed.

```ts
client.on("businessConnection", (ctx) => {
  console.log("Business connection with", ctx.from.id, ctx.businessConnection.isEnabled ? "created" : "lost");
  console.log(ctx.businessConnection);
});
```

### Properties



