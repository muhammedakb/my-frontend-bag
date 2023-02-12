// type Box<T = string> = {
type Box<T> = {
  name: string;
  content: T;
  //   content: string;
};

// const stringBox: Box = {
const stringBox: Box<string> = {
  name: 'String Box',
  content: 'A string',
};

const numberBox: Box<number> = {
  name: 'Number Box',
  content: 50,
};

console.log(stringBox.content.toUpperCase());
console.log(numberBox.content * 5);

// 1 ve 8. satırlardaki gibide kullanabiliriz
