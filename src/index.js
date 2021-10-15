const left = document.getElementById("left");
const right = document.getElementById("right");
const up = document.getElementById("up");
const down = document.getElementById("down");
const img = document.getElementById("img");
const url = document.getElementById("url");
const form = document.getElementById("form");
const root = document.documentElement;

const rotate = (degrees) => {
  let deg = 0;

  return {
    rotation: () => {
      deg = (deg + degrees) % 360;
      return root.style.setProperty("--rotate", `${deg}deg`);
    },
  };
};

left.addEventListener("click", () => rotate(90).rotation());
up.addEventListener("click", () => rotate(180).rotation());
right.addEventListener("click", () => rotate(270).rotation());
down.addEventListener("click", () => rotate(360).rotation());

form.addEventListener("submit", (e) => {
  e.preventDefault();
  img.src = `${url.value}`;
});

img.addEventListener("error", () => {
  img.src = "./images/240866381_588969405448464_9124096032378166985_n.jpg";
  alert("error");
});
