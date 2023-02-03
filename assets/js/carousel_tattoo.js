const carousel = document.getElementById("c-services__carousel");
const slidesContainer = document.getElementById("c-services__slidesContainer");
const slides = document.querySelectorAll(".c-services__slide");
let isDragging = false;
let currentX;
let initialX;
let xOffset = 0;
let slideWidth;

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragEnd);
carousel.addEventListener("mouseout", dragEnd);
carousel.addEventListener("mousemove", drag);

function dragStart(e) {
  initialX = e.clientX - xOffset;
  
  isDragging = true;
}

function dragEnd(e) {
  initialX = currentX;
  
  isDragging = false;
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();
    currentX = e.clientX - initialX;
    
    xOffset = currentX;
    
    slidesContainer.style.left = currentX + "px";
  }
}

// Calculate the width of a slide
slideWidth = slides[0].offsetWidth;

// Set the width of the slides container to the total width of all slides
slidesContainer.style.width = (slideWidth * slides.length) + "px";
