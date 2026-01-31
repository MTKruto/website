---
title: addReaction
parent: /methods
---

Make a reaction to a message.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat which the message belongs to.

</div></div></div><div><div class="font-mono" id="p_messageId" data-anchor="true"><span class="font-bold">messageId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the message to add the reaction to.

</div></div></div><div><div class="font-mono" id="p_reaction" data-anchor="true"><span class="font-bold">reaction</span><span class="opacity-50">:</span> <a href="/types/reaction">Reaction</a></div><div class="pl-3"><div class="no-margin">

The reaction to add.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_big" data-anchor="true"><span class="font-bold">big</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to make the new reaction more notable.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_addToRecents" data-anchor="true"><span class="font-bold">addToRecents</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to add the reaction to recent reactions.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.addReaction(chatId, messageId, reaction);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.addReaction(chatId, messageId, reaction, {
    big,
    addToRecents,
});
```



