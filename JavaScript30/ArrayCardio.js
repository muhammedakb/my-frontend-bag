// const category = document.querySelector(".mw-category");

// const links = category.querySelectorAll("a");
// // bu NodeList dönüyor ve NodeList'in __proto__ larında map() bulunmuyor o yüzden bunu
// // map() ile gezemeyiz.

// // gezebilmek için şöyle trickler yapabiliriz.

// const link2 = Array.from(category.querySelectorAll("a"));
// const link3 = [...category.querySelectorAll("a")];

const peoples = [
  "Muhammet Akbulut",
  "Büşra Yunusoğlu",
  "Can Yılmaz",
  "Ayça Sahin",
  "Berkay Ateş",
  "Alperen Akbulut",
  "Selim Can Köstekli",
  "Hayri Korkmaz",
  "Mert Aydoğan",
  "Zafer Faruk Ozdemir",
  "Özgür Yılmaz",
];

const reversePeoples = (people) => people.split(" ").reverse().join(" ");

const result = peoples.map(reversePeoples).sort().map(reversePeoples);

// const result2 = peoples.sort((lastOne, nextOne) => {
//   const [aLast, aFirst] = lastOne.split(" ");
//   const [bLast, bFirst] = nextOne.split(" ");
//   return aFirst > bFirst ? 1 : -1;
// });

console.log(result);
// console.log(result2);

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

const result2 = votes.reduce((tally, vote) => {
  !tally[vote] ? (tally[vote] = 1) : (tally[vote] += 1);
  return tally;
}, {});

console.log(result2);
