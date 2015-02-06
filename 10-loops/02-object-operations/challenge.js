module.exports.copy = function (obj) {
	var newObj = {};
	for (var key in obj) {
		newObj[key] = obj[key];
	}
	return newObj;
};

module.exports.extend = function (obj1, obj2) {
	for (var key in obj2) {
		obj1[key] = obj2[key];
	}
	return obj1;
};

module.exports.hasElems = function (obj, keys) {
  var returnVar = true;

  for (var i = 0; i < keys.length; i++) {
    if (! obj.hasOwnProperty(keys[i])) {
      returnVar = false;
    }
  }

  return returnVar;
};