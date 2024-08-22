# Flood Waits

By default, flood waits of smaller than or equal to 10 seconds are handled. If
the client faced a flood wait bigger than 10 seconds, it will instead be
rethrowing.

## Opting Out of the Default Behavior

If you don't want to handle <=10-second flood waits automatically, you can opt
out by setting the `defaultHandlers` parameter of the client to `false`:

```ts
const client = new Client({
  /* ... */
  defaultHandlers: false,
});
```

## Handling Larger Flood Waits

If you want to handle >10-second flood waits, you can do so by extending the
invoke middleware:

```ts
const client = new Client({
  /* ... */
  defaultHandlers: false,
});

client.invoke.use(async ({ error }, next) => {
  if (error instanceof errors.FloodWait) {
    await new Promise((r) => setTimeout(r, 1000 * error.seconds));
    return true;
  } else {
    return next();
  }
});
```
