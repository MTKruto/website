---
title: setCloseFriends
parent: /methods
metas:
  description: Set the list of close friends. User-only.
---

Set the list of close friends.<span class="select-none"> <span class="inline-flex w-fit items-center" style="fontSize:12;whiteSpace:nowrap;wordBreak:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;borderRadius:12;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_userIds" data-anchor><span class="font-bold">userIds</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The identifiers of users to set as close friends.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.setCloseFriends(userIds);
```



