import { encode, decode } from 'hex-transcoder'
import toStringParseInt from 'hex-transcoder/to-string-parse-int.js'
import crypto from 'crypto'

var c = 1024 * 16
var r = crypto.randomBytes(c).buffer
var i, x, n = 0x10000
console.log(`${n} trials, ${c} bytes per trial`)

// Buffer
if (typeof window === 'undefined') {
  console.time('encode (node Buffer)')
  i = n
  while (i--) x = Buffer.from(r).toString('hex')
  console.timeEnd('encode (node Buffer)')
  console.time('decode (node Buffer)')
  i = n
  while (i--) Buffer.from(x, 'hex')
  console.timeEnd('decode (node Buffer)')
}

// toString / parseInt
console.time('encode (toString)')
i = n
while (i--) x = toStringParseInt.encode(r)
console.timeEnd('encode (toString)')
console.time('decode (parseInt)')
i = n
while (i--) toStringParseInt.decode(x)
console.timeEnd('decode (parseInt)')

// this module
console.time('encode (this module)')
i = n
while (i--) x = encode(r)
console.timeEnd('encode (this module)')
console.time('decode (this module)')
i = n
while (i--) decode(x)
console.timeEnd('decode (this module)')
