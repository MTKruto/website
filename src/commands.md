---
title: Commands
parent: /#walkthrough
prev: /working-with-messages
next: /reactions
---

Command handlers can be registered through `.command()`.

```ts
client.command("start", async (ctx) => {
  await ctx.reply("Hey, you just used the start command!");
});
```

For bots, the default command prefix is `/`, so the above middleware gets triggered when it receives a message starting with the text "/start".

For user clients on the other hand, the default command prefix is `\` (backslash). So the message that triggers it is "\start".

## Custom Prefixes

Command prefixes can be configured when the the client is constructed:

```ts
const client = new Client({
  storage,
  apiId,
  apiHash,
  prefixes: ["!", "."],
});
```

The above will make commands accessible with the prefixes `!` and `.`.

Note that those options won't be synced with the composer that are to be installed on that client, so you have to specify them for composers separately:

```ts
const composer = new Composer();
composer.prefixes = ["!", "."];
```

Alternatively, you can also specify custom prefixes for specific handlers:

```ts
client.command({ name: "start", prefixes: ["!", "."] }, async (ctx) => {
  /* ... */
});
```

## Outgoing Messages

Note that the command handlers are getting triggered for user clients even if the corresponding message is not outgoing, so it might be better to do a quick check for commands that are not supposed to be used by other users:

```ts
client.command("start", async (ctx) => {
  if (!ctx.msg.out) {
    // Not sent by the current user.
    return;
  }
  await ctx.reply("Hey, you just used the start command!");
});
```
