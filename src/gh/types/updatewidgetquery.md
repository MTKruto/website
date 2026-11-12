---
title: UpdateWidgetQuery
parent: /types
metas:
  description: A widget query was received. Bot-only.
---

A widget query was received. Bot-only.

```ts
client.on("widgetQuery", (ctx) => {
  // ctx.update.widgetQuery
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor><span class="font-bold">type</span><span class="opacity-50">:</span> <span>"widgetQuery"</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_widgetQuery" data-anchor><span class="font-bold">widgetQuery</span><span class="opacity-50">:</span> <a href="/gh/types/widgetquery"  >WidgetQuery</a></div></div><div class="pl-3"><div class="no-margin">

The received widget query.

</div></div></div></div>

