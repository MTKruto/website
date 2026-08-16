---
title: Native AES-IGE
parent: /#guides
---

MTKruto uses a portable WebAssembly implementation of AES-256-IGE by default. Server-side applications running on a supported platform can use [`@mtkruto/ige-native`](https://github.com/MTKruto/ige-native) to replace it with an implementation that uses the CPU's hardware AES instructions.

Register both native functions before starting any clients. The functions are shared by every MTKruto client in the same JavaScript context.

## Node.js

The [npm package](https://www.npmjs.com/package/@mtkruto/ige-native) includes prebuilt Node-API addons for the supported platforms and requires Node.js `^20.17.0 || >=22.9.0`.

{{ "@mtkruto/ige-native" |> install }}

Register its encryption and decryption functions with MTKruto:

```ts
import { ige256Decrypt, ige256Encrypt } from "@mtkruto/ige-native";
import { setIge256Decrypt, setIge256Encrypt } from "@mtkruto/node";

setIge256Encrypt(ige256Encrypt);
setIge256Decrypt(ige256Decrypt);

// Create and start clients after installing the functions.
```

The native addon is loaded the first time either function is used. Use `openNapiIge()` instead if the addon should be loaded and validated during application startup or if you need to provide a custom `addonPath`.

## Deno

Install the FFI provider from [JSR](https://jsr.io/@mtkruto/ige-native):

```shell
deno add jsr:@mtkruto/ige-native
```

The JSR package does not download or compile a native library. Get the library for your platform from the [prebuilt artifacts](https://github.com/MTKruto/ige-native/tree/main/artifacts), or build it from source with Deno and Clang:

```shell
git clone https://github.com/MTKruto/ige-native.git
cd ige-native
deno task build
```

Pass the local library path to `openNativeIge()`, then register the provider's functions:

```ts
import { openNativeIge } from "@mtkruto/ige-native";
import { setIge256Decrypt, setIge256Encrypt } from "@mtkruto/mtkruto";

const nativeIge = openNativeIge({
  libraryPath: "/absolute/path/to/libmtkruto_ige.so",
});

setIge256Encrypt(nativeIge.ige256Encrypt);
setIge256Decrypt(nativeIge.ige256Decrypt);

// Keep nativeIge open while any client is using these functions.
```

The library is named `libmtkruto_ige.dylib` on macOS, `libmtkruto_ige.so` on Linux, and `mtkruto_ige.dll` on Windows. When importing the provider from a local package checkout that contains `artifacts/`, you can omit `libraryPath` to select the current platform's library automatically.

Run the application with FFI access scoped to the library or its directory when possible:

```shell
deno run --allow-ffi=/absolute/path/to/libmtkruto_ige.so app.ts
```

Call `nativeIge.close()` only after every client using the installed functions has stopped. Using the functions after closing their provider throws an error.

## Supported Platforms

- macOS on ARM64 or x86-64
- Linux on ARM64 or x86-64
- Windows on x86-64

ARM64 processors must provide the ARMv8 Crypto Extensions, and x86-64 processors must provide AES-NI. Opening the provider fails when the operating system, architecture, native ABI, or required CPU instructions are unsupported. Native AES-IGE is not available in browsers.
