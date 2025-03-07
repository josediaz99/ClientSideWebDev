document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 1;
  console.log("Window loaded. Starting slideIndex:", slideIndex);
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    slideIndex += n;
    console.log("Changed slideIndex to:", slideIndex);
    showSlides(slideIndex);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    slideIndex = n;
    console.log("Selected slideIndex:", slideIndex);
    showSlides(slideIndex);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    // Remove the "active" class from all dots
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show the current slide and activate its dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    console.log("Displayed slide:", slideIndex);
  }

  // Set up auto slide interval and store its ID
  let autoSlideInterval = setInterval(() => {
    console.log("setInterval triggered");
    plusSlides(1);
  }, 5000);

  // Get the carousel container element
  const carousel = document.querySelector('.slideshow');
  if (carousel) { // Make sure the element exists
    // Pause auto-advance when hovering
    carousel.addEventListener('mouseover', () => {
      clearInterval(autoSlideInterval);
      console.log("Carousel hovered, auto-slide paused");
    });

    // Resume auto-advance when no longer hovering
    carousel.addEventListener('mouseout', () => {
      autoSlideInterval = setInterval(() => {
        console.log("setInterval triggered");
        plusSlides(1);
      }, 5000);
      console.log("Carousel mouseout, auto-slide resumed");
    });
  } else {
    console.error("No element with class 'slideshow' found.");
  }
});
