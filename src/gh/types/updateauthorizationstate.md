---
title: UpdateAuthorizationState
parent: /types
---

A client's authorization state was changed.

```ts
client.on("authorizationState", async (ctx) => {
  if (ctx.update.authorizationState.authorized) {
    const me = await ctx.client.getMe();
    console.log("The client is now authorized as", me.firstName);
  } else {
    console.log("The client is no longer authorized.")
  }
});
```

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_authorizationState" data-anchor="true"><span class="font-bold">authorizationState</span><span class="opacity-50">:</span> <a href="/gh/types/authorizationstate">AuthorizationState</a></div><div class="flex items-center"><div class="bg-dbt px-1.5 rounded-md select-none text-fgt text-[10px]">DISCRIMINATOR</div></div></div><div class="pl-3"><div class="no-margin">

The client's new authorization state

</div></div></div></div>

