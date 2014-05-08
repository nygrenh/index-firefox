var data = require("sdk/self").data;

var panel = require("sdk/panel").Panel({
  contentURL: data.url("loading.html"),
  width: 300,
  height: 520,
  onHide: handleHide
});

var button = require("sdk/ui/button/action").ActionButton({
  id: "show-panel",
  label: "Show Panel",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  var prefs = require("sdk/simple-prefs").prefs;
  url = prefs.url + "links/new";

  panel.contentURL = url;
  panel.show({
    position: button
  });
}

function handleHide(){
	panel.contentURL = data.url("loading.html");
}

panel.on("show", function() {
  panel.port.emit("show");
});
