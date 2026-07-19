---
title: Index
---

**MTKruto** is a Telegram client library for JavaScript.

Its key features include:

- **Cross-runtime**\
  &nbsp;&nbsp;&nbsp;&nbsp;Supports Node.js, Deno, browsers, and Bun.

- **Type-safe**\
  &nbsp;&nbsp;&nbsp;&nbsp;Written in TypeScript with accurate typings.

- **Prioritizes the Web**\
  &nbsp;&nbsp;&nbsp;&nbsp;Prefers Web APIs over runtime-specific APIs.

- **Easy-to-use**\
  &nbsp;&nbsp;&nbsp;&nbsp;Provides its own [high-level API](#api-reference) on top of the Telegram API.

- **Extensible**\
  &nbsp;&nbsp;&nbsp;&nbsp;Its middleware system lets you integrate external code.

### Walkthrough

Start with the main walkthrough. Individual sections are tagged when they apply only to user accounts or bots.

#### Main

{{ "main" |> walkthrough }}

#### Users

Features available when the client authorizes a personal Telegram account.

{{ "user" |> walkthrough }}

#### Bots

Features available when the client authorizes a bot token.

{{ "bot" |> walkthrough }}

### Guides

- [Auth Strings](/auth-strings) {{ "/auth-strings" |> i }}
- [Flood Waits](/flood-waits) {{ "/flood-waits" |> i }}
- [Graceful Shutdown](/graceful-shutdown) {{ "/graceful-shutdown" |> i }}
- [Interacting with Telegram API](/interacting-with-telegram-api) {{ "/interacting-with-telegram-api" |> i }}
- [Log Verbosity](/log-verbosity) {{ "/log-verbosity" |> i }}
- [Splitting Code](/splitting-code) {{ "/splitting-code" |> i }}
- [Storage Adapters](/storage-adapters) {{ "/storage-adapters" |> i }}
- [Web Workers](/web-workers) {{ "/web-workers" |> i }}
- [Proxies](/proxies) {{ "/proxies" |> i }}

### API Reference

- [Methods](/methods)
- [Types](/types)

### Misc

- [FAQ](/faq) {{ "/faq" |> i }}
- [Terminology](/terminology) {{ "/terminology" |> i }}
- [MTKruto Server](/server)
- [Acknowledgements](/acknowledgements)
- [Contributing](/contributing) {{ "/contributing" |> i }}
- [Source Map](/source-map)
