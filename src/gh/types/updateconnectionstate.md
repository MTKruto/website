---
title: UpdateConnectionState
parent: /types
metas:
  description: A client's connection state was changed.
---

A client's connection state was changed.

```ts
client.on("connectionState", (ctx) => {
  console.log("The client's connection state is now:", ctx.update.connectionState);
});
```

### Properties



