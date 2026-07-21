---
title: Checklists
parent: /#walkthrough
walkthrough:
  track: main
  order: 12
  sections:
    updating-a-checklist: user
---

Checklists let users track tasks in a chat. Pass a title and an array of {{ "InputChecklistItem" |> t }} objects to {{ "sendChecklist" |> m }}.

## Sending a Checklist

```ts
const message = await client.sendChecklist(chatId, "Release checklist", [
  { text: "Run the tests" },
  { text: "Update the documentation" },
  { text: "Publish the release" },
]);
```

Within an update handler, use `ctx.replyChecklist` to send a checklist to the current chat.

## Letting Others Update a Checklist

By default, only the creator can add or complete items. Set `isExtendableByOthers` and `isCompletableByOthers` to let other users do so.

```ts
await client.sendChecklist(chatId, "Trip planning", [
  { text: "Book accommodation" },
  { text: "Choose activities" },
], {
  isExtendableByOthers: true,
  isCompletableByOthers: true,
});
```

## Reading a Checklist

Checklist messages contain their title, items, and permissions in `message.checklist`.

```ts
client.on("message:checklist", (ctx) => {
  console.log(ctx.msg.checklist.title);

  for (const item of ctx.msg.checklist.items) {
    console.log(item.id, item.text, item.type);
  }
});
```

An item's `type` is either `"checked"` or `"unchecked"`. Checked items also include the user who completed them and the completion time.

## Updating a Checklist

Users can check and uncheck items by their identifiers.

With {{ "updateChecklist" |> m }}, you can replace a checklist's title and items.

```ts
const itemId = message.checklist.items[0].id;

await client.checkChecklistItem(chatId, message.id, itemId);
await client.uncheckChecklistItem(chatId, message.id, itemId);
```

{{ "checkChecklistItems" |> m }} and {{ "uncheckChecklistItems" |> m }} update multiple items. {{ "addToChecklist" |> m }} appends items.

```ts
await client.addToChecklist(chatId, message.id, [
  { text: "Announce the release" },
]);
```
