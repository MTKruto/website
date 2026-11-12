---
title: getMyName
parent: /methods
metas:
  description: Get the bot's name in the given language. Bot-only.
---

Get the bot's name in the given language.<span class="select-none"> <span class="inline-flex w-fit items-center" style="fontSize:12;whiteSpace:nowrap;wordBreak:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;borderRadius:12;">BOT-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_languageCode" data-anchor><span class="font-bold">languageCode</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div></div></div></div>

### Result 

<div class="font-mono"><span>string</span></div><div class="pl-3"><div class="no-margin">

The current bot's name in the specified language.

</div></div>

### Syntax

```ts
// Optional parameters.
// Any of the optional parameters can be omitted.
await client.getMyName( { languageCode });
```



