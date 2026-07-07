---
title: removeProfilePhoto
parent: /methods
metas:
  description: Remove the profile video of the current user or a bot managed by the current user.
---

Remove the profile video of the current user or a bot managed by the current user.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_botId" data-anchor="true"><span class="font-bold">botId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/id">ID</a></div></div><div class="pl-3"><div class="no-margin">

The identifier of a bot managed by the current user. If specified, the profile photo of the bot will be removed. User-only.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Optional parameters.
// Any of the optional parameters can be omitted.
await client.removeProfilePhoto( { botId });
```



