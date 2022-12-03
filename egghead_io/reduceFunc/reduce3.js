// Use reduce to filter() and map() over large datasets
const data = [1, 2, 3];

const doubled = data.reduce((acc, value) => {
  acc.push(value * 2);
  return acc;
}, []);

// [].map()
console.log("My doubled data:", doubled);

const data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evens = data2.reduce((acc, value) => {
  if (value % 2 === 0) {
    acc.push(value);
  }
  return acc;
}, []);

// [].filter()
console.log("evens", evens);

const filterMapped = data2
  .filter((value) => value % 2 === 0)
  .map((value) => value * 2);

// -------------------------------------------

let bigData = [];

for (var i = 0; i < 1000000; i++) {
  bigData.push(i);
}

// bu işlem ilk önce 1 milyon veriyi filtreliyor geriye 500 000 veri kalıyor
// sonra kalan 500 000 veriyi 2 ile çarpıp yeni array'i dönüyor
console.time("bigData");
const filterMappedBigData = bigData
  .filter((value) => value % 2 === 0)
  .map((value) => value * 2);
console.timeEnd("bigData");

// burada ise tek seferde 2 işlemi yaparak daha performanslı çalışıyor
console.time("bigDataReduce");
const reducedBigData = bigData.reduce((acc, value) => {
  if (value % 2 === 0) {
    acc.push(value * 2);
  }
  return acc;
}, []);
console.timeEnd("bigDataReduce");
