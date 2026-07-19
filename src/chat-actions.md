---
title: Chat Actions
parent: /#walkthrough
walkthrough:
  track: main
  order: 17
---

Clients can show actions such as typing or uploading while preparing a response.

## Showing an Action

Use {{ "sendChatAction" |> m }} before starting the work.

```ts
client.command("status", async (ctx) => {
  await ctx.sendChatAction({ type: "typing" });

  const status = await getStatus();
  await ctx.reply(status);
});
```

Chat actions remain visible for a short time. Send the action again if the work takes longer.

## Reporting Upload Progress

Upload actions can include a progress percentage.

```ts
await client.sendChatAction(chatId, {
  type: "uploadingDocument",
  progress: 50,
});
```

See {{ "ChatActionType" |> t }} for all available actions.

## Cancelling an Action

Send the `cancel` action when no response will follow.

```ts
await client.sendChatAction(chatId, { type: "cancel" });
```
