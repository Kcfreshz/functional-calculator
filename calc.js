"use strict";
const calcDigits = document.querySelectorAll(".calc__digit");
const screen = document.querySelector(".screen");
const operators = document.querySelectorAll(".calc__operator");
const calcClear = document.querySelector(".calc__clear");
const calcEquals = document.querySelector(".calc__equals");

// Looping and Digits display
calcDigits.forEach((digits) => {
  digits.addEventListener("click", function () {
    const digitsValue = digits.textContent;
    screen.value += digitsValue;
  });
});

// Looping and Operators display
operators.forEach((evaluate) => {
  evaluate.addEventListener("click", function () {
    const evaluateValue = evaluate.textContent;
    screen.value += evaluateValue;
  });
});

// Solving the arithmetics
calcEquals.addEventListener("click", function () {
  try {
    screen.value = eval(screen.value);
  } catch {
    screen.value = "Error";
  }
});

// Clearing the input
calcClear.addEventListener("click", function () {
  screen.value = "";
});
