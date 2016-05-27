var ActivityIndicator = {
    show: function (text,cancelCallback) {
    	text = text || "Please wait...";
    	cordova.exec(cancelCallback, null, "ActivityIndicator", "show", [text]);
    },
    hide: function () {
        cordova.exec(null, null, "ActivityIndicator", "hide", []);
    }
};

module.exports = ActivityIndicator;