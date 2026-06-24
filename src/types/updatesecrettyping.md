---
title: UpdateSecretTyping
parent: /types
metas:
  description: The other participant of a secret chat is currently typing. User-only.
---

The other participant of a secret chat is currently typing. User-only.

```ts
client.on("secretTyping", (ctx) => {
  // ctx.update.secretTyping
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;secretTyping&quot;</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The identifier of the secret chat.

</div></div></div></div>

