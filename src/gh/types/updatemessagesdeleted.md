---
title: UpdateMessagesDeleted
---

One or more messages were deleted.

```ts
client.on("deletedMessages", (ctx) => {
  for (const deletedMessage of ctx.deletedMessages) {
    console.log(deletedMessage);
  }
});
```

### Properties



