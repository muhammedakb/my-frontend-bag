import fetch from "node-fetch";

/*
function showGithubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  fetch(url)
    .then((res) => res.json())
    .then((user) => {
      console.log(user.name);
      console.log(user.location);
    });
}
*/

// -----------------------------------------------------------------------

/*
async function showGithubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const user = await response.json();
  console.log(user.name);
  console.log(user.location);
}

showGithubUser("muhammedakb");
*/

// -----------------------------------------------------------------------

/*
async function showGithubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  return await response.json();
}

showGithubUser("muhammedakb").then((user) => {
  console.log(user.name);
  console.log(user.location);
});
*/

// -----------------------------------------------------------------------

/*
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
*/

// -----------------------------------------------------------------------

/*
async function fetchGithubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const body = await response.json();
  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body;
}

async function showGithubUser(handle) {
  try {
    const user = await fetchGithubUser(handle);
    console.log(user.name);
    console.log(user.location);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

showGithubUser("askldfjasdk");
*/

// -----------------------------------------------------------------------

async function fetchFromGithub(endpoint) {
  const url = `https://api.github.com${endpoint}`;
  const response = await fetch(url);
  return await response.json();
}

async function showUserAndRepos(handle) {
  const user = await fetchFromGithub(`/users/${handle}`);
  const repos = await fetchFromGithub(`/users/${handle}/repos`);

  console.log(user.name);
  console.log(`${repos.length} repos`);
}

showUserAndRepos("muhammedakb");
