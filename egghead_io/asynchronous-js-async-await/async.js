// write an asynchronous function with async/await
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

async function showGithubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const user = await response.json();
  console.log(user.name);
  console.log(user.location);
}

showGithubUser("muhammedakb");
