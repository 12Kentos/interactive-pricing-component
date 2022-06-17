"use strict";

const pricingSliderEl = document.querySelector(".pricing__slider");
const selectorEl = document.querySelector(".selector");
const progressBarEl = document.querySelector(".progress-bar");
const pricingSwitchEl = document.querySelector(".pricing__switch");
const pricingPageviewsEl = document.querySelector(".pricing__pageviews");
const pricingAmountEl = document.querySelector(".pricing__amount");
const pricingTimeEl = document.querySelector(".pricing__time");
const easyWayOutEl = document.querySelector(".easy-way-out");

let isChecked = true;
let test = easyWayOutEl.textContent;
test = Number(test);

pricingSwitchEl.addEventListener("click", () => {
  if (isChecked) {
    isChecked = false;
    test = test * 9;
    easyWayOutEl.textContent = test;
    pricingTimeEl.textContent = "/ year";
    console.log(test);
  } else {
    isChecked = true;
    test = test / 9;
    easyWayOutEl.textContent = test;
    pricingTimeEl.textContent = "/ month";
    console.log(test);
  }
});

pricingSliderEl.oninput = function () {
  selectorEl.style.left = this.value + "%";
  progressBarEl.style.width = this.value + "%";

  if (!isChecked) {
    if (pricingSliderEl.value <= 20) {
      easyWayOutEl.textContent = 72;
      pricingPageviewsEl.textContent = "10K pageviews";
      test = easyWayOutEl.textContent;
    } else if (pricingSliderEl.value <= 40 && pricingSliderEl.value > 20) {
      easyWayOutEl.textContent = 108;
      pricingPageviewsEl.textContent = "50K pageviews";
      test = easyWayOutEl.textContent;
    } else if (pricingSliderEl.value <= 60 && pricingSliderEl.value > 40) {
      easyWayOutEl.textContent = 144;
      pricingPageviewsEl.textContent = "100K pageviews";
      test = easyWayOutEl.textContent;
    } else if (pricingSliderEl.value <= 80 && pricingSliderEl.value > 60) {
      easyWayOutEl.textContent = 216;
      pricingPageviewsEl.textContent = "500K pageviews";
      test = easyWayOutEl.textContent;
    } else {
      easyWayOutEl.textContent = 324;
      pricingPageviewsEl.textContent = "1M pageviews";
      test = easyWayOutEl.textContent;
    }
  } else {
    if (pricingSliderEl.value <= 20) {
      easyWayOutEl.textContent = 8;
      pricingPageviewsEl.textContent = "10K pageviews";
      test = easyWayOutEl.textContent;
    } else if (pricingSliderEl.value <= 40 && pricingSliderEl.value > 20) {
      easyWayOutEl.textContent = 12;
      pricingPageviewsEl.textContent = "50K pageviews";
      test = easyWayOutEl.textContent;
    } else if (pricingSliderEl.value <= 60 && pricingSliderEl.value > 40) {
      easyWayOutEl.textContent = 16;
      pricingPageviewsEl.textContent = "100K pageviews";
      test = easyWayOutEl.textContent;
    } else if (pricingSliderEl.value <= 80 && pricingSliderEl.value > 60) {
      easyWayOutEl.textContent = 24;
      pricingPageviewsEl.textContent = "500K pageviews";
      test = easyWayOutEl.textContent;
    } else {
      easyWayOutEl.textContent = 36;
      pricingPageviewsEl.textContent = "1M pageviews";
      test = easyWayOutEl.textContent;
    }
  }
};
