---
title: UpdateInlineQuery
parent: /types
metas:
  description: An inline query was received. Bot-only.
---

An inline query was received. Bot-only.

```ts
client.on("inlineQuery", (ctx) => {
  const { from, query } = ctx.update.inlineQuery;
  console.log("User", from.id, "sent an inline query:", query);
});
```

### Properties



