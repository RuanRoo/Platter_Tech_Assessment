// Swap image on hover
// Get all product cards with the class 'product-card'
const productCards = document.querySelectorAll(".product-card");

// Iterate through each product card and add event listeners
productCards.forEach((card) => {
  const image = card.querySelector("img");
  const originalSrc = image.src;
  const hoverSrc = image.getAttribute("data-src");

  card.addEventListener("mouseenter", () => {
    // Change the image source on hover
    image.src = hoverSrc;
  });

  card.addEventListener("mouseleave", () => {
    // Restore the original image source on mouse leave
    image.src = originalSrc;
  });
});

// JavaScript logic to toggle the mobile grid and dropdown
const mobileGrid = document.getElementById('mobileGrid');
const showMoreButton = document.getElementById('showMoreButton');
const showLessButton = document.getElementById('showLessButton');
const dropdown = document.getElementById('dropdown');
const cardContainer = document.getElementById('cardContainer');

showMoreButton.addEventListener('click', () => {
  // Show the dropdown
  mobileGrid.style.display = 'none';
  dropdown.style.display = 'grid';
  showMoreButton.style.display = 'none';
  showLessButton.style.display = 'block';
});

showLessButton.addEventListener('click', () => {
  // Show the mobile grid and hide the dropdown
  mobileGrid.style.display = 'grid';
  dropdown.style.display = 'none';
  showMoreButton.style.display = 'block';
  showLessButton.style.display = 'none';
});

// JavaScript logic to show/hide the card container on larger screens
if (window.innerWidth > 640) {
  cardContainer.style.display = 'block';
} else {
  cardContainer.style.display = 'none';
}

// Update visibility of card container on window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 640) {
    cardContainer.style.display = 'block';
  } else {
    cardContainer.style.display = 'none';
  }
});