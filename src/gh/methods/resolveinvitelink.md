---
title: resolveInviteLink
parent: /methods
metas:
  description: Resolve an invite link. User-only.
---

Resolve an invite link.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_inviteLink" data-anchor="true"><span class="font-bold">inviteLink</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The invite link to resolve.

</div></div></div></div>

### Result 

<div class="font-mono"><span href="/">ChatP</span> <span class="opacity-50">|</span> <a href="/gh/types/resolvedinvitelink">ResolvedInviteLink</a></div>

### Syntax

```ts
await client.resolveInviteLink(inviteLink);
```



