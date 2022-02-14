// asynchronous programming in JavaScript
// is based on the concept of a "promise"
// if you're not familiar with promises,
// check out ./promise.js first

// `async` and `await` are keywords
// intended to make promise-based code
// easier to read, write and reason about

// declare an async function
async function cool() {
  return 'cool!'
}

// calling an async function returns a promise
console.log(cool())

// we can get the value asynchronously like a regular promise
cool().then(value => console.log(value, "<- note that this logs out of order (it's async!)")) // cool!

async function wait() {
  // we can also use the await keyword to assign a variable
  const response = await cool()
  console.log(response, "<- also logs out of order (async!)") // cool!
}

wait()
console.log('even though this line appears last, it executes before the async code');


