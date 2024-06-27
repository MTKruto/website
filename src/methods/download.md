---
title: download
---

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono"><span class="font-bold">fileId</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of the file to download.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">chunkSize</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Size of each download chunk in bytes.

</div></div></div><div><div class="flex gap-2"><div class="font-mono"><span class="font-bold">offset</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

Download offset in bytes.

</div></div></div></div></div>

### Result 

<div class="font-mono"><span href="/">AsyncGenerator</span><span class="opacity-50">&lt;</span><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array" target="_blank" rel="noreferrer noopener">Uint8Array</a><span class="opacity-50">,</span> <span>void</span><span class="opacity-50">,</span> <span>unknown</span><span class="opacity-50">&gt;</span></div>

### Syntax

```ts
// Required parameters only.
await client.download(fileId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.download(fileId, { chunkSize, offset });
```

### Examples 

```ts
for await (const chunk of client.download(fileId, { chunkSize: 256 * 1024 })) {
  await outFile.write(chunk);
}
```

