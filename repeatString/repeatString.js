const repeatString = function(string, howManyTimes) {
	let newString = string;
	if (howManyTimes < 0) {
		newString = "ERROR";
	}
	else if (howManyTimes == 0) {
		 newString = "";
	}
	else {
		for (let i = 1; i < howManyTimes; i++) {
			newString = newString + string;

		}
	}

	return newString;
};

module.exports = repeatString
