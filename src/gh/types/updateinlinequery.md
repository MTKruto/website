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

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;inlineQuery&quot;</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_inlineQuery" data-anchor="true"><span class="font-bold">inlineQuery</span><span class="opacity-50">:</span> <a href="/gh/types/inlinequery">InlineQuery</a></div></div><div class="pl-3"><div class="no-margin">

The received inline query

</div></div></div></div>

