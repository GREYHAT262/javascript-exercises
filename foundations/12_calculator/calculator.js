const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	return nums.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function(nums) {
  return nums.reduce((acc, curr) => acc * curr, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	let product = 1;
  for (i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
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
