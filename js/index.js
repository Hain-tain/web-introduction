import { MOVIES } from "./data/movies.js";

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const checked = document.querySelectorAll("input[type='checkbox']:checked");

  alert(`${name.value}님, 저와 ${checked.length}개의 취향이 같으시네요!`);

  checked.forEach((el) => (el.checked = false));
  name.value = "";
});

const cancelButton = document.getElementById("cancel");

cancelButton.addEventListener("click", (e) => {
  e.preventDefault();

  const checks = document.querySelectorAll("input[type='checkbox']");

  checks.forEach((el) => (el.checked = false));
});

const bestMovies = document.getElementById("best-movie");

const movies = Object.keys(MOVIES).map((movie) => {
  const poster = document.createElement("img");
  poster.setAttribute("src", movie.img);
});
