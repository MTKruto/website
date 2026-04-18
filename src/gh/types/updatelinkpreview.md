---
title: UpdateLinkPreview
parent: /types
metas:
  description: A link preview was updated.
---

A link preview was updated.

```ts
client.on("linkPreview", (ctx) => {
  // ctx.update.linkPreview
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;linkPreview&quot;</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_linkPreview" data-anchor="true"><span class="font-bold">linkPreview</span><span class="opacity-50">:</span> <a href="/gh/types/linkpreview">LinkPreview</a></div></div><div class="pl-3"><div class="no-margin">

The new link preview.

</div></div></div></div>

