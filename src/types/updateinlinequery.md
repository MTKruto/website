---
title: UpdateInlineQuery
---

An inline query was received. Bot-only.

```ts
client.on("inlineQuery", (ctx) => {
  const { from, query } = ctx.inlineQuery;
  console.log("User", from.id, "sent an inline query:", query);
});
```

### Properties



