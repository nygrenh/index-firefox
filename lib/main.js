var data = require("sdk/self").data;

var panel = require("sdk/panel").Panel({
  width: 300,
  height: 500,
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
  panel.contentURL = "https://theindex.herokuapp.com/links/new";
  panel.show();
}

function handleHide(){
	panel.contentURL = "about:blank";
}

panel.on("show", function() {
  panel.port.emit("show");
});
