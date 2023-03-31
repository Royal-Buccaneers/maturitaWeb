
const header = document.querySelector("nav .container");
const headerImg = document.querySelector(".logo img");
const links = document.querySelectorAll(".links a");

window.addEventListener("scroll", () => {
  var scroll = window.scrollY;
  if (scroll > 400) {
    header.style.height = "3rem";
    headerImg.style.width = "100px";
    links.forEach((elem) => {
      elem.style.fontSize = "0.8rem";
    });
  } else {
    header.style.height = "4rem";
    headerImg.style.width = "175px";
    links.forEach((elem) => {
      elem.style.fontSize = "0.9rem";
    });
  }
});