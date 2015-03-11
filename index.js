var panels = require('sdk/panel')
var actionButtons = require('sdk/ui/button/action')
var data = require('sdk/self').data
var url = require('lib/url')

var panel = panels.Panel({
  contentURL: data.url('loading.html'),
  width: 300,
  height: 520,
  onHide: handleHide
})

var button = actionButtons.ActionButton({
  id: 'add-link',
  label: 'Add a Link to Index',
  icon: {
    '16': './icon-16.png',
    '32': './icon-32.png',
    '64': './icon-64.png'
  },
  onClick: handleClick
})

function handleClick (state) {
  panel.contentURL = url.construct()
  panel.show({
    position: button
  })
}

function handleHide () {
  panel.contentURL = data.url('loading.html')
}

panel.on('show', function () {
  panel.port.emit('show')
})
