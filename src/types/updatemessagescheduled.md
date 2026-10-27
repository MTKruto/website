---
title: UpdateMessageScheduled
parent: /types
metas:
  description: A message was scheduled. User-only.
---

A message was scheduled. User-only.

```ts
client.on("scheduledMessage", (ctx) => {
  console.log("A message was just scheduled.");
  // ctx.update.scheduledMessage
});
```

### Properties



