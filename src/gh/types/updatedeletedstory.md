---
title: UpdateDeletedStory
---

A story was deleted.

```ts
client.on("deletedStory", (ctx) => {
  console.log("The story", ctx.deletedStory, "was deleted");
});
```

### Properties



