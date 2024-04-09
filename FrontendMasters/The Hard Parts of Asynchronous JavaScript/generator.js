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
