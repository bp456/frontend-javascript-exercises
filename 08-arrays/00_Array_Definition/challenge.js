module.exports.newArray = function (arg1, arg2, arg3, arg4) {
	return [arg1, arg2, arg3, arg4];
};

module.exports.firstAndLast = function (pizza) {
	var lastElementIndex = pizza.length - 1;
	return [pizza[0], pizza[lastElementIndex]];
};