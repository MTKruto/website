---
title: setMemberListVisibility
---

Hide or show the member list of a group to non-admins. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a group.

</div></div></div><div><div class="font-mono" id="p_visible" data-anchor><span class="font-bold">visible</span><span class="opacity-50">:</span> <span>boolean</span></div><div class="pl-3"><div class="no-margin">

Whether the member list of the group should be visible.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.setMemberListVisibility(chatId, visible);
```



