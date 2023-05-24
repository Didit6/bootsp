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
var divs = ["DIV1","DIV2","DIV3","DIV4","DIV5","DIV6","DIV7","DIV8","DIV9","DIV10","DIV10","DIV11"];
var visibleDivId = null;
function dil(divId) {
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
function ivx(dixvId) {
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

// show hide filter chord
var divs3 = ["fil1","fil2","fil3","fil4","fil5"];
var visibgh = null;
function funcz(divFilt) {
  if(visibgh === divFilt) {visibgh = null;} else {visibgh = divFilt;}
      hideNhmb();}
function hideNhmb() { var i, divFilt, divn;
 for(i = 0; i < divs3.length; i++) { divFilt = divs3[i];
  divn = document.getElementById(divFilt);
 if(visibgh === divFilt) {
  divn.style.display = "block";
} else {
  divn.style.display = "none";
}}}
