---
title: Message Drafts
parent: /#walkthrough
walkthrough:
  track: user
  order: 6
---

Users can save message drafts and clear all drafts.

## Saving a Draft

Use {{ "saveDraft" |> m }} with a chat's identifier and the draft text.

```ts
await client.saveDraft(chatId, "Remember to send the report.");
```

Pass an empty string to clear the draft.

```ts
await client.saveDraft(chatId, "");
```

Use {{ "saveRichTextDraft" |> m }} to save a rich text draft.

## Clearing Drafts

Use {{ "clearDrafts" |> m }} to clear all message drafts.

```ts
await client.clearDrafts();
```
