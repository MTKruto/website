---
title: setMyCommands
---

Set the bot's commands in the given scope and/or language. Bot-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_commands" data-anchor><span class="font-bold">commands</span><span class="opacity-50">:</span> <a href="/gh/types/botcommand"  >BotCommand</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The commands to set.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_languageCode" data-anchor><span class="font-bold">languageCode</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A two-letter ISO 639-1 language code. If omitted, the command details will be updated for users having an unsupported language.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_scope" data-anchor><span class="font-bold">scope</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/botcommandscope"  >BotCommandScope</a></div></div><div class="pl-3"><div class="no-margin">

The scope in which the commands are available.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.setMyCommands(commands);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.setMyCommands(commands, { languageCode, scope });
```



