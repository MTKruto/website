---
title: checkPassword
parent: /methods
---

Check whether a password entered by the user is the same as the account's one.<span class="select-none">  </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_password" data-anchor><span class="font-bold">password</span><span class="opacity-50">:</span> <span>string</span></div><div class="pl-3"><div class="no-margin">

The password to check

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/passwordcheckresult"  >PasswordCheckResult</a></div><div class="pl-3"><div class="no-margin">

The result of the check.

</div></div>

### Syntax

```ts
await client.checkPassword(password);
```



