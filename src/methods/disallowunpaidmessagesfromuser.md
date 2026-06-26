---
title: disallowUnpaidMessagesFromUser
parent: /methods
metas:
  description: Disallow unpaid messages from a user. User-only.
---

Disallow unpaid messages from a user.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_userId" data-anchor="true"><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the user.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_parentChatId" data-anchor="true"><span class="font-bold">parentChatId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/id">ID</a></div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.disallowUnpaidMessagesFromUser(userId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.disallowUnpaidMessagesFromUser(userId, { parentChatId });
```



