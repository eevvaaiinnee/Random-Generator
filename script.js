var questionn = document.getElementById("questionn");
var outputt = document.getElementById("outputt");
var buttonn1 = document.getElementById("buttonn1");
var buttonn2 = document.getElementById("buttonn2");
var sitee = ["Shanghai", "Paris", "Los Angeles", "Abu Dhabi", "Accra", "Berlin", "Buenos Aires", "Florence", "London", "Madrid", "Prague"];
var colorr = ["#80beaf", "#b3ddd1", "#d1dce2", "#f5b994", "ee9c6c"];
var numberr = ["25", "30", "35", "40", "45", "50"];
var transformm = ["uppercase", "lowercase", "capitalize"];
var randomm1 = Math.floor(Math.random() * sitee.length);
var randomm2 = Math.floor(Math.random() * colorr.length);
var randomm3 = Math.floor(Math.random() * numberr.length);
var randomm4 = Math.floor(Math.random() * transformm.length);

buttonn1.addEventListener("click", generate);
buttonn2.addEventListener("click", restyle);
buttonn3.addEventListener("click", original);

function generate() {
  // questionn.style.textShadow = "2px 2px 5px #000000";
  outputt.innerText = "You should go to " + sitee[randomm1] + " to study abroad.";
  document.body.style.backgroundColor = colorr[randomm2];
  console.log("Why text shadow is not working? Why background only changes once?");
}

function restyle() {
  // outputt.style.backgroundColor = colorr[randomm2];
  outputt.style.backgroundColor = "#000000";
  outputt.style.fontSize = numberr[randomm3] + "px";
  outputt.style.textTransform = transformm[randomm4];
  outputt.innerText = "I said " + sitee[randomm1] + "!";
  console.log("Why background color is not working?");
}

function original() {
  window.location.reload();
}
