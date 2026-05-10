---
title: answerGuestQuery
parent: /methods
metas:
  description: Answer a guest query. Bot-only.
---

Answer a guest query.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">BOT-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_id" data-anchor="true"><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the guest query to answer.

</div></div></div><div><div class="font-mono" id="p_result" data-anchor="true"><span class="font-bold">result</span><span class="opacity-50">:</span> <a href="/gh/types/inlinequeryresult">InlineQueryResult</a></div></div></div>

### Result 

<div class="font-mono"><span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the sent message.

</div></div>

### Syntax

```ts
await client.answerGuestQuery(id, result);
```



