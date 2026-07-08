---
title: createChannel
parent: /methods
metas:
  description: Create a channel. User-only.
---

Create a channel.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_title" data-anchor="true"><span class="font-bold">title</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The title of the channel.

</div></div></div></div>

### Result 

<div class="font-mono"><span href="/">ChatPChannel</span></div><div class="pl-3"><div class="no-margin">

The created channel.

</div></div>

### Syntax

```ts
await client.createChannel(title);
```



