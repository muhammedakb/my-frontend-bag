// Stacks

// last in first out (LIFO)

function createStack() {
  const array = [];

  return {
    // push
    push(item) {
      array.push(item);
    },
    // pop
    pop() {
      return array.pop();
    },
    // peek
    peek() {
      return array[array.length - 1];
    },
    // length
    get length() {
      return array.length;
    },
    // isEmpty
    isEmpty() {
      return array.length === 0;
    },
  };
}

const lowerBodyStack = createStack();

lowerBodyStack.push('underwear');
lowerBodyStack.push('socks');
lowerBodyStack.push('pants');
lowerBodyStack.push('shoes');

console.log(lowerBodyStack.peek());
