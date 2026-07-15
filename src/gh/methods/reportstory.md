---
title: reportStory
parent: /methods
metas:
  description: Report a single story. User-only.
---

Report a single story.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat that posted the story.

</div></div></div><div><div class="font-mono" id="p_storyId" data-anchor="true"><span class="font-bold">storyId</span><span class="opacity-50">:</span> <span>number</span></div><div class="pl-3"><div class="no-margin">

The identifier of the story to report.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_option" data-anchor="true"><span class="font-bold">option</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The option of the report.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_text" data-anchor="true"><span class="font-bold">text</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The text of the report.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/reportresult">ReportResult</a></div>

### Syntax

```ts
// Required parameters only.
await client.reportStory(chatId, storyId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.reportStory(chatId, storyId, { option, text });
```



