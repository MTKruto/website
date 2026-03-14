---
title: removeUserEmojiStatus
parent: /methods
metas:
  description: Remove the emoji status of a bot's user. Bot-only.
---

Remove the emoji status of a bot's user.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">BOT-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_userId" data-anchor="true"><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a user of the bot.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.removeUserEmojiStatus(userId);
```



