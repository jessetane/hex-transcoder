var hex = require('./')
var tape = require('tape')
var getRandomValues = require('get-random-values')

var bytes = getRandomValues(new Uint8Array(1024))
var string = Buffer(bytes).toString('hex')

tape('encode', function (t) {
  t.plan(1)
  t.equal(hex.encode(bytes), string)
})

tape('decode', function (t) {
  t.plan(1)
  t.equal(Buffer(bytes).compare(Buffer(hex.decode(string))), 0)
})
