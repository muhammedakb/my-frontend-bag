function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    console.log('counter: ', counter);
  }
  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction(); //counter:  1
myNewFunction(); //counter:  2
