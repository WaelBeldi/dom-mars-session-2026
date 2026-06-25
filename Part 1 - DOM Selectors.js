// Part 1: DOM Selectors
// ---------------------
// Exercise 1: Select the page title (hero title)
const heroTitle = document.querySelector("#hero-title");
console.log("The page title:", heroTitle);

// Exercise 2: Select the button (add)
const addButton = document.querySelector("#add-product-btn");
console.log("The add button:", addButton);

// Exercise 3: Select all product cards.
const productCards = document.querySelectorAll(".product-card");
console.log("All product cards:", productCards);

// Exercise 4: Select the contact form.
const contactForm = document.querySelector(".contact-form");
console.log("The contact form:", contactForm);

// Exercise 5: Select the footer paragraph.
const footerParagraph = document.querySelector(".footer-text");
console.log("The footer paragraph:", footerParagraph);

// Exercise 6: Select the first product title.
const firstProductTitle1 = document.querySelector(".product-title");
const firstProductTitle2 = document.querySelectorAll(".product-title")[0];
console.log("The first product title:", firstProductTitle1);
console.log("The first product title (alternative):", firstProductTitle2);

// Exercise 7: Select all product prices.
const prices = document.querySelectorAll(".price-value");
console.log("The product prices:", prices);

// Exercise 8: Select all heart buttons.
const heartButtons = document.querySelectorAll(".heart-icon");
console.log("The heart buttons:", heartButtons);

// Exercise 9: Select the image of the Backpack product.
const backpackImage = document.querySelector('img[alt="Product 5"]');
console.log("The Backpack product image:", backpackImage);

// Exercise 10: Select all navigation links.
const navLinks = document.querySelectorAll(".nav-link");
console.log("The navigation links:", navLinks);

// Exercise 11: Select the product card whose title is: Wireless Headphones
// Requires find() method in ES6

// Exercise 12: Select every trash button inside product cards.
const trashButtons = document.querySelectorAll(".trash");
const trashButtonsAlternative = document.querySelectorAll(
  ".product-card .trash",
);
console.log("The trash buttons:", trashButtons);
console.log("The trash buttons (alternative):", trashButtonsAlternative);

// Exercise 13: Select only the quantity spans.
const quantities = document.querySelectorAll(".qty");
console.log("The quantity spans:", quantities);

// Exercise 14: Select all images inside .products-grid.
const productImages = document.querySelectorAll(".products-grid img");
console.log("The product images:", productImages);

const productsGrid = document.querySelector(".products-grid");
const productImagesAlternative = productsGrid.querySelectorAll("img");
console.log("The product images (alternative):", productImagesAlternative);

// Exercise 15: Count how many products exist in the cart.
const numberOfProducts = document.querySelectorAll(".product-card").length;
console.log("The number of products in the cart:", numberOfProducts);
