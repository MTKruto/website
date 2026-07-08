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

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/profilephotolist">ProfilePhotoList</a></div>

### Syntax

```ts
await client.getProfilePhotos(userId);
```



