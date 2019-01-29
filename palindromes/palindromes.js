const palindromes = function(string) {
    string = string.replace(/[^\w]|_/g, "").toLowerCase();
    let reversedString = reverseString(string);
    if (reversedString === string) {
        return true;
    } else {
        return false;
    }
}

const reverseString = function(string) {
    let splitString = string.split("");
    splitString = splitString.reverse();
    let reversedString = splitString.join("");
    return reversedString;
}

module.exports = palindromes
