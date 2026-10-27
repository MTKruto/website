---
title: UpdateMessagesDeleted
parent: /types
metas:
  description: One or more messages were deleted.
---

One or more messages were deleted.

```ts
client.on("deletedMessages", (ctx) => {
  for (const deletedMessage of ctx.update.deletedMessages) {
    console.log(deletedMessage);
  }
});
```

### Properties



