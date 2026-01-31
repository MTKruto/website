---
title: InputMediaAnimation
parent: /types
---

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_fileName" data-anchor="true"><span class="font-bold">fileName</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The file name to assign if applicable.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_mimeType" data-anchor="true"><span class="font-bold">mimeType</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The mime type to assign if applicable.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_chunkSize" data-anchor="true"><span class="font-bold">chunkSize</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Size of each upload chunk in bytes.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_signal" data-anchor="true"><span class="font-bold">signal</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">AbortSignal</span></div></div><div class="pl-3"><div class="no-margin">

Upload abort signal.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_caption" data-anchor="true"><span class="font-bold">caption</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The caption of the media.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_captionEntities" data-anchor="true"><span class="font-bold">captionEntities</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/messageentity">MessageEntity</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The entities of media's caption.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_parseMode" data-anchor="true"><span class="font-bold">parseMode</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/parsemode">ParseMode</a></div></div><div class="pl-3"><div class="no-margin">

Override the parse mode used for the media's caption.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_animation" data-anchor="true"><span class="font-bold">animation</span><span class="opacity-50">:</span> <a href="/types/filesource">FileSource</a></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div><div class="pl-3"><div class="no-margin">

The animation.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_thumbnail" data-anchor="true"><span class="font-bold">thumbnail</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/filesource">FileSource</a></div></div><div class="pl-3"><div class="no-margin">

A thumbnail to assign. Cannot be a URL.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_duration" data-anchor="true"><span class="font-bold">duration</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The duration of the animation in seconds.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_width" data-anchor="true"><span class="font-bold">width</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The width of the animation file.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_height" data-anchor="true"><span class="font-bold">height</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The height of the animation file.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_hasSpoiler" data-anchor="true"><span class="font-bold">hasSpoiler</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to mark the media as a spoiler.

</div></div></div></div>

