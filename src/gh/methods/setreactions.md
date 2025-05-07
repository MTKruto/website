---
title: setReactions
---

Change reactions made to a message.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat which the message belongs to.

</div></div></div><div><div class="font-mono" id="p_messageId" data-anchor><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the message to add the reaction to.

</div></div></div><div><div class="font-mono" id="p_reactions" data-anchor><span class="font-bold">reactions</span><span class="opacity-50">:</span> <a href="/gh/types/reaction"  >Reaction</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The new reactions.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_big" data-anchor><span class="font-bold">big</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to make the new reactions more notable.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_addToRecents" data-anchor><span class="font-bold">addToRecents</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to add the reaction to recent reactions.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.setReactions(chatId, messageId, reactions);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.setReactions(chatId, messageId, reactions, {
    big,
    addToRecents,
});
```



