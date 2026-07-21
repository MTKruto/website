---
title: Story Organization
parent: /#walkthrough
walkthrough:
  track: user
  order: 36
---

Users can organize stories into highlights and albums.

## Highlights

{{ "addStoryToHighlights" |> m }} and {{ "addStoriesToHighlights" |> m }} place stories in highlights. Their removal counterparts are {{ "removeStoryFromHighlights" |> m }} and {{ "removeStoriesFromHighlights" |> m }}.

```ts
await client.addStoryToHighlights(chatId, storyId);
await client.addStoriesToHighlights(chatId, storyIds);
await client.removeStoryFromHighlights(chatId, storyId);
await client.removeStoriesFromHighlights(chatId, storyIds);
```

## Albums

{{ "createStoryAlbum" |> m }} creates an album, and {{ "setStoryAlbumName" |> m }} renames it.

```ts
const album = await client.createStoryAlbum(chatId, "Travel", storyIds);
await client.setStoryAlbumName(chatId, album.id, "Trips");
```

{{ "addStoryToAlbum" |> m }} and {{ "addStoriesToAlbum" |> m }} add stories; {{ "removeStoryFromAlbum" |> m }} and {{ "removeStoriesFromAlbum" |> m }} remove them.

```ts
await client.addStoryToAlbum(chatId, album.id, storyId);
await client.addStoriesToAlbum(chatId, album.id, storyIds);
await client.removeStoryFromAlbum(chatId, album.id, storyId);
await client.removeStoriesFromAlbum(chatId, album.id, storyIds);
```

{{ "getStoryAlbums" |> m }} lists albums, while {{ "getStoriesInAlbum" |> m }} lists their stories. Reordering is handled by {{ "reorderStoriesInAlbum" |> m }} and {{ "reorderStoryAlbums" |> m }}.

```ts
const albums = await client.getStoryAlbums(chatId);
const stories = await client.getStoriesInAlbum(chatId, album.id);
await client.reorderStoriesInAlbum(chatId, album.id, storyIds);
await client.reorderStoryAlbums(chatId, albums.map(({ id }) => id));
```

{{ "deleteStoryAlbum" |> m }} deletes an album.

```ts
await client.deleteStoryAlbum(chatId, album.id);
```

## Listing and Moderation

{{ "getStories" |> m }} retrieves stories by identifier, while {{ "deleteStories" |> m }} deletes several at once.

```ts
const stories = await client.getStories(chatId, storyIds);
await client.deleteStories(chatId, storyIds);
```

{{ "reportStory" |> m }} reports one story; {{ "reportStories" |> m }} handles several.

```ts
await client.reportStory(chatId, storyId);
await client.reportStories(chatId, storyIds);
```
