// Closures are used to encapsulate data or functionality in JavaScript.

// functions can access variables outside of themselves:
let outerVar = 'some value'
function readVar() {
  return outerVar;
}
console.log(readVar()) // logs 'some value'

// welp, that was pretty pointless.
// we could have just read outerVar directly, right?
console.log(outerVar) // also logs 'some value'

// BUT... what if we encapsulate the above into a function?
function encapsulate() {
  let encapsulatedVar = 'some ENCAPSULATED value!'
  function readHiddenVar() {
    return encapsulatedVar;
  }
  // let's return the readHiddenVar function!
  return { readHiddenVar }
}

// encapsulatedVar is not accessible,
// in fact, it will throw an error!
  try {
  console.log(encapsulatedVar);
} catch (error) {
  console.warn(error.message) // encapsulatedVar is not defined
}

// Is encapsulatedVar lost forever? No!
// Our `readHiddenVar` function still has access to it!
// Thankfully, we returned that function from `encapsulate`!
let hiddenVar = encapsulate().readHiddenVar()
console.log(hiddenVar) // some ENCAPSULATED value!

// when we invoke an INNER function (readHiddenVar)
// to access a variable (hiddenVar)
// that is inside of an OUTER function (encapsulate)
// THAT IS CALLED A CLOSURE!
