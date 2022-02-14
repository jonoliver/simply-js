// `call` and `apply` are methods to call a function
// that allow the caller to set value of `this` inside of the function
function cool() {
  console.log(this)
}
cool() // this === globalThis

const newContext = { wow: 'a new object' }
// both functions accept the new context as the first argument
cool.call(newContext) // this === newContext
cool.apply(newContext) // this === newContext

// This does NOT work with arrow functions
// because arrow functions have no concept of this.
const coolArrowFunction = () => console.log(this)
// In arrow functions, `this` always refers to scope
// outside of the arrow function.
coolArrowFunction.call(newContext)  // this === globalThis still
coolArrowFunction.apply(newContext) // this === globalThis still

// the only difference between `call` and `apply`
// is how they handle subsequent arguments
function functionWithArgs(arg1, arg2) {
  console.log({ arg1, arg2 })
}
// apply accepts a single array as the second argument
// and "applies" each item in the array
// as a subsequent argument to the function
functionWithArgs.apply(this, ['oh', 'hi']) // logs { arg1: 'oh', arg2: 'hi' }

// after the first argument,
// call accepts an unlimited number of arguments
// and "calls" the function, subsequently applying each argument
// thus, this is equivalent to the `apply` example above:
functionWithArgs.call(this, 'oh', 'hi') // also logs { arg1: 'oh', arg2: 'hi' }

// pro-tip: try using `apply` with a function
// that doesn't normally accept an array.
// For example, Math.min and Math.max
// both accept an unlimited number of arguments.
// We can use `apply` to get the min/max from an array:
console.log(
  Math.min.apply(Math, [1, 2, 3]), // logs 1
  Math.max.apply(Math, [1, 2, 3])  // logs 3
)

// see ./bind.js to understand the related `bind` method
// which also allows the function's `this` to be changed
// but returns a new function instead