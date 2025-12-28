// ===== Show/Hide Sections Function =====
function showSection(id) {
  const sections = ['cyberscore', 'passwordCheck', 'linkChecker', 'privacyChecker'];
  sections.forEach(sec => {
    document.getElementById(sec).style.display = 'none';
  });

  if(id !== '') {
    document.getElementById(id).style.display = 'block';
  }
}

// Hide all sections initially
window.onload = function() {
  showSection(''); // hides all on load
};

// ===== Cyber Safety Score =====
function calculateScore() {
  let total = 0;
  const form = document.getElementById("scoreForm");
  const answers = form.querySelectorAll("input[type='radio']:checked");

  if (answers.length < 5) {
    alert("Please answer all questions to get your score.");
    return;
  }

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

// ===== Password Strength Checker =====
function checkPassword() {
  const password = document.getElementById("passwordInput").value;
  let strength = 0;

  if (password.length >= 8) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[a-z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[\W_]/.test(password)) strength += 1;

  let resultText = "";
  switch(strength) {
    case 0:
    case 1:
    case 2:
      resultText = "Weak Password";
      break;
    case 3:
    case 4:
      resultText = "Medium Password";
      break;
    case 5:
      resultText = "Strong Password";
      break;
  }

  document.getElementById("passwordResult").innerText = resultText;
}

// ===== Toggle Password Visibility =====
function togglePassword() {
  const passwordInput = document.getElementById("passwordInput");
  const showCheckbox = document.getElementById("showPassword");

  passwordInput.type = showCheckbox.checked ? "text" : "password";
}

// ===== Link Risk Analyzer (Basic) =====
function checkLink() {
  const url = document.getElementById("linkInput").value;
  const suspiciousKeywords = ['free', 'verify', 'login', 'update', 'account', 'password'];
  let risk = 'Safe';

  for(let word of suspiciousKeywords) {
    if(url.toLowerCase().includes(word)) {
      risk = 'Risky';
      break;
    }
  }

  document.getElementById("linkResult").innerText = `This link is: ${risk}`;
}

// ===== Privacy & Footprint Checker =====
function calculatePrivacy() {
  let total = 0;
  const form = document.getElementById("privacyForm");
  const answers = form.querySelectorAll("input[type='radio']:checked");

  if (answers.length < 5) {
    alert("Please answer all questions to get your privacy score.");
    return;
  }

  answers.forEach(ans => {
    total += parseInt(ans.value);
  });

  let riskLevel = "";
  if (total <= 30) {
    riskLevel = "High Exposure";
  } else if (total <= 40) {
    riskLevel = "Medium Exposure";
  } else {
    riskLevel = "Low Exposure";
  }

  document.getElementById("privacyResult").innerText = 
    `Your Privacy Score: ${total}/50 → ${riskLevel}`;
}
