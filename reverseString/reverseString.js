const reverseString = function(string) {
    let splitString = string.split("");
    splitString = splitString.reverse();
    let reversedString = splitString.join("");
    return reversedString;
}

module.exports = reverseString
