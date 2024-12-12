---
title: UpdateAuthorizationState
---

A client's authorization state was changed.

```ts
client.on("authorizationState", async (ctx) => {
  if (ctx.authorizationState.authorized) {
    const me = await ctx.client.getMe();
    console.log("The client is now authorized as", me.firstName);
  } else {
    console.log("The client is no longer authorized.")
  }
});
```

### Properties



