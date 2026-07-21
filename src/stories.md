---
title: Stories
parent: /#walkthrough
walkthrough:
  track: user
  order: 10
---

User clients can post photo and video stories with {{ "createStory" |> m }}.

## Posting a Photo Story

```ts
const story = await client.createStory(chatId, {
  type: "photo",
  photo: "./story.jpg",
}, {
  caption: "A new story",
});
```

The `photo` and `video` fields accept any supported {{ "FileSource" |> t }} except a URL.

## Posting a Video Story

Provide the video's duration in seconds when posting a video story.

```ts
const story = await client.createStory(chatId, {
  type: "video",
  video: "./story.mp4",
  duration: 15,
});
```

## Setting Privacy

Stories are visible to everyone by default. Use `privacy` to limit who can see one.

```ts
await client.createStory(chatId, {
  type: "photo",
  photo: "./story.jpg",
}, {
  privacy: { type: "closeFriends" },
});
```

See {{ "StoryPrivacy" |> t }} for the available privacy choices.

## Handling Story Updates

The `story` update contains a posted story.

```ts
client.on("story", (ctx) => {
  console.log(ctx.update.story);
});
```

The `deletedStory` update contains the chat and story identifiers of a deleted story.

```ts
client.on("deletedStory", (ctx) => {
  console.log(ctx.update.deletedStory);
});
```

## Editing and Deleting a Story

```ts
await client.editStory(chatId, story.id, {
  caption: "Updated caption",
});

await client.deleteStory(chatId, story.id);
```

Use {{ "getStory" |> m }} to retrieve a story by its chat and story identifiers.

## Adding a Story to Highlights

```ts
await client.addStoryToHighlights(chatId, story.id);
await client.removeStoryFromHighlights(chatId, story.id);
```

## Other Story-Related Methods

Refer to [the methods reference](/methods#stories) for all story-related methods.
