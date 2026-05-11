---
title: setManagedBotAccessSettings
parent: /methods
metas:
  description: Set the access settings of a managed bot. Bot-only.
---

Set the access settings of a managed bot.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">BOT-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_userId" data-anchor="true"><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the bot user.

</div></div></div><div><div class="font-mono" id="p_isAccessRestricted" data-anchor="true"><span class="font-bold">isAccessRestricted</span><span class="opacity-50">:</span> <span>boolean</span></div><div class="pl-3"><div class="no-margin">

Whether access is restricted to specific users.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_usersWithAccess" data-anchor="true"><span class="font-bold">usersWithAccess</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The identifiers of the users with access when access is restricted. The owner of the bot will always have access.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.setManagedBotAccessSettings(userId, isAccessRestricted);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.setManagedBotAccessSettings(userId, isAccessRestricted, { usersWithAccess });
```



