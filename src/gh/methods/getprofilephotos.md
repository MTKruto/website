---
title: getProfilePhotos
parent: /methods
metas:
  description: Get the profile photos of a user.
---

Get the profile photos of a user.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_userId" data-anchor="true"><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a user.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_offset" data-anchor="true"><span class="font-bold">offset</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The number of results to skip.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_limit" data-anchor="true"><span class="font-bold">limit</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The maximum number of results to return.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/profilephotolist">ProfilePhotoList</a></div>

### Syntax

```ts
// Required parameters only.
await client.getProfilePhotos(userId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.getProfilePhotos(userId, { offset, limit });
```



