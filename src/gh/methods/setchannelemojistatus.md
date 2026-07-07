---
title: setChannelEmojiStatus
parent: /methods
metas:
  description: Set the emoji status of a channel. User-only.
---

Set the emoji status of a channel.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a channel.

</div></div></div><div><div class="font-mono" id="p_emojiStatus" data-anchor="true"><span class="font-bold">emojiStatus</span><span class="opacity-50">:</span> <a href="/gh/types/inputemojistatus">InputEmojiStatus</a></div><div class="pl-3"><div class="no-margin">

The emoji or gift to set as the new emoji status.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.setChannelEmojiStatus(chatId, emojiStatus);
```



