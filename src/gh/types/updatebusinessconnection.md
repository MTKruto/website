---
title: UpdateBusinessConnection
parent: /types
metas:
  description: A business connection was added, modified, or removed.
---

A business connection was added, modified, or removed.

```ts
client.on("businessConnection", (ctx) => {
  console.log("Business connection with", ctx.from.id, ctx.update.businessConnection.isEnabled ? "created" : "lost");
  console.log(ctx.update.businessConnection);
});
```

### Properties



