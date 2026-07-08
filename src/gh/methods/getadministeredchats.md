---
title: getAdministeredChats
parent: /methods
metas:
  description: Get administered chats. User-only.
---

Get administered chats.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_isForPersonalChannel" data-anchor="true"><span class="font-bold">isForPersonalChannel</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to return a list of channels suitable for setting as personal channel.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/chatp">ChatP</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

A list of administered chats.

</div></div>

### Syntax

```ts
// Optional parameters.
// Any of the optional parameters can be omitted.
await client.getAdministeredChats( { isForPersonalChannel });
```



