// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var pos = require('../../../../src/php/array/pos.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/array/pos.js (tested in test/languages/php/array/test-pos.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'foot'
    var $transport = ['foot', 'bike', 'car', 'plane']
    var result = pos($transport)
    expect(result).to.deep.equal(expected)
    done()
  })
})
