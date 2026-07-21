---
title: Authorization Sessions
parent: /#walkthrough
walkthrough:
  track: user
  order: 21
---

Users can view and remove the account's authorization sessions.

## Listing Sessions

Use {{ "getAuthorizationSessions" |> m }} to get the sessions as {{ "AuthorizationSession" |> t }} objects.

```ts
const sessions = await client.getAuthorizationSessions();

for (const session of sessions) {
  console.log(session.appName, session.deviceModel, session.ipAddress);
}
```

The current session has `isCurrent` set to `true`.

## Removing a Session

Use {{ "removeAuthorizationSession" |> m }} with the session's identifier.

```ts
await client.removeAuthorizationSession(sessionId);
```

## Removing Other Sessions

Use {{ "removeAuthorizationSessions" |> m }} to remove every session except the current one.

```ts
await client.removeAuthorizationSessions();
```
