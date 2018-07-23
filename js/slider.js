var slideNum = 1;
var slideTimer;
function currentSlide(n) {
  showSlides(slideNum = n);
  clearTimeout(slideTimer);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-img");
  var dots = document.getElementsByClassName("slider-dot");
  if (n > slides.length) {slideNum = 1}    
  if (n < 1) {slideNum = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-slider-dot", "");
  }
  slides[slideNum-1].style.display = "block";  
  dots[slideNum-1].className += " active-slider-dot";
  slideTimer = setTimeout(showSlides,3000);
}
