const removeFromArray = function(array) {
    let arrayIndex;
    for (let i = 1; i < arguments.length; i++) {
        arrayIndex = array.indexOf(arguments[i]);
        if (arrayIndex == -1) {
            continue;
        }
        array.splice(arrayIndex, 1);
    }
    return array;
}

module.exports = removeFromArray
