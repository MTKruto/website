---
title: sendChecklist
parent: /methods
metas:
  description: Send a checklist. User-only.
---

Send a checklist.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the checklist to.

</div></div></div><div><div class="font-mono" id="p_title" data-anchor="true"><span class="font-bold">title</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The checklist's title.

</div></div></div><div><div class="font-mono" id="p_items" data-anchor="true"><span class="font-bold">items</span><span class="opacity-50">:</span> <a href="/types/inputchecklistitem">InputChecklistItem</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The checklist's items.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_titleEntities" data-anchor="true"><span class="font-bold">titleEntities</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/messageentity">MessageEntity</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The entities of the to-do list's title.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_titleParseMode" data-anchor="true"><span class="font-bold">titleParseMode</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/parsemode">ParseMode</a></div></div><div class="pl-3"><div class="no-margin">

The parse mode to use for the title. If omitted, the default parse mode will be used.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isExtendableByOthers" data-anchor="true"><span class="font-bold">isExtendableByOthers</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether users other than the creator of the to-do list can add more items.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isCompletableByOthers" data-anchor="true"><span class="font-bold">isCompletableByOthers</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether users other than the creator of the to-do-list can mark items as completed.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isSilent" data-anchor="true"><span class="font-bold">isSilent</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to send the message in a silent way without making a sound on the recipients' clients.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isContentProtected" data-anchor="true"><span class="font-bold">isContentProtected</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to protect the contents of the message from copying and forwarding.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_replyTo" data-anchor="true"><span class="font-bold">replyTo</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/replyto">ReplyTo</a></div></div><div class="pl-3"><div class="no-margin">

Information on what the message is replying to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_messageThreadId" data-anchor="true"><span class="font-bold">messageThreadId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a thread to send the message to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_sendAs" data-anchor="true"><span class="font-bold">sendAs</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/id">ID</a></div></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the message on behalf of. User-only.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_effectId" data-anchor="true"><span class="font-bold">effectId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a message effect to be attached to the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_sendAt" data-anchor="true"><span class="font-bold">sendAt</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

If specified, the message will be scheduled to be sent at that date. User-only.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_businessConnectionId" data-anchor="true"><span class="font-bold">businessConnectionId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a business connection to perform the action on. Bot-only.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isPaidBroadcast" data-anchor="true"><span class="font-bold">isPaidBroadcast</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the message is a broadcast that is going to be paid for. Bot-only.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/messagechecklist">MessageChecklist</a></div><div class="pl-3"><div class="no-margin">

The sent checklist.

</div></div>

### Syntax

```ts
// Required parameters only.
await client.sendChecklist(chatId, title, items);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.sendChecklist(chatId, title, items, {
    titleEntities,
    titleParseMode,
    isExtendableByOthers,
    isCompletableByOthers,
    isSilent,
    isContentProtected,
    replyTo,
    messageThreadId,
    sendAs,
    effectId,
    sendAt,
    businessConnectionId,
    isPaidBroadcast,
});
```



