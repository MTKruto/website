---
title: Paid Media
parent: /#walkthrough
walkthrough:
  track: main
  order: 20
---

Users and bots can require users to pay Telegram Stars before viewing a photo or video.

## Sending Paid Media

Pass `starCount` to {{ "sendPhoto" |> m }} or {{ "sendVideo" |> m }} to set the number of Stars required to unlock the media.

```ts
await client.sendPhoto(chatId, "./photo.jpg", {
  starCount: 25,
});
```
