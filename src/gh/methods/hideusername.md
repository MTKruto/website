---
title: hideUsername
---

Hide a username from the current account, a bot account, a supergroup, or a channel's profile. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono"><span class="font-bold">id</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

`"me"`, a bot ID, a supergroup ID, or a channel ID.

</div></div></div><div><div class="font-mono"><span class="font-bold">username</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The username to hide.

</div></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
await client.hideUsername(id, username);
```



