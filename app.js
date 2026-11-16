"use strict";
// Fixed educational calculation, with no trained artifact.
function calculatePrediction(raw) {
  if (typeof raw !== "string" && typeof raw !== "number") throw new Error("Enter a whole number from 0 to 100.");
  const value = String(raw).trim();
  if (!/^\d+$/.test(value)) throw new Error("Enter a whole number from 0 to 100.");
  const quantity = Number(value);
  if (!Number.isSafeInteger(quantity) || quantity > 100) throw new Error("Enter a whole number from 0 to 100.");
  return 10 + 20 * quantity;
}
if (typeof document !== "undefined") {
  const form = document.getElementById("prediction-form");
  if (form) form.addEventListener("submit", function (event) {
    event.preventDefault();
    const error = document.getElementById("error");
    const result = document.getElementById("result");
    error.textContent = "";
    result.textContent = "";
    try { result.textContent = "Result: " + calculatePrediction(document.getElementById("quantity").value) + " demo units"; }
    catch (problem) { error.textContent = problem.message; }
  });
}
