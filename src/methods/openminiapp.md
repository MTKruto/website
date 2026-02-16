---
title: openMiniApp
parent: /methods
metas:
  description: Open a mini app. User-only.
---

Open a mini app.<span class="select-none"> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">USER-ONLY</span></span> <span class="inline-flex w-fit items-center" style="font-size:12px;white-space:nowrap;word-break:keep-all;"><span class="w-fit bg-dbt select-none text-fgt" style="padding:2px 8px;border-radius:12px;">CACHE</span></span></span>

### Parameters 

<div class="flex flex-col gap-3"><div><div class="font-mono" id="p_botId" data-anchor="true"><span class="font-bold">botId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of a bot with the mini app.

</div></div></div><div><div class="font-mono" id="p_chatId" data-anchor="true"><span class="font-bold">chatId</span><span class="opacity-50">:</span> <a href="/types/id">ID</a></div><div class="pl-3"><div class="no-margin">

The identifier of the chat from which the mini app is opened.

</div></div></div><div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_mode" data-anchor="true"><span class="font-bold">mode</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/miniappmode">MiniAppMode</a></div></div><div class="pl-3"><div class="no-margin">

The mode to open the mini app in. Defaults to the default mode.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_url" data-anchor="true"><span class="font-bold">url</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The URL of the mini app to open.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_startParameter" data-anchor="true"><span class="font-bold">startParameter</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

The start parameter to pass to the mini app.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_themeParameters" data-anchor="true"><span class="font-bold">themeParameters</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>string</span></div></div><div class="pl-3"><div class="no-margin">

Theme parameters encoded in JSON.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_disableNotification" data-anchor="true"><span class="font-bold">disableNotification</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether messages relevant to the mini app session should be sent silently.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_sendAs" data-anchor="true"><span class="font-bold">sendAs</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/id">ID</a></div></div><div class="pl-3"><div class="no-margin">

The identifier of a chat to send relevant messages on behalf of.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_fromMenu" data-anchor="true"><span class="font-bold">fromMenu</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>boolean</span></div></div><div class="pl-3"><div class="no-margin">

Whether the mini app is being opened from the menu.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_replyTo" data-anchor="true"><span class="font-bold">replyTo</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/replyto">ReplyTo</a></div></div><div class="pl-3"><div class="no-margin">

Information on a message to which relevant messages should be replied to.

</div></div></div></div></div>

### Result 

<div class="font-mono"><a href="/types/miniappinfo">MiniAppInfo</a></div>

### Syntax

```ts
// Required parameters only.
await client.openMiniApp(botId, chatId);

// Required parameters + optional parameters.
// Any of the optional parameters can be omitted.
await client.openMiniApp(botId, chatId, {
    mode,
    url,
    startParameter,
    themeParameters,
    disableNotification,
    sendAs,
    fromMenu,
    replyTo,
});
```



