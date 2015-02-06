module.exports.stream = function(conditionalFn, actionFn) {
	while(conditionalFn()) {
		actionFn();
	}
};
/*got this one mostly right but was causing an infinite loop
till i added the .pop()...had to cheat on this one :(
*/
module.exports.sumNumbers = function(array) {
	var sum = 0;
	while(array.length > 0) {
		sum += array.pop();
	}
	return sum;
};


