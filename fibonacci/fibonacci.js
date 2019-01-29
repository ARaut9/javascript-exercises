const fibonacci = function(num) {
    let temp = 1;
    for (let i = 1; i < num;i++) {
        temp = temp + i;
        console.log(i);
    }
}

module.exports = fibonacci
