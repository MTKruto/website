---
title: Privacy Settings
parent: /#walkthrough
walkthrough:
  track: user
  order: 20
---

User clients can control who can see account information and use features such as calls and group invitations.

## Getting Privacy Rules

Use {{ "getPrivacySetting" |> m }} with a {{ "PrivacySettingKey" |> t }} to get {{ "PrivacyRule" |> t }} objects.

```ts
const rules = await client.getPrivacySetting("phoneNumber");

for (const rule of rules) {
  console.log(rule);
}
```

## Setting Privacy Rules

Use {{ "setPrivacySetting" |> m }} with {{ "InputPrivacyRule" |> t }} objects. This example makes the profile photo visible to contacts only.

```ts
await client.setPrivacySetting("profilePhoto", [
  { type: "contacts", isAllowed: true },
  { type: "everybody", isAllowed: false },
]);
```

## Adding User Exceptions

Use a `users` rule to add exceptions. This example hides the last seen time from everybody except one user.

```ts
await client.setPrivacySetting("lastSeen", [
  { type: "users", usersId: [userId], isAllowed: true },
  { type: "everybody", isAllowed: false },
]);
```
