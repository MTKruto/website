---
title: setSignaturesEnabled
parent: /methods
---

Enable or disable post signatures in a channel.<span class="select-none"> <span class="inline-flex w-fit items-center"><span class="w-fit bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the channel.

</div></div></div><div><div class="font-mono" id="p_enabled" data-anchor><span class="font-bold">enabled</span><span class="opacity-50">:</span> <span>boolean</span></div><div class="pl-3"><div class="no-margin">

Whether post signatures should be enabled in the channel.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_showAuthorProfile" data-anchor><span class="font-bold">showAuthorProfile</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether author profiles should be shown in posts.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.setSignaturesEnabled(chatId, enabled);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.setSignaturesEnabled(chatId, enabled, { showAuthorProfile });
```



