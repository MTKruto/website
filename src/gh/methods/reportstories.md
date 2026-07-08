---
title: reportStories
parent: /methods
metas:
  description: Report multiple stories. User-only.
---

Report multiple stories.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat that posted the stories.

</div></div></div><div><div class="font-mono" id="p_storyIds" data-anchor="true"><span class="font-bold">storyIds</span><span class="opacity-50">:</span> <span>number</span><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The identifiers of the stories to report.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_option" data-anchor="true"><span class="font-bold">option</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The option of the report.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_text" data-anchor="true"><span class="font-bold">text</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The text of the report.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/storyreportresult">StoryReportResult</a></div>

### Syntax

```ts
// Required parameters only.
await client.reportStories(chatId, storyIds);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.reportStories(chatId, storyIds, { option, text });
```



