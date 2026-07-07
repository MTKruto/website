---
title: joinChatByInviteLink
parent: /methods
metas:
  description: Join a chat using an invite link. User-only.
---

Join a chat using an invite link.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_inviteLink" data-anchor="true"><span class="font-bold">inviteLink</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The chat's invite link.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/chatjoinresult">ChatJoinResult</a></div>

### Syntax

```ts
await client.joinChatByInviteLink(inviteLink);
```



