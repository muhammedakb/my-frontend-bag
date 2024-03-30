function printHello() {
  console.log('Hello');
}

function printHi() {}

setTimeout(printHello, 0);

printHi();

console.log('me first');
console.log('me first');
console.log('me first');
console.log('me first');
console.log('me first');
console.log('me first');
console.log('me first');
console.log('me first');
console.log('me first');
console.log('me first');
console.log('me first');
console.log('me first');
console.log('me first');
console.log('me first');
console.log('me first');
console.log('me first');
console.log('me first');
console.log('me first');
console.log('me first');

// setTimeout -> web api'nin özelliği javascriptin değil !

// 0 ms değerini geçsek bile, alttaki bütün işlemler gerçekleştikten sonra setTimeout içerisindeki fonksiyon çalıştırılır!
// Bu javascript'in single thread bir dil olmasından kaynaklı.
