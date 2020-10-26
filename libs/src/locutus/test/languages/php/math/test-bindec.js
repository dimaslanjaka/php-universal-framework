// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var bindec = require('../../../../src/php/math/bindec.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/math/bindec.js (tested in test/languages/php/math/test-bindec.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 51
    var result = bindec('110011')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 51
    var result = bindec('000110011')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = 7
    var result = bindec('111')
    expect(result).to.deep.equal(expected)
    done()
  })
})
