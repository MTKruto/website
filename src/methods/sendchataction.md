---
title: sendChatAction
---

Send a chat action.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the chat action to.

</div></div></div><div><div class="font-mono" id="p_action" data-anchor><span class="font-bold">action</span><span class="opacity-50">:</span> <a href="/types/chataction"  >ChatAction</a></div><div class="pl-3"><div class="no-margin">

The chat action.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_messageThreadId" data-anchor><span class="font-bold">messageThreadId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.sendChatAction(chatId, action);
```



