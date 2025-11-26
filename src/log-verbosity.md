---
title: Log Verbosity
parent: /#guides
---

Log verbosity can be changed using the environment variable `LOG_VERBOSITY`.

## Levels

<ol>
  <li>Error</li>
  <li>Warning</li>
  <li>Info</li>
  <li>Debug</li>
  <li>Trace</li>
  <li value="10">In/Out</li>
  <li value="20">In/Out (bin)</li>
</ol>

## Examples

The following examples are valid in Unix shells.

```shell
LOG_VERBOSITY=4 deno run main.ts
```

```shell
LOG_VERBOSITY=4 npm start
```

In browsers, the global variable `MTKRUTO__LOG_VERBOSITY` can be used.

```html
<!-- at the very top of the document -->
<script>
  globalThis.MTKRUTO__LOG_VERBOSITY = 4;
</script>
```

## Filtering Logs

Logs can be filtered by their scopes using the LOG_FILTER environment variable which expects vaild regular expression.

```shell
LOG_VERBOSITY=4 LOG_FILTER=receiveLoop deno run main.ts
```

```shell
LOG_VERBOSITY=4 LOG_VERBOSITY=receiveLoop npm start
```

```html
<!-- at the very top of the document -->
<script>
  globalThis.MTKRUTO__LOG_FILTER = "receiveLoop";
</script>
```
