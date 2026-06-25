// Part 2: DOM Attributes
// ----------------------
// Exercise 1: Get the id of the hero title.
const heroTitle = document.querySelector("#hero-title");
console.log("The hero title id is: ", heroTitle.id);
console.log("The hero title id (alternative): ", heroTitle.getAttribute("id"));

// Exercise 2: Get the src of the first product image.
const firstProductImage = document.querySelector(".product-image");
console.log("The first product image src is: ", firstProductImage.src);
console.log("The first product image src (alternative): ", firstProductImage.getAttribute("src"));

// Exercise 3: Get the href of the Contact menu link.
const contactLink = document.querySelector('a[href="#contact"]');
console.log("The contact link href is: ", contactLink.getAttribute("href"));

// Exercise 4: Change the hero title id from id="hero-title" to id="main-title".
const heroTitleChange = document.querySelector("#hero-title");
heroTitleChange.id = "main-title";
heroTitleChange.setAttribute("id", "main-title");

// Exercise 5: Change the placeholder of the Email input from "you@example.com" to "email@domain.com".
const emailInput = document.querySelector('input[type="email"]');
emailInput.placeholder = "email@domain.com";
emailInput.setAttribute("placeholder", "email@domain.com");

// Exercise 6: Add: title="Favorite Product" to every heart button.
const hearts = document.querySelectorAll(".heart-icon");
for (let i = 0; i < hearts.length; i++) {
  hearts[i].setAttribute("title", "Favorite Product");
}

// Exercise 7: Read all image src attributes and store them in an array.
const images = document.querySelectorAll(".product-image");
const imageUrls = [];
for (let i = 0; i < images.length; i++) {
  imageUrls.push(images[i].src);
}
console.log("All image URLs:", imageUrls);

// Exercise 8: Display every product's title and image URL in the console.
const cards = document.querySelectorAll(".product-card");

for (let i = 0; i < cards.length; i++) {
  const title = cards[i].querySelector(".product-title").textContent;
  const imageUrl = cards[i].querySelector(".product-image").src;

  console.log(title + " -> " + imageUrl);
}