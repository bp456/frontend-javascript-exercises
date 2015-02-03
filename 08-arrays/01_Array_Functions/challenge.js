module.exports.reversePlusOne = function (a) {
	a.push(1);
	a.reverse();
	return a;
	
};

module.exports.plusesEverywhere = function (a) {
return a.join('+');
};


module.exports.arrayQuantityPlusOne = function (a) {
	return a.length + 1;

};