"use strict";

const switchBtn = document.getElementById("switch");
const switchBg = document.querySelector(".switch-bg");
const proPrice = document.querySelector(".pro-price");
const basicPrice = document.querySelector(".basic-price");
const masterPrice = document.querySelector(".master-price");

switchBtn.addEventListener("click", () => {
  if (!switchBtn.classList.contains("animation")) {
    switchBtn.classList.add("animation");
    switchBg.classList.remove("pale-bg");
    switchBtn.classList.remove("backward");
    priceChange();
  } else {
    normalPrice();
    switchBg.classList.add("pale-bg");
    switchBtn.classList.toggle("backward");
    switchBtn.classList.toggle("animation");
  }
});

function priceChange() {
  proPrice.innerHTML = "299.99";
  basicPrice.innerHTML = "199.99";
  masterPrice.innerHTML = "399.99";
}

function normalPrice() {
  proPrice.innerHTML = "29.99";
  basicPrice.innerHTML = "19.99";
  masterPrice.innerHTML = "39.99";
}
