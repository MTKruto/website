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

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;botCommands&quot;</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_botCommands" data-anchor="true"><span class="font-bold">botCommands</span><span class="opacity-50">:</span> <a href="/types/botcommands">BotCommands</a></div></div><div class="pl-3"><div class="no-margin">

The new command list.

</div></div></div></div>

