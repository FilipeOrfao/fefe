const cube = document.querySelector(".cube");

const frontBtn = document.querySelector(".frontBtn");
const backBtn = document.querySelector(".backBtn");
const rightBtn = document.querySelector(".rightBtn");
const leftBtn = document.querySelector(".leftBtn");
const topBtn = document.querySelector(".topBtn");
const bottomBtn = document.querySelector(".bottomBtn");

const frontCube = document.querySelector(".cube__face--front");
const backCube = document.querySelector(".cube__face--back");
const rightCube = document.querySelector(".cube__face--right");
const leftCube = document.querySelector(".cube__face--left");
const topCube = document.querySelector(".cube__face--top");
const bottomCube = document.querySelector(".cube__face--bottom");

frontBtn.addEventListener("click", () => {
  cube.classList = "cube";
  cube.classList.add("show-front");
});

backBtn.addEventListener("click", () => {
  cube.classList = "cube";
  cube.classList.add("show-back");
});

rightBtn.addEventListener("click", () => {
  cube.classList = "cube";
  cube.classList.add("show-right");
});

leftBtn.addEventListener("click", () => {
  cube.classList = "cube";
  cube.classList.add("show-left");
});

topBtn.addEventListener("click", () => {
  cube.classList = "cube";
  cube.classList.add("show-top");
});

bottomBtn.addEventListener("click", () => {
  cube.classList = "cube";
  cube.classList.add("show-bottom");
});

const verbs = {
  be: { italian: { present: "essere" } },
  have: { italian: { present: "avere" } },
  want: { italian: { present: "volere" } },
  do: { italian: { present: "fare" } },
  say: { italian: { present: "dire" } },
  understand: { italian: { present: "capire" } },
  know: { italian: { present: "sapera" } },
  explain: { italian: { present: "spiegare" } },
  exit: { italian: { present: "uscire" } },
  go: { italian: { present: "andare" } },
  come: { italian: { present: "venire" } },
};

const setupCube = () => {
  const randomVerb = (obj) => Object.keys(obj)[(Math.random() * Object.keys(obj).length) | 0];

  const verb = randomVerb(verbs);

  frontCube.innerHTML = verb;
  rightCube.innerHTML = verbs[verb].italian.present;
};

setupCube();
