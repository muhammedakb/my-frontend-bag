// CHALLENGE 1
function createFunction() {
  return function innerFunc() {
    console.log('hello');
  };
}

// /*** Uncomment these to check your work! ***/
//const function1 = createFunction();
//function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
  return function innerPrinter() {
    console.log(input);
  };
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {
  return function add(y) {
    return x + y;
  };
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9

// CHALLENGE 4
function once(func) {
  return function innerOnce(param) {
    return func(param);
  };
}

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6

// CHALLENGE 5
function after(count, func) {
  let counter = 0;
  return function innerAfter() {
    counter++;
    if (counter === count) {
      func();
    }
  };
}

// /*** Uncomment these to check your work! ***/
const called = function () {
  console.log('hello');
};
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

// CHALLENGE 6
function delay(func, wait) {
  setTimeout(func, wait);
}

// CHALLENGE 7
function rollCall(names) {
  let counter = 0;
  return function caller() {
    if (counter >= names.length) {
      console.log('Everyone accounted for');
    } else {
      console.log(names[counter]);
      counter++;
    }
  };
}

// /*** Uncomment these to check your work! ***/
//const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth', "Niyazi"])
//rollCaller() // => should log 'Victoria'
//rollCaller() // => should log 'Juan'
//rollCaller() // => should log 'Ruth'
//rollCaller() // => should log 'Everyone accounted for'

// CHALLENGE 8
function saveOutput(func, magicWord) {
  const resultsObj = {};
  return function logger(parameter) {
    if (typeof parameter === 'number') {
      const result = func(parameter);
      resultsObj[parameter] = result;
      return result;
    } else if (typeof parameter === 'string') {
      return resultsObj;
    }
  };
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
//console.log(multBy2AndLog(2)); // => should log 4
//console.log(multBy2AndLog(9)); // => should log 18
//console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

// CHALLENGE 9
function cycleIterator(array) {
  let index = -1;
  return function logElement() {
    if (index + 1 < array.length) index++;
    else index = 0;
    return array[index];
  };
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
//console.log(getDay()); // => should log 'Fri'
//console.log(getDay()); // => should log 'Sat'
//console.log(getDay()); // => should log 'Sun'
//console.log(getDay()); // => should log 'Fri'

// CHALLENGE 10
function defineFirstArg(func, arg) {
  return function inner(small) {
    return func(arg, small);
  };
}

// /*** Uncomment these to check your work! ***/
const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
//console.log(subFrom20(5)); // => should log 15

// CHALLENGE 11
function dateStamp(func) {
  return function inner(arg) {
    const result = { date: Date(), output: func(arg) };
    return result;
  };
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp((n) => n * 2);
//console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
//console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// CHALLENGE 12
function censor() {
  const changes = {};
  return function changer(target, newValue) {
    if (target && newValue) {
      changes[target] = newValue;
    }

    if (target && !newValue) {
      let result = target;
      Object.keys(changes).forEach((key) => {
        result = result.replace(key, changes[key]);
      });
      return result;
    }
  };
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor;
//changeScene('dogs', 'cats');
//changeScene('quick', 'slow');
//console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'

// CHALLENGE 13
function createSecretHolder(secret) {
  let value = secret;
  return {
    getSecret: () => {
      console.log(value);
    },
    setSecret: (arg) => {
      value = arg;
    },
  };
}

// /*** Uncomment these to check your work! ***/
const obj = createSecretHolder(5);
//obj.getSecret() // => returns 5
//obj.setSecret(2)
//obj.getSecret() // => returns 2

// CHALLENGE 14
function callTimes() {
  let counter = 0;
  return function inner() {
    counter++;
    console.log(counter);
  };
}

// /*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
//myNewFunc1(); // => 1
//myNewFunc1(); // => 2
//myNewFunc2(); // => 1
//myNewFunc2(); // => 2

// CHALLENGE 15
function roulette(num) {
  let counter = 1;
  return function player() {
    if (counter === 0) return 'pick a number to play again';
    if (counter !== num) {
      counter++;
      return 'spin';
    }
    counter = 0;
    return 'win';
  };
}

// /*** Uncomment these to check your work! ***/
const play = roulette(3);
//console.log(play()); // => should log 'spin'
//console.log(play()); // => should log 'spin'
//console.log(play()); // => should log 'win'
//console.log(play()); // => should log 'pick a number to play again'
//console.log(play()); // => should log 'pick a number to play again'

// CHALLENGE 16
function average() {
  let total = 0;
  let counter = 0;
  return function handleAverage(num) {
    if (typeof num === 'number') {
      total += num;
      counter++;
      return total / counter;
    }
    return counter === 0 ? 0 : total / counter;
  };
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
//console.log(avgSoFar()); // => should log 0
//console.log(avgSoFar(4)); // => should log 4
//console.log(avgSoFar(8)); // => should log 6
//console.log(avgSoFar()); // => should log 6
//console.log(avgSoFar(12)); // => should log 8
//console.log(avgSoFar()); // => should log 8

// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  let tests = arrOfTests;
  return function handleTest(callback) {
    return tests.every((values) => callback(values[0]) === values[1]);
  };
}

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = (str) => str.toUpperCase();
const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
//console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
//console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// CHALLENGE 18
function makeHistory(limit) {
  const histories = [];
  return function handleAction(action) {
    if (action !== 'undo') {
      if (histories.length === limit) {
        histories.shift();
      }
      histories.push(action);
      return `${action} done`;
    } else {
      if (histories.length > 0) {
        const lastEl = histories.pop();
        return `${lastEl} undone`;
      }
      return 'nothing to undo';
    }
  };
}

// /*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
//console.log(myActions('jump')); // => should log 'jump done'
//console.log(myActions('undo')); // => should log 'jump undone'
//console.log(myActions('walk')); // => should log 'walk done'
//console.log(myActions('code')); // => should log 'code done'
//console.log(myActions('pose')); // => should log 'pose done'
//console.log(myActions('undo')); // => should log 'pose undone'
//console.log(myActions('undo')); // => should log 'code undone'
//console.log(myActions('undo')); // => should log 'nothing to undo'

// CHALLENGE 19
function blackjack(array) {}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
