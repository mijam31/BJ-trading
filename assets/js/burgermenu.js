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
