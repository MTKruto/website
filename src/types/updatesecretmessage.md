---
title: UpdateSecretMessage
parent: /types
metas:
  description: A message was received from a secret chat. User-only.
---

A message was received from a secret chat. User-only.

```ts
client.on("secretMessage", (ctx) => {
  // ctx.update.secretMessage
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_type" data-anchor="true"><span class="font-bold">type</span><span class="opacity-50">:</span> <span>&quot;secretMessage&quot;</span></div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_secretMessage" data-anchor="true"><span class="font-bold">secretMessage</span><span class="opacity-50">:</span> <a href="/types/secretmessage">SecretMessage</a></div></div></div></div>

