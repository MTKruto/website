---
title: InputPageBlockVideo
parent: /types
metas:
  description: A video page block.
---

A video page block.

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_fileName" data-anchor="true"><span class="font-bold">fileName</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

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

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;video&quot;</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_video" data-anchor="true"><span class="font-bold">video</span><span class="opacity-50">:</span> <a href="/gh/types/filesource">FileSource</a></div></div><div class="pl-3"><div class="no-margin">

The video.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_caption" data-anchor="true"><span class="font-bold">caption</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/inputpageblockcaption">InputPageBlockCaption</a></div></div><div class="pl-3"><div class="no-margin">

The video's caption.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isSpoiler" data-anchor="true"><span class="font-bold">isSpoiler</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the video is a spoiler.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isLoop" data-anchor="true"><span class="font-bold">isLoop</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the video is played in loop.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isAutoplay" data-anchor="true"><span class="font-bold">isAutoplay</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the video is automatically played.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_linkPreviewId" data-anchor="true"><span class="font-bold">linkPreviewId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_width" data-anchor="true"><span class="font-bold">width</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The width of the video.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_height" data-anchor="true"><span class="font-bold">height</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The height of the video.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_duration" data-anchor="true"><span class="font-bold">duration</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The duration of the video.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isStreamingSupported" data-anchor="true"><span class="font-bold">isStreamingSupported</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether streaming is suppported.

</div></div></div></div>

