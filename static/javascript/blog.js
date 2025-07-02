document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".category-tabs .tab");
    const storyCards = document.querySelectorAll(".stories-grid .story-card");

    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        // Remove "active" class from all buttons
        tabs.forEach((t) => t.classList.remove("active"));
        // Add "active" to the clicked button
        tab.classList.add("active");

        const selectedCategory = tab.getAttribute("data-category");

        storyCards.forEach((card) => {
          const cardCategory = card.getAttribute("data-category");
          if (cardCategory === selectedCategory) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  });

 



