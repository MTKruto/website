---
title: answerCallbackQuery
parent: /methods
metas:
  description: Answer a callback query. Bot-only. 
---

Answer a callback query.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">BOT-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_id" data-anchor="true"><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

ID of the callback query to answer.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_text" data-anchor="true"><span class="font-bold">text</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A text to be shown to the user.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_alert" data-anchor="true"><span class="font-bold">alert</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to show the text as an alert (popup).

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_url" data-anchor="true"><span class="font-bold">url</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A URL to be opened.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_cacheTime" data-anchor="true"><span class="font-bold">cacheTime</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

TTL of answer caches in seconds.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.answerCallbackQuery(id);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.answerCallbackQuery(id, {
    text,
    alert,
    url,
    cacheTime,
});
```



