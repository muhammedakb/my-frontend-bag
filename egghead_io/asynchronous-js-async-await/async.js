import fetch from "node-fetch";

// function showGithubUser(handle) {
//   const url = `https://api.github.com/users/${handle}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((user) => {
//       console.log(user.name);
//       console.log(user.location);
//     });
// }

// -----------------------------------------------------------------------

// async function showGithubUser(handle) {
//   const url = `https://api.github.com/users/${handle}`;
//   const response = await fetch(url);
//   const user = await response.json();
//   console.log(user.name);
//   console.log(user.location);
// }

// showGithubUser("muhammedakb");

// -----------------------------------------------------------------------

// async function showGithubUser(handle) {
//   const url = `https://api.github.com/users/${handle}`;
//   const response = await fetch(url);
//   return await response.json();
// }

// showGithubUser("muhammedakb").then((user) => {
//   console.log(user.name);
//   console.log(user.location);
// });

// -----------------------------------------------------------------------

class GithubApiClient {
  async fetchUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await (await fetch(url)).json();
    return response;
  }
}
// IIFE
(async () => {
  const client = new GithubApiClient();
  const user = await client.fetchUser("muhammedakb");
  console.log(user.name);
  console.log(user.location);
})();
