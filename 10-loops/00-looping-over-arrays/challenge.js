/* Got some help from stack overflow on these.
i knew to bring in the for loop but would like to go over a 
more in-depth explanation
*/
module.exports.sumNumbers = function(n) {
	var sum = 0;
	for (var i = 0; i < n.length; i++) {
		sum += n[i];
	}
		return sum;
};



module.exports.splitAndLowerCaseString = function (string) {
	return string.toLowerCase().split(',');
		   
	};


module.exports.addIndex = function (a) {
	var empty = [];

	for(var i = 0; i < a.length; i++) {
		empty.push(i + " is " + a[i]);
	}
	return empty;
};
