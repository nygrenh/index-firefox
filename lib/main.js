var panels = require("sdk/panel");
var actionButtons = require("sdk/ui/button/action");
var simplePrefs = require("sdk/simple-prefs");
var data = require("sdk/self").data;
var activeTab = require("sdk/tabs").activeTab;

var panel = panels.Panel({
  contentURL: data.url("loading.html"),
  width: 300,
  height: 520,
  onHide: handleHide
});

var button = actionButtons.ActionButton({
  id: "add-link",
  label: "Add a Link to Index",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  panel.contentURL = constructUrl();
  panel.show({
    position: button
  });
}

function constructUrl(){
  var prefs = simplePrefs.prefs;
  url = prefs.url;
  if( url.charAt(url.length - 1) != "/" ) {
    url += "/";
  }
  url += "links/new";
  url += "?title=" + activeTab.title;
  url += "&url=" + activeTab.url;
  return url;
}

function handleHide(){
	panel.contentURL = data.url("loading.html");
}

panel.on("show", function() {
  panel.port.emit("show");
});
