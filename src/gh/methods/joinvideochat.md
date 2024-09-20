---
title: joinVideoChat
---

Join a video chat. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono"><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.

</div></div></div><div><div class="font-mono"><span class="font-bold">params_</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

WebRTC connection parameters.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_joinAs" data-anchor><span class="font-bold">joinAs</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/id"  >ID</a></div></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to join the video chat on behalf of.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_inviteHash" data-anchor><span class="font-bold">inviteHash</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

Invite hash.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_audio" data-anchor><span class="font-bold">audio</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to enable audio. Enabled by default.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_video" data-anchor><span class="font-bold">video</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to enable video. Enabled by default.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>string</span></div>

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



