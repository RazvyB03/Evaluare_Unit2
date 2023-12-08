let slideIndex = 0;
let slideshowRunning = false;
let slideshowInterval;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function startSlideshow() {
  if (!slideshowRunning) {
    slideshowRunning = true;
    showSlides();
    slideshowInterval = setInterval(showSlides, 3000); 
  }
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
  slideshowRunning = false;
}

function toggleSlideshow() {
  if (!slideshowRunning) {
    startSlideshow();
  } else {
    stopSlideshow();
  }
}