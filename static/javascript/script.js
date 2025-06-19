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



// script for portfolio
document.addEventListener("DOMContentLoaded", function () {
  const beforeBtn = document.getElementById("beforeBtn");
  const afterBtn = document.getElementById("afterBtn");
  const featureImage = document.getElementById("featureImage");

  const beforeImage =
    "https://cdn.decorilla.com/images/1200/5706645bea5fe8.24781187/Affordable-Online-Living-Dining-Room-Design-interior-design.jpg?cv=1";
  const afterImage =
    "https://cdn.decorilla.com/images/1200/e37cb232-98cf-412c-b753-64a06b2a2775/Affordable-Living-Room-Dining-Room-Combo-interior-design-1.jpg?cv=1";

  beforeBtn.addEventListener("click", () => {
    featureImage.src = beforeImage;
    beforeBtn.classList.add("active");
    afterBtn.classList.remove("active");
  });

  afterBtn.addEventListener("click", () => {
    featureImage.src = afterImage;
    afterBtn.classList.add("active");
    beforeBtn.classList.remove("active");
  });
});



