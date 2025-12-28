// ===== Show / Hide Sections (Mobile Safe) =====
function showSection(id) {
  const sections = ['cyberscore', 'passwordCheck', 'linkChecker', 'privacyChecker'];

  sections.forEach(sec => {
    const element = document.getElementById(sec);
    element.style.display = 'none';
  });

  if (id !== '') {
    const activeSection = document.getElementById(id);
    activeSection.style.display = 'block';

    // Mobile fix: scroll to section
    activeSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

// Hide all sections on load
window.onload = function () {
  showSection('');
};

// ===== Cyber Safety Score =====
function calculateScore() {
  let total = 0;
  const answers = document.querySelectorAll('#scoreForm input[type="radio"]:checked');

  if (answers.length < 5) {
    alert("Answer all questions first.");
    return;
  }

  answers.forEach(ans => total += parseInt(ans.value));

  let message = "";
  if (total <= 30) {
    message = `High Risk ⚠️ | Score: ${total}/50`;
  } else if (total <= 40) {
    message = `Medium Risk ⚡ | Score: ${total}/50`;
  } else {
    message = `Low Risk ✅ | Score: ${total}/50`;
  }

  document.getElementById("scoreResult").innerText = message;
}

// ===== Password Strength Checker =====
function checkPassword() {
  const password = document.getElementById("passwordInput").value;
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[\W_]/.test(password)) strength++;

  let result = "";
  if (strength <= 2) result = "Weak Password ❌";
  else if (strength <= 4) result = "Medium Password ⚠️";
  else result = "Strong Password ✅";

  document.getElementById("passwordResult").innerText = result;
}

// ===== Show / Hide Password =====
function togglePassword() {
  const input = document.getElementById("passwordInput");
  input.type = input.type === "password" ? "text" : "password";
}

// ===== Link Risk Analyzer =====
function checkLink() {
  const url = document.getElementById("linkInput").value.toLowerCase();
  const riskyWords = ['free', 'verify', 'login', 'update', 'password', 'account'];

  let risk = "Safe ✅";
  riskyWords.forEach(word => {
    if (url.includes(word)) risk = "Risky ⚠️";
  });

  document.getElementById("linkResult").innerText = `Result: ${risk}`;
}

// ===== Privacy & Footprint Checker =====
function calculatePrivacy() {
  let total = 0;
  const answers = document.querySelectorAll('#privacyForm input[type="radio"]:checked');

  if (answers.length < 5) {
    alert("Answer all privacy questions.");
    return;
  }

  answers.forEach(ans => total += parseInt(ans.value));

  let level = "";
  if (total <= 30) level = "High Exposure ❌";
  else if (total <= 40) level = "Medium Exposure ⚠️";
  else level = "Low Exposure ✅";

  document.getElementById("privacyResult").innerText =
    `Privacy Score: ${total}/50 | ${level}`;
          }
