const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (arr) {
  return arr.reduce((total, current) => total + current, 0)
};

const multiply = function (arr) {
  return arr.reduce((multiply, item) => multiply * item
    , 1)

};

const power = function (a, b) {
  return a ** b
};

const factorial = function (num) {
  let factorial = 1
  for (let i = num; i >= 1; i--) {
    factorial = factorial * i
  }
  return factorial
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
