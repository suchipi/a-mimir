# `a-mimir`

Barebones sleep functions. As simple and boring as it gets

## Usage

```ts
import { sleep } from "a-mimir";

// block the current thread (doesn't work in the browser main thread, but works in node and web workers)
sleep.sync(500); // block for 500ms

// schedule an action to run later, without blocking the main thread. works everywhere
const promise = sleep.async(500); // promise which resolves in 500ms

promise.then(() => {
  console.log("is printed second");
});

console.log("is printed first");
```

## Notes

- `sleep.sync` relies on the globals `SharedArrayBuffer`, `Int32Array`, and `Atomics.wait`.
- `sleep.async` relies on the globals `Promise` and `setTimeout`.

## License

MIT
