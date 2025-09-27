---
title: FAQ
parent: /#other-pages
prev: /server/receiving-updates
---

## Is this a drop-in replacement for Bot API?

Not at all. Although some small details might look relevant, everything is
fundamentally different from Bot API.

There is no backwards compatibility with the Bot API.

## Why not just use Bot API?

Bot API is always a good choice for most projects. Although, one might need
MTKruto Server if they would like to:

- Interact with user accounts, since Bot API does not support this.
- Interact with the Telegram MTProto API directly through an HTTP interface,
  since Bot API does not support this.
- Interact with user accounts from resource-constrained environments (e.g.,
  serverless functions), since it is not possible to do it directly with
  Telegram clients.
- Interact with the same user account from different hosts without facing
  issues, since doing so directly with Telegram clients requires logging in each
  time, or would otherwise result in errors like AUTH_KEY_DUPLICATED.
