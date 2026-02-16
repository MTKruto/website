---
title: getMyCommands
parent: /methods
metas:
  description: Get the bot's commands in the given scope and/or language. Bot-only.
---

Get the bot's commands in the given scope and/or language.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">BOT-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"></div>

### Result 

<div class="font-mono"><a href="/types/botcommand">BotCommand</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The current bot's commands in the specified language.

</div></div>

### Syntax

```ts
await client.getMyCommands();
```



