---
title: joinVideoChat
parent: /methods
---

Join a video chat.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_id" data-anchor="true"><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.

</div></div></div><div><div class="font-mono" id="p_params_" data-anchor="true"><span class="font-bold">params_</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

WebRTC connection parameters.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_joinAs" data-anchor="true"><span class="font-bold">joinAs</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/id">ID</a></div></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to join the video chat on behalf of.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_inviteHash" data-anchor="true"><span class="font-bold">inviteHash</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

Invite hash.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_audio" data-anchor="true"><span class="font-bold">audio</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to enable audio. Enabled by default.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_video" data-anchor="true"><span class="font-bold">video</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to enable video. Enabled by default.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>string</span></div><div class="pl-3"><div class="no-margin">

Parameters to be passed to the used WebRTC library.

</div></div>

### Syntax

```ts
// Required parameters only.
await client.joinVideoChat(id, params_);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.joinVideoChat(id, params_, {
    joinAs,
    inviteHash,
    audio,
    video,
});
```



