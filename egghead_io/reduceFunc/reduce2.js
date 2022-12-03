// reduce an array into a single object 

const votes = [
  "angular",
  "angular",
  "react",
  "react",
  "react",
  "angular",
  "ember",
  "react",
  "vanilla",
];

// const initialValue = {};

// const reducer = function (tally, vote) {
//   console.log("tally", tally);
//   console.log("vote", vote);
//   if (!tally[vote]) {
//     tally[vote] = 1;
//   } else {
//     tally[vote] += 1;
//   }
//   return tally;
// };

// const result = votes.reduce(reducer, initialValue);

const result = votes.reduce((tally, vote) => {
  !tally[vote] ? (tally[vote] = 1) : (tally[vote] += 1);
  return tally;
}, {});

console.log(result);
