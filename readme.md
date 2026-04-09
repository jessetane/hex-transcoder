# hex-string
Fast hex / binary transcoding in pure JavaScript.

## Why
Not as fast as [node's implementation](https://github.com/nodejs/node/blob/master/src/string_bytes.cc#L736), but quite a bit faster than using `toString(16)` and `parseInt(n, 16)` which is generally what's used in the browser.

On a chromebook, using node@14.6.0:
``` shell
$ npm run bench

> hex-transcoder@2.0.0 bench hex-transcoder
> node bench

65536 trials, 16384 bytes per trial (v25.9.0)
encode (node Buffer): 99.945ms
decode (node Buffer): 601.284ms
encode (toString): 0.407ms
decode (parseInt): 1.744ms
encode (this module): 0.304ms
decode (this module): 1.555ms
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
MIT
