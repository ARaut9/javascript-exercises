const ftoc = function(fahrenheit) {
  let cel = (fahrenheit - 32) * 5 / 9;
  return Math.round(cel * 10) / 10;
}

const ctof = function(celsius) {
  let fah = celsius * 9 / 5 + 32;
  return Math.round(fah * 10) / 10;;
}

module.exports = {
  ftoc,
  ctof
}
