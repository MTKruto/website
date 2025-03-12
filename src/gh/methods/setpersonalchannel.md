---
title: setPersonalChannel
---

Set the personal channel of the current user. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/id"  >ID</a></div></div><div class="pl-3"><div class="no-margin">

New personal channel. If not set, personal channel will be removed.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Optional parameters.
// Any of the optional parameters can be omitted.
await client.setPersonalChannel( { chatId });
```



