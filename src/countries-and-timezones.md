---
title: Countries and Timezones
parent: /#walkthrough
walkthrough:
  track: user
  order: 41
---

Users can retrieve Telegram's country and timezone data.

## Countries

{{ "getCountries" |> m }} returns countries localized for a language. {{ "getCountryCode" |> m }} returns the country code detected for the current connection.

```ts
const countries = await client.getCountries("en");
const countryCode = await client.getCountryCode();
```

## Timezones

{{ "getTimezones" |> m }} returns Telegram's supported timezones.

```ts
const timezones = await client.getTimezones();
```
