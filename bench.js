var encode = require('./').encode
var decode = require('./').decode
var getRandomValues = require('get-random-values')

function toStringEncode (array) {
  var length = array.length
  var string = ''
  var c, i = 0
  while (i < length) {
    c = array[i++].toString(16)
    if (c.length < 2) c = '0' + c
    string += c
  }
  return string
}

function parseIntDecode (string) {
  var sizeof = string.length >> 1
  var length = sizeof << 1
  var array = new Uint8Array(sizeof)
  var n = 0
  var i = 0
  while (i < length) {
    array[n++] = parseInt(string.substr(i, 2), 16)
    i += 2
  }
  return array
}

var r = getRandomValues(new Uint8Array(1024))
var i, x, n = 0x1000
console.log(n + ' trials, 1024 bytes per trial')

// Buffer
console.time('encode (node Buffer)')
i = n
while (i--) x = Buffer(r).toString('hex')
console.timeEnd('encode (node Buffer)')
console.time('decode (node Buffer)')
i = n
while (i--) Buffer(x, 'hex')
console.timeEnd('decode (node Buffer)')

// toString / parseInt
console.time('encode (toString)')
i = n
while (i--) x = toStringEncode(r)
console.timeEnd('encode (toString)')
console.time('decode (parseInt)')
i = n
while (i--) parseIntDecode(x)
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
