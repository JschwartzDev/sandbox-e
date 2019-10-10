let buttonsList = document.getElementsByTagName("button");
let header = document.getElementById("header");
let body = document.getElementsByTagName("body");
let aside = document.getElementById("navAside");
let controlPanel = document.getElementById("controlPanel");
let main = document.getElementById("main");
let footer = document.getElementById("footer");

let defaultColor = "#96418a";

let elementsList = [header, footer, main, aside, body[0]];

let resetBtn = document.getElementById("colorReset");

let getNewColor = function() {
  let rand1 = parseInt(Math.random() * 10);
  let rand2 = parseInt(Math.random() * 10);
  let rand3 = parseInt(Math.random() * 10);

  let newColor = `#${rand1}${rand2}${rand3}`;
  return newColor;
};

buttonsList[0].addEventListener("click", () => {
  header.style.backgroundColor = getNewColor();
  body[0].style.backgroundColor = getNewColor();
});

buttonsList[1].addEventListener("click", () => {
  aside.style.backgroundColor = getNewColor();
});

buttonsList[2].addEventListener("click", () => {
  main.style.backgroundColor = getNewColor();
});

buttonsList[4].addEventListener("click", () => {
  footer.style.backgroundColor = getNewColor();
});

resetBtn.addEventListener("click", () => {
  elementsList.forEach(el => {
    colorReset(el);
  });
});

let colorReset = function(el) {
  el.style.backgroundColor = defaultColor;
};
