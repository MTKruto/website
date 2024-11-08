---
title: createGroup
---

Create a group. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_title" data-anchor><span class="font-bold">title</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The title of the group.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_users" data-anchor><span class="font-bold">users</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/id"  >ID</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

Users to invite after creating the group.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_messageTtl" data-anchor><span class="font-bold">messageTtl</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Time to live of the messages of the group that is to be created.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/chatpgroup"  >ChatPGroup</a></div>

### Syntax

```ts
// Required parameters only.
await client.createGroup(title);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.createGroup(title, { users, messageTtl });
```



