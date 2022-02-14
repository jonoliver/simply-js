// A Promise is an object that returns a value...eventually.
// It's like placing an order at a deli
// and recieving a ticket with your order number.
let ticket = Promise.resolve('my sandwich')
// the Promise eventually "resolves" to a value.
// The ticket is a "promise" that will resolve to "my sandwich" when it's ready
console.log(ticket)

// with our ticket promise, we can give some instructions
// on what to do with our sandwich when it's ready:
ticket.then(sandwich => console.log('Eat', sandwich))

// we don't have to wait for our sandwich to be finished,
// we can continue shopping while our order is being prepared
console.log('lalala just doing some shopping!')
console.log("notice that this logs before we eat the sandwich!");

// this is because promises execute "asynchronously"
// this is also called "non-blocking",
// because it doesn't block subsequent code from executing.

// We don't eat sandwiches in webapps, unfortunately.
// But we DO consume data! from APIs! Asynchronously!
// When we use `fetch`, we're asking for a promise.
// See ./fetch.js for more...

// What if there's a problem with our order?
// The promise gets rejected.
let badOrder = Promise.reject('ingredients out of stock')
badOrder
  .then(sandwich => console.log('never got my', sandwich)) // this line never logs
  .catch(error => console.log('Error:', error)) // this line logs instead

// Above, we used `Promise.resolve` and `Promise.reject` to create our promises.
// That makes them resolve / reject immediately,
// which is useful for examples and tests,
// but let's look at a more useful way to create a promise.

// the function we pass to the new Promise tells it what to do.
// we could do something like fetching data, but in this example
// we'll simulate a wait for our sandwich:
let deferredSandwich = new Promise((resolve, reject) => {
  // the above arguments are ALSO functions, provided by the promise,
  // that we can call when our action succeeds or fails, respectively.

  // let's wait for 2 seconds before serving our sandwich (resolving the Promise)
  setTimeout(() => resolve('ding! sandwich is done!'), 2000)

  // we can also reject the promise if something goes wrong.
  // uncomment the line below to try it:
  // if ('bad stuff') reject('oh noes!')
  // if you uncomment the line above, the promise will never resolve.
})

deferredSandwich.then(console.log).catch(console.log)

// the `then` method of a Promise also returns a Promise.
let myWrappedSandwich = Promise.resolve({ wrapper: 'my unwrapped sandwich' })
console.log('`then` returns a pending promise:', myWrappedSandwich.then(x => x))

// this means that you can chain multiple async operations together:
myWrappedSandwich
  // "unwrap" the sandwich by accessing the underlying value:
  .then(wrappedSandwich => wrappedSandwich.wrapper)
  // the value returned from the previous `then` is passed to the next one:
  .then(sandwich => console.log('Eat', sandwich))
