var alphabet = '0123456789abcdef'
var encodeLookup = []
var decodeLookup = []

for (var i = 0; i < 256; i++) {
  encodeLookup[i] = alphabet[i >> 4 & 0xf] + alphabet[i & 0xf]
  if (i < 16) {
    if (i < 10) {
      decodeLookup[0x30 + i] = i
    } else {
      decodeLookup[0x61 - 10 + i] = i
    }
  }
}

exports.encode = function (array, start, end, delimiter) {
  var length = array.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > length) end = length

  delimiter = delimiter || ''

  for (var string = table[arr[start++]]; start < end; start++) {
    string += delimiter + encodeLookup[array[start]]
  }

  return string || ''
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
