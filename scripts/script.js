//night mode
var night = document.getElementById("nightMode");
var color = document.body;


function darkMode(){
  color.classList.toggle("dark");
}

night.addEventListener("click", darkMode);

//tabs

var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels =  document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex, colorCode){
  tabButtons.forEach(function(node){
    node.style.backgroundColor = "";
    node.style.color="";
  });
  tabButtons[panelIndex].style.backgroundColor=colorCode;
  tabButtons[panelIndex].style.color="white";
  tabPanels.forEach(function(node){
  node.style.display="none";
});

  tabPanels[panelIndex].style.display="block";
  tabPanels[panelIndex].style.backgroundColor="colorCode";
}


//navBar effects

// var navBarIcons = document.querySelector(".menu .blue");
//
// function glow)(){
//   navBarIcons.classList.add(".greenGlow");
//   setTimeOut(function(), ){
//
//   }
//
// }

function main(){
  showPanel(0, 'lightgray');
}
