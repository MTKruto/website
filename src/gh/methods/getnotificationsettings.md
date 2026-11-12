---
title: getNotificationSettings
parent: /methods
metas:
  description: Get a chat's notification settings. User-only.
---

Get a chat's notification settings.<span class="select-none"> <span class="inline-flex w-fit items-center" style="fontSize:12;whiteSpace:nowrap;wordBreak:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;borderRadius:12;">USER-ONLY</span></span> </span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_chatId" data-anchor><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/gh/types/id"  >ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat.

</div></div></div></div>

### Result 

<div class="font-mono"><a href="/gh/types/notificationsettings"  >NotificationSettings</a></div>

### Syntax

```ts
await client.getNotificationSettings(chatId);
```



