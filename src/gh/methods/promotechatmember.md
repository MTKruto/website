---
title: promoteChatMember
parent: /methods
metas:
  description: Promote a chat member. 
---

Promote a chat member.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat.

</div></div></div><div><div class="font-mono" id="p_userId" data-anchor="true"><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the user to promote.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_isAnonymous" data-anchor="true"><span class="font-bold">isAnonymous</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the admininistrator's presence in the chat is hidden.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_canManageChat" data-anchor="true"><span class="font-bold">canManageChat</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and surpass slow mode.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_canDeleteMessages" data-anchor="true"><span class="font-bold">canDeleteMessages</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the administrator can delete messages of other users.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_canManageVideoChats" data-anchor="true"><span class="font-bold">canManageVideoChats</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the administrator can manage video chats.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_canRestrictMembers" data-anchor="true"><span class="font-bold">canRestrictMembers</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the administrator can restrict, ban or unban chat members.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_canPromoteMembers" data-anchor="true"><span class="font-bold">canPromoteMembers</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the administrator can promote regular members to admininistrators.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_canChangeInfo" data-anchor="true"><span class="font-bold">canChangeInfo</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the administrator can change the name of the chat, its photo, description and some other settings.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_canInviteUsers" data-anchor="true"><span class="font-bold">canInviteUsers</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the administrator can invite users to the chat.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_canPostMessages" data-anchor="true"><span class="font-bold">canPostMessages</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the administrator can make posts in the channel. Only available for channels.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_canEditMessages" data-anchor="true"><span class="font-bold">canEditMessages</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the administrator can pin posts and edit posts they didn't send. Only available for channels.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_canPinMessages" data-anchor="true"><span class="font-bold">canPinMessages</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the administrator can pin messages. Only available for groups and supergroups.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_canManageTopics" data-anchor="true"><span class="font-bold">canManageTopics</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the administrator can manage topics. Only available for supergroups.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_canPostStories" data-anchor="true"><span class="font-bold">canPostStories</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the administrator can post stories.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_canEditStories" data-anchor="true"><span class="font-bold">canEditStories</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the administrator can edit stories.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_canDeleteStories" data-anchor="true"><span class="font-bold">canDeleteStories</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the administrator can delete stories.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_canManageDirectMessages" data-anchor="true"><span class="font-bold">canManageDirectMessages</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the administrator manage direct messages.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_title" data-anchor="true"><span class="font-bold">title</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The custom title of the administrator.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.promoteChatMember(chatId, userId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.promoteChatMember(chatId, userId, {
    isAnonymous,
    canManageChat,
    canDeleteMessages,
    canManageVideoChats,
    canRestrictMembers,
    canPromoteMembers,
    canChangeInfo,
    canInviteUsers,
    canPostMessages,
    canEditMessages,
    canPinMessages,
    canManageTopics,
    canPostStories,
    canEditStories,
    canDeleteStories,
    canManageDirectMessages,
    title,
});
```



