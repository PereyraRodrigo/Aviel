const slidesContainers = document.querySelectorAll('.slide-container');
const wrapper = document.querySelector('.wrapper');
let panAmount = 5;

function init() {
slidesContainers.style.width = (100 + slidesContainers.length * panAmount) + "%"; // Set wrapper width based on number of slides + panAmount.

for (var i = 0; i < slidesContainers.length; i++) {
  slidesContainers.style.width = 100 / slidesContainers.length + "%"; // Fit slides into the wrapper.
}
}

init();