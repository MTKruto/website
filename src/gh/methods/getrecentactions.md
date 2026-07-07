---
title: getRecentActions
parent: /methods
metas:
  description: Get the recent actions of a channel or a supergroup. User-only.
---

Get the recent actions of a channel or a supergroup.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_admins" data-anchor="true"><span class="font-bold">admins</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/id">ID</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

A list of admin user identifiers. If specified, only events triggered by them will be returned.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_limit" data-anchor="true"><span class="font-bold">limit</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The maximum number of results to return.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_offsetId" data-anchor="true"><span class="font-bold">offsetId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

Offset event ID from a previous result.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isChatSettings" data-anchor="true"><span class="font-bold">isChatSettings</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to return recent actions related to chat settings.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isDelete" data-anchor="true"><span class="font-bold">isDelete</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to return recent actions related to message deletion.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isEdit" data-anchor="true"><span class="font-bold">isEdit</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to return recent actions related to message edits.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isForum" data-anchor="true"><span class="font-bold">isForum</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to return recent actions related to forum changes.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isInvite" data-anchor="true"><span class="font-bold">isInvite</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to return recent actions related to invitations.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isJoin" data-anchor="true"><span class="font-bold">isJoin</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to return recent actions related to joins.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isLeave" data-anchor="true"><span class="font-bold">isLeave</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to return recent actions related to leaves.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isMemberTag" data-anchor="true"><span class="font-bold">isMemberTag</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to return recent actions related to member tags.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isNewMessage" data-anchor="true"><span class="font-bold">isNewMessage</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to return recent actions related to new messages.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isPin" data-anchor="true"><span class="font-bold">isPin</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to return recent actions related to pinned messages.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isRestrict" data-anchor="true"><span class="font-bold">isRestrict</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to return recent actions related to member rights.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isVideoChat" data-anchor="true"><span class="font-bold">isVideoChat</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to return recent actions related to video chats.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/recentactionsentry">RecentActionsEntry</a><span class="opacity-50">[]</span></div>

### Syntax

```ts
// Required parameters only.
await client.getRecentActions(chatId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.getRecentActions(chatId, {
    admins,
    limit,
    offsetId,
    isChatSettings,
    isDelete,
    isEdit,
    isForum,
    isInvite,
    isJoin,
    isLeave,
    isMemberTag,
    isNewMessage,
    isPin,
    isRestrict,
    isVideoChat,
});
```



