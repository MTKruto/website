---
title: Proxies
parent: /#proxies
---

## MTProxy

Both TLS and non-TLS versions of [MTProxy](https://core.telegram.org/proxy) are supported by MTKruto. To connect a client to an MTProxy server, use [`transportProviderMtproxy`](https://jsr.io/@mtkruto/mtkruto/doc/~/transportProviderMtproxy) when initializing it:

<code-group>

<code-group-item title="Deno">

```ts
import { Client, transportProviderMtproxy } from "{{ deno }}";

const proxyLink = "https://t.me/proxy?server=hostname&port=443&secret=00000000000000000000000000000000";

const client = new Client({
  transportProvider: transportProviderMtproxy(proxyLink),
  /* ... */
});
```

</code-group-item>

<code-group-item title="Node.js">

```ts
import { Client, transportProviderMtproxy } from "@mtkruto/node";

const proxyLink = "https://t.me/proxy?server=hostname&port=443&secret=00000000000000000000000000000000";

const client = new Client({
  transportProvider: transportProviderMtproxy(proxyLink),
  /* ... */
});
```

</code-group-item>

</code-group>

Credentials can also be specified manually:

```ts
const hostname = "hostname";
const port = 443;
const secret = new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);

const transportProvider = transportProviderMtproxy(hostname, port, secret);
```

## SOCKS5

SOCKS5 proxies are also supported through [`transportProviderSocks5`](https://jsr.io/@mtkruto/mtkruto/doc/~/transportProviderSocks5):

<code-group>

<code-group-item title="Deno">

```ts
import { Client, transportProviderSocks5 } from "{{ deno }}";

const proxyLink = "socks5://user:pass@host:port";

const client = new Client({
  transportProvider: transportProviderSocks5(proxyLink),
  /* ... */
});
```

</code-group-item>

<code-group-item title="Node.js">

```ts
import { Client, transportProviderSocks5 } from "@mtkruto/node";

const proxyLink = "socks5://user:pass@host:port";

const client = new Client({
  transportProvider: transportProviderSocks5(proxyLink),
  /* ... */
});
```

</code-group-item>

</code-group>
