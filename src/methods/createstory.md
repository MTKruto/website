---
title: createStory
---

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div></div><div><div class="font-mono"><span class="font-bold">content</span><span class="opacity-50">:</span> <a href="/types/inputstorycontent"  >InputStoryContent</a></div><div class="pl-3"><div class="no-margin">

The content of the story.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">interactiveAreas</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/storyinteractivearea"  >StoryInteractiveArea</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The story's interactive areas.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">privacy</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/storyprivacy"  >StoryPrivacy</a></div></div><div class="pl-3"><div class="no-margin">

The story's privacy settings.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">activeFor</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The period in which the story will be active.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">highlight</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to add the story to highlights.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">protectContent</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether to protect the contents of the story from copying and forwarding.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">caption</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The caption to attach.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">captionEntities</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/messageentity"  >MessageEntity</a><span class="opacity-50">[]</span></div></div><div class="pl-3"><div class="no-margin">

The caption's entities.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">parseMode</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/parsemode"  >ParseMode</a></div></div><div class="pl-3"><div class="no-margin">

The parse mode to use for the caption. If not provided, the default parse mode will be used.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">fileName</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The file name to assign if applicable.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">mimeType</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The mime type to assign if applicable.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">chunkSize</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Size of each upload chunk in bytes.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">signal</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">AbortSignal</span> <span class="opacity-50">|</span> <span>null</span></div></div><div class="pl-3"><div class="no-margin">

Upload abort signal.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/story"  >Story</a></div>

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
    mimeType,
    chunkSize,
    signal,
});
```


