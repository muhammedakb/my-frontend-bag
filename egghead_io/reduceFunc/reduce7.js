// compose functions with reduce
const increment = (input) => input + 1;
const decrement = (input) => input - 1;
const double = (input) => input * 2;
const halve = (input) => input / 2;

const initialValue = 1;

const pipeline = [
  increment,
  increment,
  increment,
  double,
  increment,
  increment,
  halve,
];

const finalValue = pipeline.reduce((acc, fn) => fn(acc), initialValue);

console.log(finalValue);
