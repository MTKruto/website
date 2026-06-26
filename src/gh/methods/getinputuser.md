---
title: getInputUser
parent: /methods
metas:
  description: Get a user's inputUser. Useful when calling API functions directly.
---

Get a user's inputUser. Useful when calling API functions directly.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_id" data-anchor="true"><span class="font-bold">id</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the user.

</div></div></div></div>

### Result 

<div class="font-mono"><span href="/">Api.inputUserSelf</span> <span class="opacity-50">|</span> <span href="/">Api.inputUser</span> <span class="opacity-50">|</span> <span href="/">Api.inputUserFromMessage</span></div>

### Syntax

```ts
await client.getInputUser(id);
```



