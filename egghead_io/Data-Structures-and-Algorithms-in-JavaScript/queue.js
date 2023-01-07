// Queues (kuyruk)

// first in first out (FIFO)

export function createQueue() {
  const queue = [];

  return {
    // add or enqueue
    enqueue(item) {
      queue.unshift(item);
    },
    // remove or enqueue
    dequeue() {
      return queue.pop();
    },
    // peek
    peek() {
      return queue[queue.length - 1];
    },
    // length
    get length() {
      return queue.length;
    },
    // isEmpty
    isEmpty() {
      return queue.length === 0;
    },
  };
}

const q = createQueue();

q.enqueue('zortinaytii');
q.enqueue('ilaaaaaa');
q.enqueue('babaciiiiiii');

q.dequeue();
q.dequeue();
q.dequeue();
console.log(q.isEmpty());
