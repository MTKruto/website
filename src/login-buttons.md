---
title: Login Buttons
parent: /#walkthrough
walkthrough:
  track: bot
  order: 15
---

Bots can let users sign in to a website with their Telegram account.

## Sending a Login Button

Link the website's domain to the bot through [@BotFather](https://t.me/BotFather), then send a `loginUrl` button with an HTTPS URL.

```ts
client.command("login", async (ctx) => {
  await ctx.reply("Sign in to continue:", {
    replyMarkup: {
      type: "inlineKeyboard",
      inlineKeyboard: [
        [
          {
            type: "loginUrl",
            text: "Sign in",
            loginUrl: {
              url: "https://example.com/login",
            },
          },
        ],
      ],
    },
  });
});
```

Telegram adds signed authentication data to the URL. Verify it on the server before signing the user in.
