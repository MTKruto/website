---
title: start
parent: /methods
metas:
  description: Start the client. Same as calling {@link Client.connect} followed by {@link Client.signIn}.
---

Start the client. Same as calling {@link Client.connect} followed by {@link Client.signIn}.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_params" data-anchor="true"><span class="font-bold">params</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">SignInParams</span></div></div></div>

### Result 

<div class="font-mono"><span>void</span></div>

### Syntax

```ts
// Without the optional parameter.
await client.start();

// With the optional parameter.
await client.start(params);
```



