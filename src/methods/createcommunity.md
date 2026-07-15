---
title: createCommunity
parent: /methods
metas:
  description: Create a community. User-only.
---

Create a community.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_name" data-anchor="true"><span class="font-bold">name</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The name of the community.

</div></div></div><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to add to the community.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_description" data-anchor="true"><span class="font-bold">description</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The description of the community.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isHidden" data-anchor="true"><span class="font-bold">isHidden</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the chat should be hidden inside the community.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/community">Community</a></div>

### Syntax

```ts
// Required parameters only.
await client.createCommunity(name, chatId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.createCommunity(name, chatId, { description, isHidden });
```



