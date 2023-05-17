// slider image
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {showSlides(slideIndex += n);}
function currentSlide(n) {showSlides(slideIndex = n);}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");}
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";}

// show hide
var divs = ["DIV1","DIV2","DIV3","DIV4","DIV5","DIV6","DIV7","DIV8","DIV9","DIV10","DIV11","DIV12"];
var visibleDivId = null;
function diV(divId) {
  if(visibleDivId === divId) {visibleDivId = null;} else {visibleDivId = divId;}
      hideNonVisibleDivs();}
function hideNonVisibleDivs() { var i, divId, div;
  for(i = 0; i < divs.length; i++) { divId = divs[i];
    div = document.getElementById(divId);
  if(visibleDivId === divId) {
  	div.style.display = "block";
} else {
	  div.style.display = "none";
}}}

// show hide kotak
var divs2 = ["kt1","kt2"];
var visiblId = null;
function Divx(dixvId) {
  if(visiblId === dixvId) {visiblId = null;} else {visiblId = dixvId;}
      hideNonVDivs();}
function hideNonVDivs() { var i, dixvId, divx;
  for(i = 0; i < divs2.length; i++) { dixvId = divs2[i];
    divx = document.getElementById(dixvId);
  if(visiblId === dixvId) {
  	divx.style.display = "block";
} else {
	  divx.style.display = "none";
}}}
  
// create span arrow down
var spnx1 = document.createElement('span');
spnx1.innerHTML = "&#8597;";
spnx1.setAttribute("class","iconx");
document.getElementById("DIV1").appendChild(spnx1);
var spnx2 = document.createElement('span');
spnx2.innerHTML = "&#8597;";
spnx2.setAttribute("class","iconx");
document.getElementById("DIV2").appendChild(spnx2);
var spnx3 = document.createElement('span');
spnx3.innerHTML = "&#8597;";
spnx3.setAttribute("class","iconx");
document.getElementById("DIV3").appendChild(spnx3);
var spnx4 = document.createElement('span');
spnx4.innerHTML = "&#8597;";
spnx4.setAttribute("class","iconx");
document.getElementById("DIV4").appendChild(spnx4);
var spnx5 = document.createElement('span');
spnx5.innerHTML = "&#8597;";
spnx5.setAttribute("class","iconx");
document.getElementById("DIV5").appendChild(spnx5);
var spnx6 = document.createElement('span');
spnx6.innerHTML = "&#8597;";
spnx6.setAttribute("class","iconx");
document.getElementById("DIV6").appendChild(spnx6);
var spnx7 = document.createElement('span');
spnx7.innerHTML = "&#8597;";
spnx7.setAttribute("class","iconx");
document.getElementById("DIV7").appendChild(spnx7);
var spnx8 = document.createElement('span');
spnx8.innerHTML = "&#8597;";
spnx8.setAttribute("class","iconx");
document.getElementById("DIV8").appendChild(spnx8);
var spnx9 = document.createElement('span');
spnx9.innerHTML = "&#8597;";
spnx9.setAttribute("class","iconx");
document.getElementById("DIV9").appendChild(spnx9);
var spnx10 = document.createElement('span');
spnx10.innerHTML = "&#8597;";
spnx10.setAttribute("class","iconx");
document.getElementById("DIV10").appendChild(spnx10);
var spnx11 = document.createElement('span');
spnx11.innerHTML = "&#8597;";
spnx11.setAttribute("class","iconx");
document.getElementById("DIV11").appendChild(spnx11);
var spnx12 = document.createElement('span');
spnx12.innerHTML = "&#8597;";
spnx12.setAttribute("class","iconx");
document.getElementById("DIV12").appendChild(spnx12);
