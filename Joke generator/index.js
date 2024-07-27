const jokeConatiner = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist,explicit&type=single";
let getjoke = () => {
  jokeConatiner.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeConatiner.textContent = `${item.joke}`;
      jokeConatiner.classList.add("fade");
    });
};
btn.addEventListener("click", getjoke);
getjoke();
