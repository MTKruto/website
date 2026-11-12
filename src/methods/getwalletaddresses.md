---
title: getWalletAddresses
parent: /methods
metas:
  description: Get a user's wallet addresses. User-only.
---

Get a user's wallet addresses.<span class="select-none"> <span class="inline-flex w-fit items-center" style="fontSize:12;whiteSpace:nowrap;wordBreak:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;borderRadius:12;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_userId" data-anchor><span class="font-bold">userId</span><span class="opacity-50">:</span> <a href="/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the user.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/walletaddress"  >WalletAddress</a><span class="opacity-50">[]</span></div>

### Syntax

```ts
await client.getWalletAddresses(userId);
```



