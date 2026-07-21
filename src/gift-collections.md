---
title: Gift Collections
parent: /#walkthrough
walkthrough:
  track: user
  order: 38
---

Users can organize received gifts into collections.

## Creating and Listing Collections

{{ "createGiftCollection" |> m }} creates a collection.

```ts
const gifts = [{ type: "chat" as const, chatId, id: giftId }];
const collection = await client.createGiftCollection("me", "Favorites", gifts);
```

{{ "getGiftCollections" |> m }} lists the account's collections.

```ts
const collections = await client.getGiftCollections("me");
```

## Managing a Collection

Rename a collection with {{ "setGiftCollectionName" |> m }}.

```ts
await client.setGiftCollectionName("me", collection.id, "Best Gifts");
```

{{ "addGiftsToCollection" |> m }} and {{ "removeGiftsFromCollection" |> m }} manage its contents.

```ts
await client.addGiftsToCollection("me", collection.id, gifts);
await client.removeGiftsFromCollection("me", collection.id, gifts);
```

Reorder gifts inside one collection with {{ "reorderGiftsInCollection" |> m }}.

```ts
await client.reorderGiftsInCollection("me", collection.id, gifts);
```

To reorder the collections themselves, call {{ "reorderGiftCollections" |> m }}.

```ts
await client.reorderGiftCollections("me", collections.map(({ id }) => id));
```

{{ "deleteGiftCollection" |> m }} deletes a collection.

```ts
await client.deleteGiftCollection("me", collection.id);
```
