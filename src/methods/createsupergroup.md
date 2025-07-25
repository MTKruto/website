---
title: createSupergroup
---

Create a supergroup.<span class="select-none"> <span class="inline-flex w-fit items-center"><span class="w-fit bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_title" data-anchor><span class="font-bold">title</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The title of the supergroup.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_description" data-anchor><span class="font-bold">description</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The description of the supergroup that is to be created.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_forum" data-anchor><span class="font-bold">forum</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether a forum should be created.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_messageTtl" data-anchor><span class="font-bold">messageTtl</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Time to live of the messages of the supergroup that is to be created in seconds.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/chatpsupergroup"  >ChatPSupergroup</a></div><div class="pl-3"><div class="no-margin">

The created supergroup.

</div></div>

### Syntax

```ts
// Required parameters only.
await client.createSupergroup(title);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.createSupergroup(title, { description, forum, messageTtl });
```



