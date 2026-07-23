---
title: Gifts
parent: /#walkthrough
walkthrough:
  track: main
  order: 22
  sections:
    getting-a-gift: user
    transferring-a-gift: user
    crafting-gifts: user
---

Clients can browse, send, sell, and transfer Telegram Star gifts.

## Getting Available Gifts

{{ "getGifts" |> m }} lists the gifts available for purchase.

```ts
const gifts = await client.getGifts();

for (const gift of gifts) {
  console.log(gift.id, gift.price);
}
```

`id` is the identifier used when sending a gift.

## Getting a Gift

{{ "getGift" |> m }} with a gift slug lets you fetch its details.

```ts
const gift = await client.getGift("delicious-bento");
```

## Getting Claimed Gifts

{{ "getClaimedGifts" |> m }} lists gifts claimed by a user or channel.

```ts
const claimed = await client.getClaimedGifts(chatId);

for (const gift of claimed.gifts) {
  console.log(gift);
}
```

You can filter the results and use the returned `offset` to fetch the next page.

```ts
const claimed = await client.getClaimedGifts(chatId, {
  isUniqueExcluded: true,
  limit: 50,
  offset,
});
```

## Sending a Gift

To purchase and send a gift, call {{ "sendGift" |> m }} with the recipient and the gift identifier.

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

With {{ "sellGift" |> m }}, you can convert a gift to Telegram Stars. Reference the gift by its chat and identifier.

```ts
await client.sellGift({ type: "chat", chatId, id });
```

For a gift in a private chat, use `type: "user"` with the `messageId`.

```ts
await client.sellGift({ type: "user", messageId });
```

## Transferring a Gift

{{ "transferGift" |> m }} gives a saved gift to another user.

```ts
await client.transferGift(userId, { type: "chat", chatId, id });
```

## Crafting Gifts

Combine eligible gifts with {{ "craftGifts" |> m }}. Pass each gift as a reference by its slug, chat and identifier, or private-chat message identifier.

```ts
await client.craftGifts([
  { type: "chat", chatId, id: firstGiftId },
  { type: "chat", chatId, id: secondGiftId },
]);
```
