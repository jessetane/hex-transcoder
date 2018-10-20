# hex-string
Fast hex / binary transcoding in pure JavaScript.

## Why
Not as fast as [node's implementation](https://github.com/nodejs/node/blob/master/src/string_bytes.cc#L736), but quite a bit faster than using `toString(16)` and `parseInt(n, 16)` which is generally what's used in the browser.

On my laptop, using node@10.12.0:
``` shell
$ npm run bench

> hex-string@1.0.0 bench hex-string
> node bench

4096 trials, 1024 bytes per trial
encode (node Buffer): 20.834ms
decode (node Buffer): 16.737ms
encode (toString): 502.201ms
decode (parseInt): 317.031ms
encode (this module): 37.162ms
decode (this module): 56.636ms
```

## How
Do maths in plain JavaScript.

## Test
``` shell
$ npm run test
```

## Notes
* Tested against node's Buffer for compatibility
* Decode returns `Uint8Array` instead of `Buffer`

## License
Public Domain
