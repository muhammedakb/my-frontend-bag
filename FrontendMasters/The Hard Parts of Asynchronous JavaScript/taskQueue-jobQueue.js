/*
The Task Queue and the Job Queue (Görev Kuyruğu ve İş Kuyruğu)

JavaScript'in asenkron görevleri işlemek için iki tür kuyruğu bulunur: The Task Queue (görev kuyruğu) ve the Job Queue (iş kuyruğu).

Task Queue (Callback Queue): 
Bu kuyruk, setTimeout, setInterval ve I/O işlemleri tarafından planlanan görevleri içerir. 
Bu kuyruktaki görevler, call stack boş olduğunda işlenir.

Job Queue (Microtask Queue): 
Bu kuyruk, promise'ler ve diğer mikro görevler tarafından planlanan görevleri içerir. 
Bu kuyruktaki görevler, bir sonraki renderleme, I/O işlemi veya zamanlayıcı etkinliğinden önce yürütülür. 
Mikro görevler, makro görevlerden (görev kuyruğundaki görevler) daha yüksek önceliğe sahiptir.
*/

console.log('Start');

// task queue
setTimeout(function () {
  console.log('Timeout');
}, 0);

// Job queue
Promise.resolve().then(function () {
  console.log('Promise');
});

console.log('End');

// OUTPUT
/*
Start
End
Promise
Timeout
*/
