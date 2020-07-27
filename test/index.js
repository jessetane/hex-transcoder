import hex from 'hex-transcoder'
import toStringParseInt from 'hex-transcoder/to-string-parse-int.js'
import tap from 'tap-esm'
import crypto from 'crypto'

var bytes = crypto.randomBytes(1024)
var string = toStringParseInt.encode(bytes)

tap('encode', function (t) {
  t.plan(1)
  t.equal(hex.encode(bytes), string)
})

if (typeof Buffer !== 'undefined') {
  tap('encode (compare to Buffer)', t => {
    t.plan(1)
    t.equal(hex.encode(bytes), Buffer.from(bytes).toString('hex'))
  })
}

tap('decode', function (t) {
  t.plan(1)
  t.arrayEqual(hex.decode(string), bytes)
})
