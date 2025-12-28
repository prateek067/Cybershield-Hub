console.log("CyberShield Hub loaded");
function calculateScore() {
  let total = 0;
  const form = document.getElementById("scoreForm");
  const answers = form.querySelectorAll("input[type='radio']:checked");

  answers.forEach(ans => {
    total += parseInt(ans.value);
  });

  let result = "";
  if (total <= 30) {
    result = `High Risk! Your score is ${total}/50. Be careful online.`;
  } else if (total <= 60) {
    result = `Medium Risk. Your score is ${total}/50. Some habits need improvement.`;
  } else {
    result = `Low Risk! Your score is ${total}/50. Great job staying safe online!`;
  }

  document.getElementById("scoreResult").innerText = result;
}
