---
title: setMyCommands
parent: /methods
metas:
  description: Set the bot's commands in the given scope and/or language. Bot-only.
---

Set the bot's commands in the given scope and/or language.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">BOT-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_commands" data-anchor="true"><span class="font-bold">commands</span><span class="opacity-50">:</span> <a href="/gh/types/botcommand">BotCommand</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The commands to set.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.setMyCommands(commands);
```



