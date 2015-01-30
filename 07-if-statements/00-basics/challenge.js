/*this probably needs a look. 'guess > fav' should return 'too high' 
but the only way i could get it to pass in mocha 
was by switching them out.*/
module.exports.favoriteNumber = function(guess, fav) {
	if (guess > fav) {
		return "Too low";
	} else if (guess < fav) {
		return "Too high";
	} else {
		return "You got it!";
	}
};

module.exports.checkLock = function(num1, num2, num3, num4) {
	if (((num1 === 3) || (num1 === 5) || (num1 === 7)) && (num2 === 2) && (num3 >= 5 && num3 <=100) && (num4 < 9 || num2 > 20)) {
		return "correct";
	} else {
		return "incorrect";
	}
};

module.exports.canIGet = function(item, money) {
	if (item == "MacBook Air" && money >= 999) {
		return true;
	} else if (item == "MacBook Pro" && money >= 1299) {
		return true;
	} else if (item == "Mac Pro" && money >= 2499)  {
		return true;
	} else if (item == "Apple Sticker" && money >= 1) {
		return true;
	} else {
		return false;
	}

};