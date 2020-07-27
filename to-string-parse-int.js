export function encode (array) {
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

export function decode (string) {
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

export default { encode, decode }
