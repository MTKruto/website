---
title: answerWidgetQuery
parent: /methods
metas:
  description: Answer a widget query. Bot-only.
---

Answer a widget query.<span class="select-none"> <span class="inline-flex w-fit items-center" style="fontSize:12;whiteSpace:nowrap;wordBreak:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;borderRadius:12;">BOT-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_queryId" data-anchor><span class="font-bold">queryId</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the query to answer.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_data" data-anchor><span class="font-bold">data</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The query answer's data.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.answerWidgetQuery(queryId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.answerWidgetQuery(queryId, { data });
```



