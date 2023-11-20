// preloder
setTimeout(() => {
  document.getElementById("preloder").classList.add("d-none");
  document.body.classList.remove("overflow-hidden");
}, 2500);
//back to top
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("back-to-top");

  // Show the button when the user scrolls down 200px from the top
  window.onscroll = function () {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };

  // Scroll back to the top when the button is clicked
  button.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
});
//nav-bar
let nav = document.querySelector(".nav");
let menubar = document.querySelector(".mobile-view");
let loadtake = document.querySelector(".nav-logo");
let finish = document.querySelectorAll(".finish");
let overlay = document.querySelector(".over-layer");
let bgbody = document.querySelector(".bg-bodys");
let span1 = document.querySelector(".line1");
let span2 = document.querySelector(".line2");
let span3 = document.querySelector(".line3");
nav.addEventListener("click", function () {
  menubar.classList.toggle("left-0");
  nav.classList.toggle("cross-bg");
  nav.classList.toggle("nav-2");
  span1.classList.toggle("nav1");
  span2.classList.toggle("nav2");
  span3.classList.toggle("nav3");
  overlay.classList.toggle("left-0");
  bgbody.classList.toggle("over-flow");
});
overlay.addEventListener("click", function () {
  menubar.classList.toggle("left-0");
  span1.classList.toggle("nav1");
  nav.classList.toggle("cross-bg");
  span2.classList.toggle("nav2");
  span3.classList.toggle("nav3");
  overlay.classList.toggle("left-0");
  bgbody.classList.toggle("over-flow");
});
finish.forEach((e) => {
  e.addEventListener("click", function () {
    menubar.classList.remove("left-0");
    span1.classList.toggle("nav1");
    nav.classList.toggle("cross-bg");
    span2.classList.toggle("nav2");
    span3.classList.toggle("nav3");
    bgbody.classList.remove("over-flow");
    overlay.classList.toggle("left-0");
    span2.classList.toggle("nav2");
    span3.classList.toggle("nav3");
  });
});
