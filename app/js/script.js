const btn = document.getElementById("btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeEls = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeEls.forEach((el) => {
      el.classList.remove("fade-in");
      el.classList.add("fade-out");
    });
  } else {
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeEls.forEach((el) => {
      el.classList.add("fade-in");
      el.classList.remove("fade-out");
    });
  }
});
