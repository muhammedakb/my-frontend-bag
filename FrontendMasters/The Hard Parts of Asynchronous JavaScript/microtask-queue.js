function display(data) {
  console.log(data);
}
function printHello() {
  console.log('Hello');
}
function blockFor300ms() {
  // blocks js thread for 300ms with long for loop
  for (let i = 0; i < 3000; i++) {}
}

setTimeout(printHello, 0);

const futureData = fetch('https://jsonplaceholder.typicode.com/todos/1');
futureData.then(display);

blockFor300ms();

// Which will run first?
console.log('Me first!');
