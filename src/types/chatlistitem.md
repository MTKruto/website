---
title: ChatListItem
parent: /types
metas:
  description: An item of a chat list.
---

An item of a chat list.

### Properties

<div class="flex flex-col gap-3"><div><div class="flex gap-2"><div class="font-mono p" id="p_folder" data-anchor="true"><span class="font-bold">folder</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <a href="/types/chatfolder">ChatFolder</a></div></div><div class="pl-3"><div class="no-margin">

A chat folder. If specified, the item is a chat folder.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_chat" data-anchor="true"><span class="font-bold">chat</span><span class="opacity-50">:</span> <a href="/types/chatp">ChatP</a></div></div><div class="pl-3"><div class="no-margin">

The item's chat.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_lastMessage" data-anchor="true"><span class="font-bold">lastMessage</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span href="/">Omit</span><span class="opacity-50">&lt;</span><a href="/types/message">Message</a><span class="opacity-50">,</span> <span>&quot;replyToMessage&quot;</span><span class="opacity-50">></span></div></div><div class="pl-3"><div class="no-margin">

The last message in the chat.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_unreadChatCount" data-anchor="true"><span class="font-bold">unreadChatCount</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The count of unread chats in the item.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_unreadMessageCount" data-anchor="true"><span class="font-bold">unreadMessageCount</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The count of unread messages in the item.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_unreadMutedChatCount" data-anchor="true"><span class="font-bold">unreadMutedChatCount</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The count of unread and muted chats.

</div></div></div><div><div class="flex gap-2"><div class="font-mono p" id="p_unreadMutedMessageCount" data-anchor="true"><span class="font-bold">unreadMutedMessageCount</span><span class="opacity-50"><span title="Optional" class="cursor-help">?</span>:</span> <span>number</span></div></div><div class="pl-3"><div class="no-margin">

The count of unread messages from muted chats in the item.

</div></div></div></div>

