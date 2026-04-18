---
title: createStickerSet
parent: /methods
metas:
  description: Create a sticker set.
---

Create a sticker set.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_name" data-anchor="true"><span class="font-bold">name</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The sticker set's name.

</div></div></div><div><div class="font-mono" id="p_slug" data-anchor="true"><span class="font-bold">slug</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The sticker set's slug.

</div></div></div><div><div class="font-mono" id="p_stickers" data-anchor="true"><span class="font-bold">stickers</span><span class="opacity-50">:</span> <a href="/gh/types/inputsticker">InputSticker</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The initial stickers of the set.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_isMask" data-anchor="true"><span class="font-bold">isMask</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether a mask sticker set should be created.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isCustomEmoji" data-anchor="true"><span class="font-bold">isCustomEmoji</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether a custom emoji set should be created.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_isAdaptive" data-anchor="true"><span class="font-bold">isAdaptive</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the items of the sticker set should be adaptive.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_thumbnail" data-anchor="true"><span class="font-bold">thumbnail</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/filesource">FileSource</a></div></div><div class="pl-3"><div class="no-margin">

An optional thumbnail to use for the sticker set.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_software" data-anchor="true"><span class="font-bold">software</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The name of the software used to create the sticker set.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_userId" data-anchor="true"><span class="font-bold">userId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/gh/types/id">ID</a></div></div><div class="pl-3"><div class="no-margin">

The identifier of the owner of the sticker set. Required for bots. Bot-only.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_fileName" data-anchor="true"><span class="font-bold">fileName</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The file name to assign if applicable.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_fileSize" data-anchor="true"><span class="font-bold">fileSize</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The file's size.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_mimeType" data-anchor="true"><span class="font-bold">mimeType</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The mime type to assign if applicable.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_chunkSize" data-anchor="true"><span class="font-bold">chunkSize</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Size of each upload chunk in bytes.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_signal" data-anchor="true"><span class="font-bold">signal</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">AbortSignal</span></div></div><div class="pl-3"><div class="no-margin">

Upload abort signal.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_progressId" data-anchor="true"><span class="font-bold">progressId</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

A progress ID retrieved from the method getProgressId. If specified, updates on the upload progress will be sent.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/stickerset">StickerSet</a></div>

### Syntax

```ts
// Required parameters only.
await client.createStickerSet(name, slug, stickers);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.createStickerSet(name, slug, stickers, {
    isMask,
    isCustomEmoji,
    isAdaptive,
    thumbnail,
    software,
    userId,
    fileName,
    fileSize,
    mimeType,
    chunkSize,
    signal,
    progressId,
});
```



