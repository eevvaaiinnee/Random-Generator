var buttonn1 = document.getElementById("buttonn1");
var buttonn2 = document.getElementById("buttonn2");
var sitee = ["Shanghai", "Paris", "Los Angeles", "Abu Dhabi", "Accra", "Berlin", "Buenos Aires", "Florence", "London", "Madrid", "Prague", "New York"];
var colorr = ["#80beaf", "#b3ddd1", "#d1dce2", "#f5b994", "ee9c6c"];
var numberr = ["25", "30", "35", "40", "45", "50"];
var transformm = ["uppercase", "lowercase", "capitalize"];

buttonn1.addEventListener("click", generate);
buttonn2.addEventListener("click", restyle);
buttonn3.addEventListener("click", original);

function generate() {
  var randomm1 = Math.floor(Math.random() * sitee.length);
  var randomm2 = Math.floor(Math.random() * colorr.length);
  var questionn = document.getElementById("questionn");
  var inputt = document.getElementById("inputt").value;
  var outputt = document.getElementById("outputt");
  questionn.style.textShadow = "2px 2px 5px #4a485c";
  outputt.innerText = inputt + " should go to " + sitee[randomm1] + " to study abroad.";
  document.body.style.backgroundColor = colorr[randomm2];
}

function restyle() {
  var randomm1 = Math.floor(Math.random() * sitee.length);
  var randomm2 = Math.floor(Math.random() * colorr.length);
  var randomm3 = Math.floor(Math.random() * numberr.length);
  var randomm4 = Math.floor(Math.random() * transformm.length);
  outputt.style.backgroundColor = colorr[randomm2];
  outputt.style.fontSize = numberr[randomm3] + "px";
  outputt.style.textTransform = transformm[randomm4];
  outputt.innerText = "I said " + sitee[randomm1] + "! (not really)";
}

function original() {
  window.location.reload();
}
