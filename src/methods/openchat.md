---
title: openChat
parent: /methods
---

Open a chat.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to open.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_timeout" data-anchor><span class="font-bold">timeout</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

TTL of update differences for unpolled chats in seconds. Defaults to a value specified by Telegram.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.openChat(chatId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.openChat(chatId, { timeout });
```



