---
title: Message Drafts
parent: /#walkthrough
walkthrough:
  track: user
  order: 6
---

Users can save message drafts and clear all drafts.

## Saving a Draft

{{ "saveDraft" |> m }} accepts a chat identifier and the draft text.

```ts
await client.saveDraft(chatId, "Remember to send the report.");
```

An empty string clears the draft.

```ts
await client.saveDraft(chatId, "");
```

{{ "saveRichTextDraft" |> m }} lets you save a rich text draft.

## Clearing Drafts

To clear all message drafts, call {{ "clearDrafts" |> m }}.

```ts
await client.clearDrafts();
```
