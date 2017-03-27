var exec = require('cordova/exec');
var scan = {
	recognize:function(pileCode,callback) {
		exec(callback, callback, "scan", "recognize", [pileCode]);
	}
};
module.exports = scan;
