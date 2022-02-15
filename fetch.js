// fetch has been available in the browser for a while,
// but only recently did node make fetch happen.
// fetch is still experimental in node as of Feb 14 2022
// with node ^17.5, run it with: `node --experimental-fetch promise.js`
fetch('https://dog.ceo/api/breeds/list/all')
  // log the raw response, then convert it to json
  .then(response => console.log(response) || response.json())
  .then(console.log);
