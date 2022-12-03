// use the optional reduce arguments
const data = [1, 2, 3, 3, 4, 5, 3, 1];

const mean = data.reduce((acc, value, index, array) => {
  //   console.log("acc", acc);
  //   console.log("value", value);
  //   console.log("index", index);
  //   console.log("array", array);
  const intermediaryValue = acc + value;

  if (index === array.length - 1) {
    return intermediaryValue / array.length;
  }
  return intermediaryValue;
}, 0);

console.log("MEAN", mean);
