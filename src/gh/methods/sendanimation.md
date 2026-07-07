---
title: sendAnimation
parent: /methods
metas:
  description: Send an animation.
---

Send an animation.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send the animation to.

</div></div></div><div><div class="font-mono" id="p_animation" data-anchor="true"><span class="font-bold">animation</span><span class="opacity-50">:</span> <a href="/gh/types/filesource">FileSource</a></div><div class="pl-3"><div class="no-margin">

The animation to send.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/messageanimation">MessageAnimation</a></div><div class="pl-3"><div class="no-margin">

The sent animation.

</div></div>

### Syntax

```ts
await client.sendAnimation(chatId, animation);
```



