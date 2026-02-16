---
title: download
parent: /methods
metas:
  description: Download a file. 
---

Download a file.<span class="select-none">  <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">CACHE [F]</span></span></span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_fileId" data-anchor="true"><span class="font-bold">fileId</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the file to download.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_chunkSize" data-anchor="true"><span class="font-bold">chunkSize</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Size of each download chunk in bytes.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_offset" data-anchor="true"><span class="font-bold">offset</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Download offset in bytes.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_signal" data-anchor="true"><span class="font-bold">signal</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">AbortSignal</span></div></div><div class="pl-3"><div class="no-margin">

Download abort signal.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span href="/">AsyncGenerator</span><span class="opacity-50">&lt;</span><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array" target="_blank" rel="noreferrer noopener">Uint8Array</a><span class="opacity-50">,</span> <span>void</span><span class="opacity-50">,</span> <span>unknown</span><span class="opacity-50">></span></div><div class="pl-3"><div class="no-margin">

A generator yielding the contents of the file.

</div></div>

### Syntax

```ts
// Required parameters only.
await client.download(fileId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.download(fileId, { chunkSize, offset, signal });
```

### Examples 

```ts
for await (const chunk of client.download(fileId, { chunkSize: 256 * 1024 })) {
  await outFile.write(chunk);
}
```

