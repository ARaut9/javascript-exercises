const snakeCase = function(string) {
    string = string.replace(/[^\w\s]|_/g, "").toLowerCase();
    string = string.split(" ").join("_");
    return string;
}

module.exports = snakeCase
