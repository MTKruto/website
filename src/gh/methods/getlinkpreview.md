---
title: getLinkPreview
parent: /methods
metas:
  description: Get the link preview for a message that is about to be sent. User-only.
---

Get the link preview for a message that is about to be sent.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_text" data-anchor="true"><span class="font-bold">text</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The message's text.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/linkpreview">LinkPreview</a> <span class="opacity-50">|</span> <span>null</span></div>

### Syntax

```ts
await client.getLinkPreview(text);
```



