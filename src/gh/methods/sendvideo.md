---
title: sendVideo
---

Send a video.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The chat to send the video to.

</div></div></div><div><div class="font-mono" id="p_video" data-anchor><span class="font-bold">video</span><span class="opacity-50">:</span> <a href="/gh/types/filesource"  >FileSource</a></div><div class="pl-3"><div class="no-margin">

The video to send.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_duration" data-anchor><span class="font-bold">duration</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The duration of the video in seconds.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_width" data-anchor><span class="font-bold">width</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The width of the photo in pixels.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_height" data-anchor><span class="font-bold">height</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The height of the photo in pixels.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_supportsStreaming" data-anchor><span class="font-bold">supportsStreaming</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the video is suitable for streaming.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_selfDestruct" data-anchor><span class="font-bold">selfDestruct</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/selfdestructoption"  >SelfDestructOption</a></div></div><div class="pl-3"><div class="no-margin">

The video's self-destruct preference.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_caption" data-anchor><span class="font-bold">caption</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The caption to attach.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_captionEntities" data-anchor><span class="font-bold">captionEntities</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/messageentity"  >MessageEntity</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The caption's entities.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_parseMode" data-anchor><span class="font-bold">parseMode</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/parsemode"  >ParseMode</a></div></div><div class="pl-3"><div class="no-margin">

The parse mode to use for the caption. If not provided, the default parse mode will be used.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_thumbnail" data-anchor><span class="font-bold">thumbnail</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/filesource"  >FileSource</a></div></div><div class="pl-3"><div class="no-margin">

A thumbnail to assign. Cannot be a URL.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_hasSpoiler" data-anchor><span class="font-bold">hasSpoiler</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to mark the media as a spoiler.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_fileName" data-anchor><span class="font-bold">fileName</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The file name to assign if applicable.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_fileSize" data-anchor><span class="font-bold">fileSize</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The file's size.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_mimeType" data-anchor><span class="font-bold">mimeType</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The mime type to assign if applicable.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_chunkSize" data-anchor><span class="font-bold">chunkSize</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Size of each upload chunk in bytes.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_signal" data-anchor><span class="font-bold">signal</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">AbortSignal</span></div></div><div class="pl-3"><div class="no-margin">

Upload abort signal.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_disableNotification" data-anchor><span class="font-bold">disableNotification</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to send the message in a silent way without making a sound on the recipients' clients.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_protectContent" data-anchor><span class="font-bold">protectContent</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to protect the contents of the message from copying and forwarding.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_replyTo" data-anchor><span class="font-bold">replyTo</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/replyto"  >ReplyTo</a></div></div><div class="pl-3"><div class="no-margin">

Information on what the message is replying to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_messageThreadId" data-anchor><span class="font-bold">messageThreadId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a thread to send the message to.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_sendAs" data-anchor><span class="font-bold">sendAs</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/id"  >ID</a></div></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the message on behalf of. User-only.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_effectId" data-anchor><span class="font-bold">effectId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a message effect to be attached to the message.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_sendAt" data-anchor><span class="font-bold">sendAt</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">Date</span></div></div><div class="pl-3"><div class="no-margin">

If specified, the message will be scheduled to be sent at that date. User-only.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_businessConnectionId" data-anchor><span class="font-bold">businessConnectionId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of a business connection ID to perform the action on. Bot-only.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_paidBroadcast" data-anchor><span class="font-bold">paidBroadcast</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_starCount" data-anchor><span class="font-bold">starCount</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The amount of stars that will be required to unlock the media.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/messagevideo"  >MessageVideo</a></div>

### Syntax

```ts
// Required parameters only.
await client.sendVideo(chatId, video);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.sendVideo(chatId, video, {
    duration,
    width,
    height,
    supportsStreaming,
    selfDestruct,
    caption,
    captionEntities,
    parseMode,
    thumbnail,
    hasSpoiler,
    fileName,
    fileSize,
    mimeType,
    chunkSize,
    signal,
    disableNotification,
    protectContent,
    replyTo,
    messageThreadId,
    sendAs,
    effectId,
    sendAt,
    businessConnectionId,
    paidBroadcast,
    starCount,
});
```



