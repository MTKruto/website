---
title: download
parent: /methods
metas:
  description: Download a file.
---

Download a file.

### Parameters 



### Result 



### Syntax



### Examples 

```ts
for await (const chunk of client.download(fileId, { chunkSize: 256 * 1024 })) {
  await outFile.write(chunk);
}
```

