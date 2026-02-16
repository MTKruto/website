---
title: sendGift
parent: /methods
metas:
  description: Send a gift.
---

Send a gift.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a user or a channel to send the gift to.

</div></div></div><div><div class="font-mono" id="p_giftId" data-anchor="true"><span class="font-bold">giftId</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the gift to send.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_message" data-anchor="true"><span class="font-bold">message</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A message to send along with the gift.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_parseMode" data-anchor="true"><span class="font-bold">parseMode</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/parsemode">ParseMode</a></div></div><div class="pl-3"><div class="no-margin">

The parse mode to use for the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_entities" data-anchor="true"><span class="font-bold">entities</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/messageentity">MessageEntity</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The entities of the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_private" data-anchor="true"><span class="font-bold">private</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

If true, only the receiver of the gift will know the name of the sender.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_upgrade" data-anchor="true"><span class="font-bold">upgrade</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the gift should be upgraded before sending it.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.sendGift(chatId, giftId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.sendGift(chatId, giftId, {
    message,
    parseMode,
    entities,
    private,
    upgrade,
});
```



