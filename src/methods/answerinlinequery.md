---
title: answerInlineQuery
parent: /methods
---

Answer an inline query.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">BOT-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_id" data-anchor="true"><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the inline query to answer.

</div></div></div><div><div class="font-mono" id="p_results" data-anchor="true"><span class="font-bold">results</span><span class="opacity-50">:</span> <a href="/types/inlinequeryresult">InlineQueryResult</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The results to answer with.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_cacheTime" data-anchor="true"><span class="font-bold">cacheTime</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

TTL of the caches of the results in seconds. Defaults to 300.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isPersonal" data-anchor="true"><span class="font-bold">isPersonal</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the result caches should only be for the user who made the inline query.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_nextOffset" data-anchor="true"><span class="font-bold">nextOffset</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A parameter to be passed to the same query next time when the user’s client asks for more results. Can’t be longer than 64 bytes.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isGallery" data-anchor="true"><span class="font-bold">isGallery</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_button" data-anchor="true"><span class="font-bold">button</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/inlinequeryresultbutton">InlineQueryResultButton</a></div></div><div class="pl-3"><div class="no-margin">

A button to be shown along with the results.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.answerInlineQuery(id, results);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.answerInlineQuery(id, results, {
    cacheTime,
    isPersonal,
    nextOffset,
    isGallery,
    button,
});
```



