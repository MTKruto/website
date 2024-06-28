---
title: getVideoChat
---

Get a video chat. User-only.


### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono"><span class="font-bold">id</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/videochat"  >VideoChat</a></div>

### Syntax

```ts
await client.getVideoChat(id);
```



