---
title: Paid Media
parent: /#walkthrough
walkthrough:
  track: main
  order: 20
---

Users and bots can require users to pay Telegram Stars before viewing a photo or video.

## Sending Paid Media

The `starCount` option on {{ "sendPhoto" |> m }} and {{ "sendVideo" |> m }} sets the number of Stars required to unlock the media.

```ts
await client.sendPhoto(chatId, "./photo.jpg", {
  starCount: 25,
});
```
