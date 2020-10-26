// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var gmstrftime = require('../../../../src/php/datetime/gmstrftime.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/datetime/gmstrftime.js (tested in test/languages/php/datetime/test-gmstrftime.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 'Tuesday'
    var result = gmstrftime("%A", 1062462400)
    expect(result).to.deep.equal(expected)
    done()
  })
})
