let score = 0;
let privacy = 0;

function showSection(id) {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    section.style.display = "none";
  });

  const target = document.getElementById(id);
  if (target) {
    target.style.display = "block";
    target.scrollIntoView({ behavior: "smooth" });
  } else {
    alert("Section not found: " + id);
  }
}

function addScore(value) {
  score += value;
  document.getElementById("score").innerText = score;
}

function checkPassword() {
  const pass = document.getElementById("passwordInput").value;
  let result = "Weak";

  if (pass.length >= 8 && /[A-Z]/.test(pass) && /[0-9]/.test(pass)) {
    result = "Strong";
  }

  document.getElementById("passwordResult").innerText =
    "Password Strength: " + result;
}

function togglePassword() {
  const input = document.getElementById("passwordInput");
  input.type = input.type === "password" ? "text" : "password";
}

function checkLink() {
  const link = document.getElementById("linkInput").value;
  if (link.includes("http") && !link.includes("secure")) {
    document.getElementById("linkResult").innerText =
      "⚠️ Link may be suspicious";
  } else {
    document.getElementById("linkResult").innerText =
      "✅ Link looks safe";
  }
}

function privacyScore(value) {
  privacy += value;
  document.getElementById("privacyScore").innerText = privacy;
}
