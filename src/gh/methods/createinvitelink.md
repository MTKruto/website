---
title: createInviteLink
parent: /methods
metas:
  description: Create an invite link.
---

Create an invite link.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to create the invite link for.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/invitelink">InviteLink</a></div><div class="pl-3"><div class="no-margin">

The newly created invite link.

</div></div>

### Syntax

```ts
await client.createInviteLink(chatId);
```



