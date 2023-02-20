
const add = function(a, b) {
	var suma = a + b;
  return suma;
};

const subtract = function(a, b) {
	var rest = a-b;
  return rest; 
};

const sum = function(num) {
  let total=0;
	for(let i of num) total+=i;
  return total;
};

const multiply = function(num) {
  let total=1;
	for(let i of num) total=total*i;
  return total;
};

const power = function(a, b) {
	var total= a**b;
  return total;
};

const factorial = function(num) {
  if (num === 0 || num === 1)
  return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
