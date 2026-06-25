// Part 3: DOM Manipulation
// ------------------------
// Exercise 1: Change: "Shopping Cart" to "My Shopping Cart".
document.querySelector("#hero-title").textContent = "My Shopping Cart";

// Exercise 2: Change: "Your current total" to "Total Price".
document.querySelector(".hero-subtitle").textContent = "Total Price";

// Exercise 3: Change the footer text to: "Created by DOM Students".
document.querySelector(".footer-text").textContent = "Created by DOM Students";

// Exercise 4: Change the second product title to: "Leather Card Wallet".
document.querySelectorAll(".product-title")[1].textContent =
  "Leather Card Wallet";

// Exercise 5: Change all quantity values from: 1 to 5.
const quantities = document.querySelectorAll(".qty");
for (let i = 0; i < quantities.length; i++) {
  quantities[i].textContent = "5";
}

// Exercise 6: Make all product titles uppercase.
const titles = document.querySelectorAll(".product-title");
for (let i = 0; i < titles.length; i++) {
  titles[i].textContent = titles[i].textContent.toUpperCase();
}

// Exercise 7: Change every product price to: 99.00.
const prices = document.querySelectorAll(".price-value");
for (let i = 0; i < prices.length; i++) {
  prices[i].textContent = "99.00";
}

// Exercise 8: Add a blue border to all product cards.
const cards = document.querySelectorAll(".product-card");
// const cards = document.getElementsByClassName("product-card"); // Use with question 10
// console.log(cards.length); // 5; Use with question 10
for (let i = 0; i < cards.length; i++) {
  cards[i].style.border = "2px solid blue";
}

// Exercise 9: Hide the contact section using JavaScript.
document.querySelector(".contact-section").style.display = "none";

// Exercise 10: Create a new product card entirely with JavaScript and append it to .products-grid.
const newCard = document.createElement("article");
newCard.classList.add("product-card");

newCard.innerHTML = `
  <img
        src="https://hp.widen.net/content/rf5aaxp7rx/png/rf5aaxp7rx.png"
        alt="Product 6"
        class="product-image"
    />
    <h3 class="product-title">Laptop</h3>
    <p class="product-price">$<span>999.99</span></p>
    <div class="quantity-controls">
        <button class="qty-btn minus" aria-label="Decrease quantity">
            <i class="fa-solid fa-minus"></i>
        </button>
        <span class="qty">1</span>
        <button class="qty-btn plus" aria-label="Increase quantity">
            <i class="fa-solid fa-plus"></i>
        </button>
        <button class="qty-btn trash" aria-label="Remove item">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>
    <button
        class="heart-icon"
        aria-pressed="false"
        aria-label="Favorite item"
    >
        <i class="fa-regular fa-heart"></i>
    </button>
`;

document.querySelector(".products-grid").appendChild(newCard);

// console.log(cards.length); // 6; Use with question 8
/*
The collection updates automatically.
However, the loop does not rerun automatically. The browser doesn't remember:
cards[i].style.border = "2px solid blue";
for future elements.

Best practice:
Instead of styling with JavaScript:
card.style.border = "2px solid blue";
use CSS:
.product-card {
  border: 2px solid blue;
}
Then every existing and future .product-card automatically gets the border,
including cards created with JavaScript.
This is generally the preferred approach in real projects.
*/

// Exercise 11: Remove the Backpack product card from the DOM. PS: Don't forget that you made all product titles uppercase in question 6.
for (let i = 0; i < cards.length; i++) {
  const title = cards[i].querySelector(".product-title").textContent;
  if (title === "Backpack".toUpperCase()) {
    cards[i].remove();
    break;
  }
}

// Exercise 12: Insert a new navigation link: "About" before Contact.
const contactItem = document.querySelector('a[href="#contact"]').parentElement;

const newItem = document.createElement("li");
newItem.classList.add("nav-item");

newItem.innerHTML = '<a class="nav-link" href="#about">About</a>';

// const navMenu = document.querySelector(".nav-menu");
// navMenu.insertBefore(newItem, contactItem);

// document.querySelector(".nav-menu").insertBefore(newItem, contactItem);
contactItem.parentElement.insertBefore(newItem, contactItem);

// Exercise 13: Create a new paragraph under the hero title: "Welcome to our online store".
const paragraph = document.createElement("p");

paragraph.textContent = "Welcome to our online store";

const heroTitle = document.querySelector("#hero-title");
heroTitle.insertAdjacentElement("afterend", paragraph);

// Exercise 14: For every product card, create and append: <p>In Stock</p>.
for (let i = 0; i < cards.length; i++) {
  const inStock = document.createElement("p");
  inStock.textContent = "In Stock";
  cards[i].appendChild(inStock);
}