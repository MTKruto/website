---
title: Profile Photos
parent: /#walkthrough
walkthrough:
  track: user
  order: 11
---

Users can manage the account's profile photo or video.

## Setting a Profile Photo

{{ "updateProfilePhoto" |> m }} accepts a local path, URL, or another supported file source.

```ts
await client.updateProfilePhoto("profile.jpg");
```

## Setting a Profile Video

{{ "updateProfileVideo" |> m }} sets a video instead.

```ts
await client.updateProfileVideo("profile.mp4");
```

## Listing Profile Photos

{{ "getProfilePhotos" |> m }} retrieves profile photos for an account's user identifier.

```ts
const me = await client.getMe();
const photos = await client.getProfilePhotos(me.id);
```

## Removing the Profile Photo

To remove the current profile photo or video, call {{ "removeProfilePhoto" |> m }}.

```ts
await client.removeProfilePhoto();
```
