function openul() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("burger").style.display = "block";
  document.querySelector(".navBurgermenu ul").style.display = "flex";
}

function closeul() {
  document.getElementById("menu").style.display = "block";
  document.getElementById("burger").style.display = "none";
  document.querySelector(".navBurgermenu ul").style.display = "none";
}

function openBolig() {
  document.getElementById("openBolig").style.display = "none";
  document.getElementById("closeBolig").style.display = "block";
  document.querySelector(".bolig").style.display = "block";
}
function closeBolig() {
  document.getElementById("openBolig").style.display = "block";
  document.getElementById("closeBolig").style.display = "none";
  document.querySelector(".bolig").style.display = "none";
}

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

let konamiCodePosition = 0;

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key === konamiCode[konamiCodePosition]) {
    konamiCodePosition++;

    if (konamiCodePosition === konamiCode.length) {
      activateSecret();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateSecret() {
  confetti.start();
}
