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

// create div and span
for (k=0;k<2;k++){
for (g=0;g<divs.length;g++){
var spnx = document.createElement("span");
spnx.setAttribute("class", "iconx");
spnx.innerHTML = "&#8597;";
document.getElementById(divs[g]).appendChild(spnx);
 }
}
