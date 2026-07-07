---
title: UpdateUploadProgress
parent: /types
metas:
  description: An upload has progressed.
---

An upload has progressed.

```ts
client.on("uploadProgress", (ctx) => {
  // ctx.update.uploadProgress
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;uploadProgress&quot;</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_uploadProgress" data-anchor="true"><span class="font-bold">uploadProgress</span><span class="opacity-50">:</span> <span href="/">UploadProgress</span></div></div><div class="pl-3"><div class="no-margin">

The new progress of the upload.

</div></div></div></div>

