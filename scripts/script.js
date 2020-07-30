//night mode
var night = document.getElementById("nightMode");
var color = document.body;

function darkMode(){
  color.classList.toggle("dark");
}

night.addEventListener("click", darkMode);
