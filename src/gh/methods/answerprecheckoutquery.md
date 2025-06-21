---
title: answerPreCheckoutQuery
---

Answer a pre-checkout query.<span class="select-none"> <span class="inline-flex w-fit items-center"><span class="w-fit bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">BOT-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_preCheckoutQueryId" data-anchor><span class="font-bold">preCheckoutQueryId</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the pre-checkout query.

</div></div></div><div><div class="font-mono" id="p_ok" data-anchor><span class="font-bold">ok</span><span class="opacity-50">:</span> <span>boolean</span></div><div class="pl-3"><div class="no-margin">

Whether the checkout is going to be processed.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_error" data-anchor><span class="font-bold">error</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.answerPreCheckoutQuery(preCheckoutQueryId, ok);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.answerPreCheckoutQuery(preCheckoutQueryId, ok, { error });
```



