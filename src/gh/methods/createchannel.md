---
title: createChannel
parent: /methods
---

Create a channel.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_title" data-anchor="true"><span class="font-bold">title</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The title of the channel.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_description" data-anchor="true"><span class="font-bold">description</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The description of the channel that is to be created.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_messageTtl" data-anchor="true"><span class="font-bold">messageTtl</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Time to live of the messages of the channel that is to be created in seconds.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/chatpchannel">ChatPChannel</a></div><div class="pl-3"><div class="no-margin">

The created channel.

</div></div>

### Syntax

```ts
// Required parameters only.
await client.createChannel(title);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.createChannel(title, { description, messageTtl });
```



