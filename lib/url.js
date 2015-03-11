var simplePrefs = require('sdk/simple-prefs')
var prefs = simplePrefs.prefs

exports.construct = function () {
  var url = prefs.url
  if (url.charAt(url.length - 1) !== '/') {
    url += '/'
  }
  var activeTab = require('sdk/tabs').activeTab
  url += 'links/new'
  url += '?title=' + encodeURIComponent(activeTab.title)
  url += '&url=' + encodeURIComponent(activeTab.url)
  return url
}
