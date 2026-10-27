---
title: UpdateGuestQuery
parent: /types
metas:
  description: A guest query was received.
---

A guest query was received.

```ts
client.on("guestQuery", (ctx) => {
  console.log("A guest query was just received.");
  // ctx.update.guestQuery
});
```

### Properties



