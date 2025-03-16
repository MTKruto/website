---
title: resolveMessageLink
---

Retrieve a message using its link.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_link" data-anchor><span class="font-bold">link</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

A message link.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/message"  >Message</a> <span class="opacity-50">|</span> <span>null</span></div><div class="pl-3"><div class="no-margin">

The message that was linked to.

</div></div>

### Syntax

```ts
await client.resolveMessageLink(link);
```

### Examples 

```ts
const message = await client.resolveMessageLink("https://t.me/MTKruto/212");
```

