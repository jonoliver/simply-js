// A generator is a special function
// in which the execution can be paused,
// yielded to the function caller, and then resumed later.
// Generators are specified with an `*`:
function *myGenerator() {
  // the `yield` stops the function
  // the yielded value `2` can be used by the caller of the function
  console.log('executing until first yield');
  yield 'first yield';
  console.log('executing until second yield');
  yield 'second yield';
  console.log('executing until return');
  return 'return value';
}

// generator functions do not execute immediately when invoked
let gen1 = myGenerator()
// instead, the return a Generator object
console.log(gen1)

// Generators are iterable, and provide the same interface as an Iterable:
console.log(gen1.next()) // { value: 'first yield', done: false }
console.log(gen1.next()) // { value: 'second yield', done: false }
console.log(gen1.next()) // { value: 'return value', done: true }

// Generators can also be iterated using a for...of loop:
let gen2 = myGenerator()
for (let value of gen2) {
  console.log(value)
}
