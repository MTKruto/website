---
title: startBot
parent: /methods
metas:
  description: Start a bot. User-only.
---

Start a bot.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_botId" data-anchor="true"><span class="font-bold">botId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the bot to start.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/message">Message</a></div><div class="pl-3"><div class="no-margin">

The start message.

</div></div>

### Syntax

```ts
await client.startBot(botId);
```



