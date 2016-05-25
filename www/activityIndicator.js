var ActivityIndicator = {
    show: function (text,cancelCallback) {
    	text = text || "Please wait...";
    	if(cancelCallback ==true && typeof cancelCallback != function)
    	{
    		cancelCallback = function(){}
    	}
        cordova.exec(cancelCallback, null, "ActivityIndicator", "show", [text, !!cancelCallback]);
    },
    hide: function () {
        cordova.exec(null, null, "ActivityIndicator", "hide", []);
    }
};

module.exports = ActivityIndicator;