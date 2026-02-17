---
title: checkUsername
parent: /methods
metas:
  description: Check the availability of a username. User-only.
---

Check the availability of a username.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_username" data-anchor="true"><span class="font-bold">username</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The username to check.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div></div><div class="pl-3"><div class="no-margin">

The identifier of a supergroup or a channel. If specified, the username check will be made against it.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>boolean</span></div><div class="pl-3"><div class="no-margin">

Whether the username is available.

</div></div>

### Syntax

```ts
// Required parameters only.
await client.checkUsername(username);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.checkUsername(username, { chatId });
```



