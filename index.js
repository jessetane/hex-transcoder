var encodeLookup = '0123456789abcdef'
var decodeLookup = []
var i = 0
while (i < 10) decodeLookup[0x30 + i] = i++
while (i < 16) decodeLookup[0x61 - 10 + i] = i++

exports.encode = function (array) {
  var length = array.length
  var string = ''
  var c, i = 0
  while (i < length) {
    c = array[i++]
    string += encodeLookup[(c & 0xF0) >> 4] + encodeLookup[c & 0xF]
  }
  return string
}

exports.decode = function (string) {
  var sizeof = string.length >> 1
  var length = sizeof << 1
  var array = new Uint8Array(sizeof)
  var n = 0
  var i = 0
  while (i < length) {
    array[n++] = decodeLookup[string.charCodeAt(i++)] << 4 | decodeLookup[string.charCodeAt(i++)]
  }
  return array
}
