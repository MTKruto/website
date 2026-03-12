---
title: getSimilarBots
parent: /methods
metas:
  description: Get similar bots. User-only.
---

Get similar bots.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a bot to get similar bots for.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/chatpprivate">ChatPPrivate</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

A list of similar bots.

</div></div>

### Syntax

```ts
await client.getSimilarBots(chatId);
```



