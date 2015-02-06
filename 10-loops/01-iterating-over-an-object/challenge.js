module.exports.getKeys = function (obj) {
	var keys = [];
	for (var i in obj) {
		keys.push(i);
	}
	return keys;
};

module.exports.getValues = function (obj) {
	var val = [];
	for (var i in obj) {
		val.push(obj[i]);
	}
	return val;
};

module.exports.objectToArray = function (obj) {
	var retArray = [];
	for (var key in obj) {
		retArray.push(key + ' is ' + obj[key]);
	}
	return retArray;
};