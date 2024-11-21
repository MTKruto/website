---
title: UpdateCallbackQuery
---

A callback query was made (a user presses an inline button). Bot-only.

```ts
client.on("callbackQuery", async (ctx) => {
  await ctx.answerCallbackQuery(ctx.callbackQuery.data, { alert: true });
});
```

### Properties



