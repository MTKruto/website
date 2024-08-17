# Log Verbosity

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
