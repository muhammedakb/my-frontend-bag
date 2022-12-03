// Transform an array into a single value using reduce
const data = [15, 2, 7];

const reducer = function (accumulator, item) {
  console.log(`accumulator : ${accumulator}, item : ${item}`);
  return accumulator + item;
};

const initialValue = 6;

const total = data.reduce(reducer, initialValue);

console.log("The sum is", total);
