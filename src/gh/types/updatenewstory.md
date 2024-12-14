---
title: UpdateNewStory
---

A story was posted.

```ts
client.on("story", (ctx) => {
  console.log("title" in ctx.chat ? ctx.chat.title : ctx.chat.firstName, "posted a story");
  console.log(ctx.story);
});
```

### Properties



