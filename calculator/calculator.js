function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (a) {
	let sum = 0;
	for(let i = 0; i < a.length; i++) {
		sum += a[i];
	}
	return sum;
}

function multiply (a) {
	let total = 1;
	for(let i = 0; i < a.length; i++) {
		total *= a[i];
	}
	return total;
}

function power(a, b) {
	let pow = 1;
	for(let i = 0;i < b; i++){
		pow *= a;
	}
	return pow;
}

function factorial(a) {
	let fact;
	if (a == 0) {
		fact = 1;
	} else {
		fact = a;
	}
	for(let i = a - 1; i > 1; i--) {
		fact = fact * i;
	}
	return fact;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}