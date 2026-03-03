---
title: setChatMemberTag
parent: /methods
metas:
  description: Change the tag of a chat member.
---

Change the tag of a chat member.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat.

</div></div></div><div><div class="font-mono" id="p_userId" data-anchor="true"><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the user that is a member of the chat.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_tag" data-anchor="true"><span class="font-bold">tag</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The member's new tag. If not set, the member tag will be removed.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.setChatMemberTag(chatId, userId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.setChatMemberTag(chatId, userId, { tag });
```



