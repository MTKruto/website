---
title: UpdateCallbackQuery
parent: /types
metas:
  description: A callback query was made (a user presses an inline button). Bot-only.
---

A callback query was made (a user presses an inline button). Bot-only.

```ts
client.on("callbackQuery", async (ctx) => {
  await ctx.answerCallbackQuery(ctx.update.callbackQuery.data, { alert: true });
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;callbackQuery&quot;</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_callbackQuery" data-anchor="true"><span class="font-bold">callbackQuery</span><span class="opacity-50">:</span> <a href="/gh/types/callbackquery">CallbackQuery</a></div></div><div class="pl-3"><div class="no-margin">

The received callback query

</div></div></div></div>

