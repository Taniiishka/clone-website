let slideIndex = 0;
const slides = document.querySelector(".slides");
const slideItems = document.querySelectorAll(".slide");
const totalSlides = slideItems.length;
const heading = document.getElementById("slider-heading");

document.querySelector(".next").addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
});

function updateSlide() {
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  
  // Update heading from the data-title attribute of current slide
  const currentTitle = slideItems[slideIndex].getAttribute("data-title");
  heading.textContent = currentTitle;
}

// Initialize on page load
window.addEventListener("load", updateSlide);
