// Mobile Links Code

// Variables

let btn = document.querySelector("header .burger-icon");
let ulMLinks = document.querySelector(".mobile-links");
let MLinks = document.querySelectorAll(".mobile-links li a");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  if (btn.classList.contains("active")) {
    ulMLinks.style.left = 0;
  } else {
    ulMLinks.style.left = "100%";
  }
  MLinks.forEach((link) => {
    link.addEventListener("click", () => {
      ulMLinks.style.left = "100%";
      btn.classList.remove("active");
    });
  });
});

// Hidden Class Code

let landing = document.querySelector(".landing");
let hiddens = document.querySelectorAll(".hidden");

window.onload = () => {
  landing.classList.remove("hidden");
};

window.onscroll = () => {
  hiddens.forEach((hidden) => {
    if (window.scrollY >= hidden.offsetTop) {
      hidden.classList.remove("hidden");
    }
  });
};
