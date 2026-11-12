---
title: editSharedWidgetData
parent: /methods
metas:
  description: Edit a shared widget's data. Bot-only.
---

Edit a shared widget's data.<span class="select-none"> <span class="inline-flex w-fit items-center" style="fontSize:12;whiteSpace:nowrap;wordBreak:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;borderRadius:12;">BOT-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_widgetId" data-anchor><span class="font-bold">widgetId</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the shared widget.

</div></div></div><div><div class="font-mono" id="p_publicData" data-anchor><span class="font-bold">publicData</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The widget's new public data.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_cacheTime" data-anchor><span class="font-bold">cacheTime</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The TTL of cached data, in seconds.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.editSharedWidgetData(widgetId, publicData);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.editSharedWidgetData(widgetId, publicData, { cacheTime });
```



