---
title: Profile Music
parent: /#walkthrough
walkthrough:
  track: user
  order: 15
---

Users can add music to their profile.

## Adding Music

{{ "addMusicToProfile" |> m }} accepts the file identifier of an {{ "Audio" |> t }}.

```ts
await client.addMusicToProfile(audio.fileId);
```

## Listing Profile Music

{{ "getProfileMusic" |> m }} with a user's identifier lets you get their profile music.

```ts
const music = await client.getProfileMusic("me");

for (const audio of music) {
  console.log(audio.title, audio.performer);
}
```

## Removing Music

{{ "removeMusicFromProfile" |> m }} removes profile music by file identifier.

```ts
await client.removeMusicFromProfile(audio.fileId);
```
