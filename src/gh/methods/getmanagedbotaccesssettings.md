---
title: getManagedBotAccessSettings
parent: /methods
metas:
  description: Get the access settings of a managed bot. Bot-only.
---

Get the access settings of a managed bot.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">BOT-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_userId" data-anchor="true"><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the bot user.

</div></div></div></div>

### Result 

<div class="font-mono"><span href="/">BotAccessSettings</span></div>

### Syntax

```ts
await client.getManagedBotAccessSettings(userId);
```



