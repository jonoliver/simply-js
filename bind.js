// `bind` is a method that can be called on any function
// it returns a new copy of the function,
// but allows you to set the value of `this`
// inside of the new function

function original() {
  console.log(this)
}

original() // this === globalThis

let newThis = { wow: 'a new object' }
let newFunction = original.bind(newThis)
newFunction() // this === newThis

// additional arguments that are passed to `bind`
// will be passed as arguments to the function
// this allows you to apply some arguments when binding the function
// while applying the rest of the arguments when calling the function
// this is called "partial application"

// original function accepts 2 arguments
let multiply = (n1, n2) => n1 * n2

// apply the first argument when binding (passing `2` as the value for `n1`)
let double = multiply.bind(this, 2)

// pass the second argument (passing `10` as the value for `n2`)
console.log(double(10))