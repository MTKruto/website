---
title: UpdateCallbackQuery
parent: /types
metas:
  description: A callback query was made (a user presses an inline button). Bot-only.
---

A callback query was made (a user presses an inline button). Bot-only.

```ts
client.on("callbackQuery", async (ctx) => {
  await ctx.answerCallbackQuery(ctx.update.callbackQuery.data, { isAlert: true });
});
```

### Properties



