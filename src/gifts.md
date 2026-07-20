---
title: Gifts
parent: /#walkthrough
walkthrough:
  track: main
  order: 22
---

Clients can browse, send, sell, and transfer Telegram Star gifts.

## Getting Available Gifts

Use {{ "getGifts" |> m }} to list the gifts available for purchase.

```ts
const gifts = await client.getGifts();

for (const gift of gifts) {
  console.log(gift.id, gift.price);
}
```

`id` is the identifier used when sending a gift.

## Getting a Gift

Use {{ "getGift" |> m }} with a gift slug to fetch its details.

```ts
const gift = await client.getGift("delicious-bento");
```

## Sending a Gift

Use {{ "sendGift" |> m }} with the recipient and the gift identifier to purchase and send a gift.

```ts
await client.sendGift(userId, giftId);
```

Optionally, pass a `message` to attach text to the gift.

```ts
await client.sendGift(userId, giftId, {
  message: "Enjoy!",
});
```

## Selling a Gift

Use {{ "sellGift" |> m }} to convert a saved gift to Telegram Stars. Reference the gift by its chat and identifier.

```ts
await client.sellGift({ type: "chat", chatId, id });
```

For a gift in a private chat, use `type: "user"` with the `messageId`.

```ts
await client.sellGift({ type: "user", messageId });
```

## Transferring a Gift

Use {{ "transferGift" |> m }} to give a saved gift to another user.

```ts
await client.transferGift(userId, { type: "chat", chatId, id });
```
