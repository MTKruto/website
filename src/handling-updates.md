---
title: Handling Updates
parent: /#walkthrough
walkthrough:
  track: main
  order: 4
  sections:
    callbackquery: bot
    inlinequery: bot
    choseninlineresult: bot
---

MTKruto uses an update middleware inspired by [grammY](https://grammy.dev/guide/filter-queries).

You can handle updates by assigning update handlers to the client. A handler is a function that takes two arguments: `ctx` and `next`.

`ctx` includes the received update at `ctx.update` and provides context-aware methods and shortcuts. See all types of updates [here](/types/Update).

`next` is a function that passes the update to the next handlers.

Once an update reaches a handler, it _won't_ reach others unless it calls `next`. When `next` is called, the same thing goes on again: the update won't reach the next handler until `next` is called, and so on.

The methods responsible for composing update handlers are:

- [use](#use)
- [branch](#branch)
- [filter](#filter)
- [on](#on)
- [command](#command)
- [callbackQuery](#callbackquery)
- [inlineQuery](#inlinequery)
- [chosenInlineResult](#choseninlineresult)
- [chatType](#chattype)

## use

[`use`](https://jsr.io/@mtkruto/mtkruto/doc/~/Composer.prototype.use) is the main method to assign a handler, and all others depend on it. It assigns an unconditional&nbsp;handler, meaning that it will always get called unless it is blocked by a handler preceding it.

```txt
|
use -------- handler
               |
              next
               |
               |
               |
               |
```

The following are some usage examples.

```ts
/** Logging */
client.use(async (ctx, next) => {
  console.log("I always get logged before an update is handled.");
  console.log("Update", ctx.toJSON(), "received at", Date.now());
  await next(); // move to the next handlers
});

/** Error handling */
client.use(async (_ctx, next) => {
  try {
    await next(); // call the next handlers
  } catch (err) {
    console.error("Failed to handle an update:");
    console.trace(err);
  }
});

/** Ignoring updates */
client.use(async (ctx, next) => {
  const message = ctx.msg;
  const date = message?.date;
  const isTooOld = date !== undefined && Date.now() - (date * 1_000) > 5 * 60 * 1_000;
  if (message !== undefined && isTooOld) {
    // message is older than 5 minutes, not interesting
    console.log(
      "Ignoring message",
      message.id,
      "in",
      message.chat.id,
      "because it is too old.",
    );
  } else {
    await next(); // handle it if newer than 5 minutes
  }
});

/** Performance monitoring */
client.use(async (_ctx, next) => {
  const then = performance.now();
  await next(); // call the next handlers
  const elapsed = performance.now() - then;
  console.log(`Update handled in ${Math.round(elapsed)}ms`);
});
```

## branch

[`branch`](https://jsr.io/@mtkruto/mtkruto/doc/~/Composer.prototype.branch) takes 3 functions:

1. One that checks for a specific condition.
2. A handler function that gets called when the specific condition is met, the true handler.
3. Another one that gets called when it is not met, the false handler.

```txt
|
branch -------- condition
                   |
              ------------
             |            |
           true        false
             |            |
          handler      handler
             |            |
           next        next
              \        /
               \      /
                \    /
                 \  /
                  \/
                  |
```

Here's an example.

```ts
client.branch(
  /** condition: update is from a special user */
  (ctx) => ctx.from?.username?.toLowerCase() == "onetimeusername",
  /** true handler */
  () => {
    console.log("Using more compute power: Update from someone special.");
  },
  /** false handler */
  () => {
    console.log("Handling postponed: Update from regular user.");
  },
);
```

## filter

[`filter`](https://jsr.io/@mtkruto/mtkruto/doc/~/Composer.prototype.filter) is almost the same as `branch` except that it does not have a false handler. It automatically moves to the next handlers if the condition is not met.

```txt
|
filter -------- condition
                   |
              ------------
             |            |
           true        false
             |            |
          handler         |
             |            |
            next <--------/
             |
```

Here's an example.

```ts
client.filter(
  /* condition: update is from @crow */
  (ctx) => {
    return ctx.from?.username === "crow";
  },
  (ctx) => {
    console.log("Received an update from @crow.");
  },
);
```

## on

[`on`](https://jsr.io/@mtkruto/mtkruto/doc/~/Composer.prototype.on) works like `filter` but instead of providing a function that checks for a condition, you provide it a filter query. If the update matched the provided filter, the handler gets called.

```txt
|
on -------------------- check
                         |
                    -------------
                   |             |
                passes      does not
                   |            |
                handler -------/
                   |
                 next
                   |
                   |
```

Here are some examples.

```ts
/** When the client's connection state changes */
client.on("connectionState", (ctx) => {
  console.log("New connection state:", ctx.update.connectionState);
});

/** Handles text messages */
client.on("message:text", (ctx) => {
  // do something with ctx.message.text
});

/** Handles callback queries */
client.on("callbackQuery", (ctx) => {
  // do something with ctx.callbackQuery
});
```

## command

[`command`](https://jsr.io/@mtkruto/mtkruto/doc/~/Composer.prototype.command) works like `on("message:text")` except it filters commands.

```ts
client.command("start", async (ctx) => {
  await ctx.reply("Hey, you just started me!");
});
```

You can specify multiple commands.

```ts
client.command(["start", "ping"], async (ctx) => {
  await ctx.reply("Command received!");
});
```

You can also specify custom prefixes.

```ts
client.command({
  names: ["start", "ping"],
  prefixes: ["/", "!"],
}, async (ctx) => {
  await ctx.reply("Command received!");
});
```

## callbackQuery

[`callbackQuery`](https://jsr.io/@mtkruto/mtkruto/doc/~/Composer.prototype.callbackQuery) filters incoming updates by a specific callback query data.

```ts
client.callbackQuery("btn_1", async (ctx) => {
  // ctx.callbackQuery.data === "btn_1"
});
```

## inlineQuery

[`inlineQuery`](https://jsr.io/@mtkruto/mtkruto/doc/~/Composer.prototype.inlineQuery) filters incoming updates by a specific inline query.

```ts
client.inlineQuery("query", async (ctx) => {
  // ctx.inlineQuery.query === "query"
});
```

## chosenInlineResult

[`chosenInlineResult`](https://jsr.io/@mtkruto/mtkruto/doc/~/Composer.prototype.chosenInlineResult) filters incoming updates by a chosen inline result's query.

```ts
client.chosenInlineResult("query", async (ctx) => {
  // ctx.chosenInlineResult.query === "query"
});
```

## chatType

[`chatType`](https://jsr.io/@mtkruto/mtkruto/doc/~/Composer.prototype.chatType) filters incoming updates by their chat type.

```ts
client.chatType("private", async (ctx) => {
  await ctx.reply("Received a message from a private chat!");
});
```

You can specify multiple chat types.

```ts
client.chatType(["supergroup", "channel"], async (ctx) => {
  await ctx.reply("Message received!");
});
```
