var url = require('../lib/url.js')
var prefs = require('sdk/simple-prefs').prefs

exports['test url starts with the Index url'] = function (assert) {
  prefs.url = 'https://a.com/'
  assert.ok(url.construct().indexOf('https://a.com/') === 0, 'starts with url')
}

exports['test url is correct without trailing slash in the Index url'] = function (assert) {
  prefs.url = 'https://a.com'
  assert.ok(url.construct().indexOf('https://a.com/') === 0, 'url with trailing slash')
}

require('sdk/test').run(exports)
