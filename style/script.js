const hamburger = document.querySelector(".hamburger");
const show = document.querySelector(".show");
const tombolX = document.querySelector(".tombolX");

hamburger.addEventListener("click", function () {
  show.classList.toggle("hidden");
  hamburger.classList.toggle("hidden");
  tombolX.classList.remove("w-[50%]");
  tombolX.classList.toggle("w-[10%]");
  tombolX.classList.toggle("hidden");
  tombolX.classList.toggle("flex");
  tombolX.classList.toggle("justify-end");
  tombolX.classList.toggle("items-center");
});

tombolX.addEventListener("click", function () {
  hamburger.classList.toggle("hidden");
  show.classList.toggle("hidden");
  tombolX.classList.toggle("hidden");
  tombolX.classList.toggle("flex");
  tombolX.classList.toggle("justify-end");
  tombolX.classList.toggle("items-center");
});

