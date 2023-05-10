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
var divs = ["DIV1"];
var visibleDivId = null;
function diV(divId) {
  if(visibleDivId === divId) {visibleDivId = null;} else {visibleDivId = divId;}
      hideNonVisibleDivs();}
function hideNonVisibleDivs() { var i, divId, div;
  for(i = 0; i < divs.length; i++) { divId = divs[i];
    div = document.getElementById(divId);
  if(visibleDivId === divId) {div.style.display = "block";} else {div.style.display = "none";}}}
