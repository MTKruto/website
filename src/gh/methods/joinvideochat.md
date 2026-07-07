---
title: joinVideoChat
parent: /methods
metas:
  description: Join a video chat. User-only.
---

Join a video chat.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_id" data-anchor="true"><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.

</div></div></div><div><div class="font-mono" id="p_params_" data-anchor="true"><span class="font-bold">params_</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

WebRTC connection parameters.

</div></div></div></div>

### Result 

<div class="font-mono"><span>string</span></div><div class="pl-3"><div class="no-margin">

Parameters to be passed to the used WebRTC library.

</div></div>

### Syntax

```ts
await client.joinVideoChat(id, params_);
```



