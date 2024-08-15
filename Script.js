let slideIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll(".slide");
    const slidesContainer = document.querySelector(".slides");
    slideIndex += direction;

    // Handle looping back to the start or end
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    // Adjust the transform to slide to the correct position
    const offset = -slideIndex * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

const toggleMenuIcon = document.getElementById("toggleMenu");
const navMenu = document.querySelector("header nav ul");

// Toggle the menu on click of the bars icon
toggleMenuIcon.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click from closing the menu immediately
    navMenu.classList.toggle("show-menu");
});

// Close the menu when clicking anywhere outside
document.addEventListener("click", function (event) {
    // Check if the clicked element is not the menu or toggle icon
    if (!navMenu.contains(event.target) && event.target !== toggleMenuIcon) {
        navMenu.classList.remove("show-menu");
    }
});

// Close the menu when clicking on any link inside the menu
navMenu.querySelectorAll("a").forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
        navMenu.classList.remove("show-menu");
    });
});


