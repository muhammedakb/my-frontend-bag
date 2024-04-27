function* generatorFunc() {
  yield '😂';
  console.log('First log');
  yield '💅🏼';
  console.log('Second log');
  return 'Done!';
}

const generatorObj = generatorFunc();

console.log(generatorObj.next());
// { value: '😂', done: false }

console.log(generatorObj.next());
// First log
// { value: '💅🏼', done: false }

console.log(generatorObj.next());
// Second log
// { value: 'Done!', done: true }

// Bir generator objesini yalnızca bir kere iterate edebiliyoruz.
// Bir kere daha next metodunu çağırırsak -> Sadece sonsuza kadar undefined döner.
// Eğer tekrar iterate etmek istiyorsanız, yeni bir generator objesi oluşturmanız gerekecek!

// ------------------------------------------------------------------------------------------

function* createFlow() {
  const num = 10;
  const newNum = yield num;
  yield 5 + newNum;
  yield 6;
}

const returnNextElement = createFlow();
const element1 = returnNextElement.next();
const element2 = returnNextElement.next(2); // burada geçilen parametre yield ifadesinin sağındaki değere atanır
const element3 = returnNextElement.next();

console.log('element1', element1); // 10
console.log('element2', element2); // 5 + 2 = 7
console.log('element3', element3); // 6
