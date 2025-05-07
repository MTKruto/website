---
title: removeReaction
---

Undo a reaction made to a message.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat which the message belongs to.

</div></div></div><div><div class="font-mono" id="p_messageId" data-anchor><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the message which the reaction was made to.

</div></div></div><div><div class="font-mono" id="p_reaction" data-anchor><span class="font-bold">reaction</span><span class="opacity-50">:</span> <a href="/gh/types/reaction"  >Reaction</a></div><div class="pl-3"><div class="no-margin">

The reaction to remove.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.removeReaction(chatId, messageId, reaction);
```



