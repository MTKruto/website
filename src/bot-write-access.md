---
title: Bot Write Access
parent: /#walkthrough
walkthrough:
  track: bot
  order: 16
---

Bots can detect when a user allows them to send messages.

## Handling Write Access

Handle `message:writeAccessAllowed` to receive the service message.

```ts
client.on("message:writeAccessAllowed", (ctx) => {
  const { miniAppName } = ctx.msg.writeAccessAllowed;

  console.log(
    miniAppName ? `Write access granted through ${miniAppName}` : "Write access granted",
  );
});
```

`miniAppName` is present when access was granted through a Mini App.
