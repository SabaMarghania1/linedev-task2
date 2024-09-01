function createCounter() {
  let counter = 0;

  return {
    increment() {
      counter++;
      return counter;
    },
    decrement() {
      counter--;
      return counter;
    },
    reset() {
      counter = 0;
      return counter;
    },
  };
}

const counter = createCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
