const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const show = document.querySelector(".popover");
plus.addEventListener("click", () => {
  show.style.height = "auto";
  plus.style.display = "none";
  minus.style.display = "block";
});

minus.addEventListener("click", () => {
  show.style.height = "0px";
  plus.style.display = "block";
  minus.style.display = "none";
});

// second
const plus01 = document.querySelector(".plus01");
const minus01 = document.querySelector(".minus01");
const show01 = document.querySelector(".popover01");
plus01.addEventListener("click", () => {
  show01.style.height = "auto";
  plus01.style.display = "none";
  minus01.style.display = "block";
});

minus01.addEventListener("click", () => {
  show01.style.height = "0px";
  plus01.style.display = "block";
  minus01.style.display = "none";
});

// theree
const plus1 = document.querySelector(".plus1");
const minus1 = document.querySelector(".minus1");
const show1 = document.querySelector(".popover1");
plus1.addEventListener("click", () => {
  show1.style.height = "auto";
  plus1.style.display = "none";
  minus1.style.display = "block";
});

minus1.addEventListener("click", () => {
  show1.style.height = "0px";
  plus1.style.display = "block";
  minus1.style.display = "none";
});

// four
const plus2 = document.querySelector(".plus2");
const minus2 = document.querySelector(".minus2");
const show2 = document.querySelector(".popover2");
plus2.addEventListener("click", () => {
  show2.style.height = "auto";
  plus2.style.display = "none";
  minus2.style.display = "block";
});

minus2.addEventListener("click", () => {
  show2.style.height = "0px";
  plus2.style.display = "block";
  minus2.style.display = "none";
});
