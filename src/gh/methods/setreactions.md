---
title: setReactions
parent: /methods
metas:
  description: Change reactions made to a message.
---

Change reactions made to a message.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat which the message belongs to.

</div></div></div><div><div class="font-mono" id="p_messageId" data-anchor="true"><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the message to add the reaction to.

</div></div></div><div><div class="font-mono" id="p_reactions" data-anchor="true"><span class="font-bold">reactions</span><span class="opacity-50">:</span> <a href="/gh/types/reaction">Reaction</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The new reactions.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.setReactions(chatId, messageId, reactions);
```



