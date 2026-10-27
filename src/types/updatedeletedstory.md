---
title: UpdateDeletedStory
parent: /types
metas:
  description: A story was deleted.
---

A story was deleted.

```ts
client.on("deletedStory", (ctx) => {
  console.log("The story", ctx.update.deletedStory, "was deleted");
});
```

### Properties



