---
title: Stickers and Sticker Sets
parent: /#walkthrough
walkthrough:
  track: main
  order: 18
  sections:
    suggesting-a-slug: user
    managing-added-sticker-sets: user
    managing-favorite-stickers: user
    managing-recent-stickers: user
---

Clients can create, retrieve, and manage sticker sets.

## Suggesting a Slug

Users can use {{ "suggestStickerSetSlug" |> m }} to generate a slug from a title.

```ts
const slug = await client.suggestStickerSetSlug("Cat Stickers");
```

## Creating a Sticker Set

Use {{ "checkStickerSetSlug" |> m }} to check whether a slug is available, then pass it to {{ "createStickerSet" |> m }} with at least one sticker.

```ts
if (!await client.checkStickerSetSlug(slug)) {
  throw new Error("The sticker set slug is unavailable.");
}

const stickerSet = await client.createStickerSet(
  "Cat Stickers",
  slug,
  [{ sticker: "./cat.webp", emoji: "🐈" }],
);
```

Bot clients must pass `{ userId }` as the final argument to identify the owner. User clients omit it.

## Getting a Sticker Set

Use {{ "getStickerSet" |> m }} with a slug or sticker set link. Use {{ "getDiceStickerSet" |> m }} to get the set used by a dice emoji.

```ts
const stickerSet = await client.getStickerSet(slug);
const diceStickerSet = await client.getDiceStickerSet("🎲");
```

## Managing Stickers

Use {{ "addStickerToStickerSet" |> m }} to add an {{ "InputSticker" |> t }} or {{ "replaceStickerInStickerSet" |> m }} to replace an existing sticker.

```ts
await client.addStickerToStickerSet(
  slug,
  { sticker: "./sleeping-cat.webp", emoji: "😴" },
);

await client.replaceStickerInStickerSet(
  fileId,
  { sticker: "./new-cat.webp", emoji: "😺" },
);
```

Bot clients must pass `{ userId }` as the final argument to both methods.

Use {{ "replaceStickerEmoji" |> m }} to change a sticker's emoji, {{ "changeStickerPositionInStickerSet" |> m }} to move it, and {{ "removeStickerFromStickerSet" |> m }} to remove it.

```ts
await client.replaceStickerEmoji(fileId, "😺");
await client.changeStickerPositionInStickerSet(fileId, 0);
await client.removeStickerFromStickerSet(fileId);
```

## Changing Set Details

Use {{ "setStickerSetTitle" |> m }} to change the title. Set the thumbnail with {{ "setStickerSetThumbnail" |> m }} or {{ "setCustomEmojiAsStickerSetThumbnail" |> m }}.

```ts
await client.setStickerSetTitle(slug, "Cat Reactions");
await client.setStickerSetThumbnail(slug, "./thumbnail.webp");
await client.setCustomEmojiAsStickerSetThumbnail(slug, customEmojiId);
```

Bot clients must pass `{ userId }` to {{ "setStickerSetThumbnail" |> m }}.

## Managing Added Sticker Sets

Users can add an existing set with {{ "addStickerSet" |> m }} and list added sets with {{ "getAddedStickerSets" |> m }}.

```ts
await client.addStickerSet(slug);
const stickerSets = await client.getAddedStickerSets();
```

Use {{ "archiveStickerSet" |> m }} and {{ "unarchiveStickerSet" |> m }} to change whether an added set is archived. Use {{ "removeStickerSet" |> m }} to remove it from the account.

```ts
await client.archiveStickerSet(slug);
await client.unarchiveStickerSet(slug);
await client.removeStickerSet(slug);
```

## Managing Favorite Stickers

Users can list favorite stickers with {{ "getFavoriteStickers" |> m }}.

```ts
const favoriteStickers = await client.getFavoriteStickers();
```

Use {{ "addStickerToFavorites" |> m }} and {{ "removeStickerFromFavorites" |> m }} with a sticker's file identifier to update the list.

```ts
await client.addStickerToFavorites(sticker.fileId);
await client.removeStickerFromFavorites(sticker.fileId);
```

## Managing Recent Stickers

Users can list recent stickers with {{ "getRecentStickers" |> m }}.

```ts
const recentStickers = await client.getRecentStickers();
```

Use {{ "addStickerToRecents" |> m }} and {{ "removeStickerFromRecents" |> m }} with a sticker's file identifier to update the list.

```ts
await client.addStickerToRecents(sticker.fileId);
await client.removeStickerFromRecents(sticker.fileId);
```

Use {{ "clearRecentStickers" |> m }} to remove every sticker from the recent list.

```ts
await client.clearRecentStickers();
```

## Deleting a Sticker Set

Use {{ "deleteStickerSet" |> m }} to permanently delete a sticker set.

```ts
await client.deleteStickerSet(slug);
```
