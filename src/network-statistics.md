---
title: Network Statistics
parent: /#walkthrough
walkthrough:
  track: main
  order: 26
---

Clients can inspect the amount of data transferred over the network.

> **Note:** Network statistics are currently available only with the TCP transport, not WebSocket transports.

## Getting Statistics

{{ "getNetworkStatistics" |> m }} returns the current statistics.

```ts
const statistics = await client.getNetworkStatistics();
```
