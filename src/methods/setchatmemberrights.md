---
title: setChatMemberRights
---

Set the rights of a chat member.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat. Must be a supergroup.

</div></div></div><div><div class="font-mono" id="p_memberId" data-anchor><span class="font-bold">memberId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a member.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_rights" data-anchor><span class="font-bold">rights</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/chatmemberrights"  >ChatMemberRights</a></div></div><div class="pl-3"><div class="no-margin">

The member's new rights. All fields default to `true` if the chat's default member rights allow. This means that this method is the same as unbanChatMember if this parameter is not provided or all of its fields are `true`.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_untilDate" data-anchor><span class="font-bold">untilDate</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">Date</span></div></div><div class="pl-3"><div class="no-margin">

A point in time within the future in which the restriction will be reverted.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.setChatMemberRights(chatId, memberId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.setChatMemberRights(chatId, memberId, { rights, untilDate });
```



