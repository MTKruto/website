---
title: startBot
---

Start a bot. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_botId" data-anchor><span class="font-bold">botId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the bot to start.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_deeplink" data-anchor><span class="font-bold">deeplink</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A deeplink to follow.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/id"  >ID</a></div></div><div class="pl-3"><div class="no-margin">

If specified, the bot will be started in that chat instead of its own private chat.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/message"  >Message</a></div><div class="pl-3"><div class="no-margin">

The start message.

</div></div>

### Syntax

```ts
// Required parameters only.
await client.startBot(botId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.startBot(botId, { deeplink, chatId });
```



