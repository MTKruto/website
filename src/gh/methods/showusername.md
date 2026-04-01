---
title: showUsername
parent: /methods
metas:
  description: Show a username in the current account, a bot account, a supergroup, or a channel's profile. User-only.
---

Show a username in the current account, a bot account, a supergroup, or a channel's profile.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_id" data-anchor="true"><span class="font-bold">id</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

`"me"`, a bot ID, a supergroup ID, or a channel ID.

</div></div></div><div><div class="font-mono" id="p_username" data-anchor="true"><span class="font-bold">username</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The username to show.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.showUsername(id, username);
```



