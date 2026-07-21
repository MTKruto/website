---
title: Privacy Settings
parent: /#walkthrough
walkthrough:
  track: user
  order: 20
---

Users can control who can see account information and use features such as calls and group invitations.

## Getting Privacy Rules

{{ "getPrivacySetting" |> m }} with a {{ "PrivacySettingKey" |> t }} lets you get {{ "PrivacyRule" |> t }} objects.

```ts
const rules = await client.getPrivacySetting("phoneNumber");

for (const rule of rules) {
  console.log(rule);
}
```

## Setting Privacy Rules

{{ "setPrivacySetting" |> m }} accepts {{ "InputPrivacyRule" |> t }} objects. This example makes the profile photo visible to contacts only.

```ts
await client.setPrivacySetting("profilePhoto", [
  { type: "contacts", isAllowed: true },
  { type: "everybody", isAllowed: false },
]);
```

## Adding User Exceptions

With a `users` rule, you can add exceptions. This example hides the last seen time from everybody except one user.

```ts
await client.setPrivacySetting("lastSeen", [
  { type: "users", usersId: [userId], isAllowed: true },
  { type: "everybody", isAllowed: false },
]);
```
