---
title: UpdateCallbackQuery
---

A callback query was made (a user presses an inline button). Bot-only.

```
client.on("callbackQuery", async (ctx) => {
  await ctx.answerCallbackQuery(ctx.callbackQuery.data, { alert: true });
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">callbackQuery</span><span class="opacity-50">:</span> <a href="/types/callbackquery"  >CallbackQuery</a></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div><div class="pl-3"><div class="no-margin">

The received callback query

</div></div></div></div>
