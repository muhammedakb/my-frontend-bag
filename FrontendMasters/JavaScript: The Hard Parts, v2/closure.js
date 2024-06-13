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

const anotherFunction = outer();
anotherFunction(); //counter:  1
anotherFunction(); //counter:  2

/* Closure fonksiyonlarımıza kalıcı bellekler ve profesyonel kod yazmak için yepyeni bir araç seti sunar.

Helper Functions: 'once' ve 'memoize' gibi günlük profesyonel helper fonksiyonlar
Iterators & Generators: JavaScript'te verileri işleme konusunda en modern kalıpları elde etmek için lexical scope ve closure kullanan
Module Pattern: Global namespace'i kirletmeden bir uygulamanın ömrü boyunca state'i koruyun
Asynchronous JavaScript: Callback'ler ve Promise'ler, asenkron bir ortamda state'i korumak için closure'a güvenir.
*/
