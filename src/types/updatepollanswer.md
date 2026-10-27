---
title: UpdatePollAnswer
parent: /types
metas:
  description: A poll was answered.
---

A poll was answered.

```ts
client.on("pollAnswer", (ctx) => {
  console.log("A poll just got an answer.");
  // ctx.update.poll
});
```

### Properties



