// avoid common mistakes when working with reduce
const data = [1, 2, 3, 4];

const sumReducer = (acc, value) => acc + value;

// initial value vermedik, doğru çalıştı
// initial value olarak arraydeki ilk değeri(data[0]) sayar
const sum = data.reduce(sumReducer);

// console.log(sum)

const votes = ["vote1", "vote2", "vote1", "vote2"];

const votesReducer = (acc, value) => {
  if (acc[value]) {
    acc[value] = acc[value] + 1;
  } else {
    acc[value] = 1;
  }
  return acc;
};

const tally = votes.reduce(votesReducer, {});

console.log(tally);
