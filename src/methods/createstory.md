---
title: createStory
parent: /methods
---

Create a story.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div></div><div><div class="font-mono" id="p_content" data-anchor="true"><span class="font-bold">content</span><span class="opacity-50">:</span> <a href="/types/inputstorycontent">InputStoryContent</a></div><div class="pl-3"><div class="no-margin">

The content of the story.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_interactiveAreas" data-anchor="true"><span class="font-bold">interactiveAreas</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/storyinteractivearea">StoryInteractiveArea</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The story's interactive areas.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_privacy" data-anchor="true"><span class="font-bold">privacy</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/storyprivacy">StoryPrivacy</a></div></div><div class="pl-3"><div class="no-margin">

The story's privacy settings.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_activeFor" data-anchor="true"><span class="font-bold">activeFor</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The period in which the story will be active.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_highlight" data-anchor="true"><span class="font-bold">highlight</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to add the story to highlights.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_protectContent" data-anchor="true"><span class="font-bold">protectContent</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to protect the contents of the story from copying and forwarding.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_caption" data-anchor="true"><span class="font-bold">caption</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The caption to attach.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_captionEntities" data-anchor="true"><span class="font-bold">captionEntities</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/messageentity">MessageEntity</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The caption's entities.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_parseMode" data-anchor="true"><span class="font-bold">parseMode</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/parsemode">ParseMode</a></div></div><div class="pl-3"><div class="no-margin">

The parse mode to use for the caption. if omitted, the default parse mode will be used.

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

<div class="font-mono"><a href="/types/story">Story</a></div><div class="pl-3"><div class="no-margin">

The created story.

</div></div>

### Syntax

```ts
// Required parameters only.
await client.createStory(chatId, content);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.createStory(chatId, content, {
    interactiveAreas,
    privacy,
    activeFor,
    highlight,
    protectContent,
    caption,
    captionEntities,
    parseMode,
    fileName,
    fileSize,
    mimeType,
    chunkSize,
    signal,
    progressId,
});
```



