---
title: UpdateBotCommands
parent: /types
metas:
  description: A bot's list of commands changed. User-only.
---

A bot's list of commands changed. User-only.

```ts
client.on("botCommands", (ctx) => {
  // ctx.update.botCommands
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_botCommands" data-anchor="true"><span class="font-bold">botCommands</span><span class="opacity-50">:</span> <a href="/types/botcommands">BotCommands</a></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div><div class="pl-3"><div class="no-margin">

The new command list.

</div></div></div></div>

