---
title: Profile Photos
parent: /#walkthrough
walkthrough:
  track: user
  order: 11
---

User clients can manage the account's profile photo or video.

## Setting a Profile Photo

Use {{ "updateProfilePhoto" |> m }} with a local path, URL, or another supported file source.

```ts
await client.updateProfilePhoto("profile.jpg");
```

## Setting a Profile Video

Use {{ "updateProfileVideo" |> m }} to set a video instead.

```ts
await client.updateProfileVideo("profile.mp4");
```

## Listing Profile Photos

Use {{ "getProfilePhotos" |> m }} with the account's user identifier.

```ts
const me = await client.getMe();
const photos = await client.getProfilePhotos(me.id);
```

## Removing the Profile Photo

Use {{ "removeProfilePhoto" |> m }} to remove the current profile photo or video.

```ts
await client.removeProfilePhoto();
```
