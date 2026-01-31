---
title: setMemberListVisibility
parent: /methods
---

Hide or show the member list of a group to non-admins.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the group.

</div></div></div><div><div class="font-mono" id="p_visible" data-anchor="true"><span class="font-bold">visible</span><span class="opacity-50">:</span> <span>boolean</span></div><div class="pl-3"><div class="no-margin">

Whether the member list of the group should be visible.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.setMemberListVisibility(chatId, visible);
```



