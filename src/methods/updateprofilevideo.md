---
title: updateProfileVideo
parent: /methods
metas:
  description: Update the profile video of the current user or a bot managed by the current user.
---

Update the profile video of the current user or a bot managed by the current user.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_video" data-anchor="true"><span class="font-bold">video</span><span class="opacity-50">:</span> <a href="/types/filesource">FileSource</a></div><div class="pl-3"><div class="no-margin">

The video to set as profile video.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_botId" data-anchor="true"><span class="font-bold">botId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/id">ID</a></div></div><div class="pl-3"><div class="no-margin">

The identifier of a bot managed by the current user. If specified, the profile video of the bot will be updated. User-only.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isPublic" data-anchor="true"><span class="font-bold">isPublic</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the video should be set as the fallback public profile photo. User-only.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_thumbnailTimestamp" data-anchor="true"><span class="font-bold">thumbnailTimestamp</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The timestamp in seconds to use as thumbnail.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_fileName" data-anchor="true"><span class="font-bold">fileName</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The file name to assign if applicable.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_fileSize" data-anchor="true"><span class="font-bold">fileSize</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The file's size.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_mimeType" data-anchor="true"><span class="font-bold">mimeType</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The MIME type to assign if applicable.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_chunkSize" data-anchor="true"><span class="font-bold">chunkSize</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Size of each upload chunk in bytes.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_signal" data-anchor="true"><span class="font-bold">signal</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">AbortSignal</span></div></div><div class="pl-3"><div class="no-margin">

Upload abort signal.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_progressId" data-anchor="true"><span class="font-bold">progressId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A progress ID retrieved from the method getProgressId. If specified, updates on the upload progress will be sent.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Required parameters only.
await client.updateProfileVideo(video);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.updateProfileVideo(video, {
    botId,
    isPublic,
    thumbnailTimestamp,
    fileName,
    fileSize,
    mimeType,
    chunkSize,
    signal,
    progressId,
});
```



