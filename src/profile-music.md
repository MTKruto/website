---
title: Profile Music
parent: /#walkthrough
walkthrough:
  track: user
  order: 15
---

User clients can add music to their profile.

## Adding Music

Use {{ "addMusicToProfile" |> m }} with the file identifier of an {{ "Audio" |> t }}.

```ts
await client.addMusicToProfile(audio.fileId);
```

## Listing Profile Music

Use {{ "getProfileMusic" |> m }} with a user's identifier to get their profile music.

```ts
const music = await client.getProfileMusic("me");

for (const audio of music) {
  console.log(audio.title, audio.performer);
}
```

## Removing Music

Use {{ "removeMusicFromProfile" |> m }} with the audio's file identifier.

```ts
await client.removeMusicFromProfile(audio.fileId);
```
