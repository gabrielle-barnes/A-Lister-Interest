const PERCENT_TO_DECIMAL = 1 / 100;

const principalBox = document.querySelector("#principal");
const rateBox = document.querySelector("#rate");
const cpyBox = document.querySelector("#cpy");
const yearsBox = document.querySelector("#years");

const totalOutput = document.querySelector("#total");
const earnedOutput = document.querySelector("#earned");

principalBox.addEventListener("input", updateCompInterest);
rateBox.addEventListener("input", updateCompInterest);
cpyBox.addEventListener("input", updateCompInterest);
yearsBox.addEventListener("input", updateCompInterest);

function updateCompInterest() {
  const principal = Number(principalBox.value);
  const ratePercent = Number(rateBox.value);
  const cpy = Number(cpyBox.value);
  const years = Number(yearsBox.value);

  const rate = ratePercent * PERCENT_TO_DECIMAL;

  const totalAmount = principal * Math.pow(1 + rate / cpy, cpy * years);
  const moneyEarned = totalAmount - principal;

  totalOutput.textContent = `Total Money: ${totalAmount.toFixed(2)}$`;
  earnedOutput.textContent = `Amount of Money Earned: ${moneyEarned.toFixed(
    2
  )}$`;
}
