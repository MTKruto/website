---
title: deleteContacts
---

Delete multiple contacts. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_userIds" data-anchor><span class="font-bold">userIds</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a><span class="opacity-50">[]</span></div><div class="pl-3"><div class="no-margin">

The identifiers of contacts to delete.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.deleteContacts(userIds);
```


