---
title: setChatMemberTag
parent: /methods
metas:
  description: Change the tag of a chat member.
---

Change the tag of a chat member.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat.

</div></div></div><div><div class="font-mono" id="p_userId" data-anchor="true"><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the user that is a member of the chat.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.setChatMemberTag(chatId, userId);
```



