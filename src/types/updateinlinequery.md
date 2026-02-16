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

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_inlineQuery" data-anchor="true"><span class="font-bold">inlineQuery</span><span class="opacity-50">:</span> <a href="/types/inlinequery">InlineQuery</a></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div><div class="pl-3"><div class="no-margin">

The received inline query

</div></div></div></div>

