---
title: disallowBotToSetCustomEmojiStatus
parent: /methods
metas:
  description: Disallow a bot to set custom emoji status. User-only.
---

Disallow a bot to set custom emoji status.<span class="select-none"> <span class="inline-flex w-fit items-center" style="fontSize:12;whiteSpace:nowrap;wordBreak:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;borderRadius:12;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_botId" data-anchor><span class="font-bold">botId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The user identifier of the bot.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.disallowBotToSetCustomEmojiStatus(botId);
```



