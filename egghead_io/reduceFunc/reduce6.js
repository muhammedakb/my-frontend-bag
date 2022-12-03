// learn to flatten and flatmap arrays with reduce
const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const flattenedData = data.reduce((acc, value) => acc.concat(value), []);
// console.log(flattenedData);

const input = [
  {
    title: "Batman Begins",
    year: 2005,
    cast: [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes",
      "Gary Oldman",
      "Cillian Murphy",
    ],
  },
  {
    title: "The Dark Knight",
    year: 2008,
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhal",
      "Gary Oldman",
      "Morgan Freeman",
    ],
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    cast: [
      "Christian Bale",
      "Tom Hardy",
      "Joseph Gordon-Levitt",
      "Anne Hathaway",
      "Marion Cotillard",
      "Michael Caine",
      "Gary Oldman",
      "Morgan Freeman",
    ],
  },
];

const stars = input.reduce((acc, value) => acc.concat(value.cast), []);

console.time("withSet");
const zart = [...new Set(stars)];
console.timeEnd("withSet");

// console.log(stars);
// console.log(zart);

console.time("withReduce");
const zartStarts = input.reduce((acc, value) => {
  value.cast.forEach((star) => {
    if (!acc.includes(star)) {
      acc.push(star);
    }
  });
  return acc;
}, []);
console.timeEnd("withReduce");

// console.log("FORTUNAYTIIIII", zartStarts);

const numbers = [1, 2, 3, 4, "5"];
const sum = numbers.reduceRight((acc, value, index) => {
  console.log("index", index);
  return acc + value;
}, 0);

console.log("sum", sum);
