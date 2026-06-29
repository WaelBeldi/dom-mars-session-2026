// Part 1: DOM Selectors
// ---------------------
// Exercise 1: Select the page title (hero title)
const heroTitle = document.querySelector("#hero-title");
// console.log(heroTitle)

// Exercise 2: Select the button (add)
const addButton = document.querySelector("#add-product-btn");
// console.log(addButton)

// Exercise 3: Select all product cards.
const productCards = document.querySelectorAll(".product-card");
// console.log(productCards)

// Exercise 4: Select the contact form.
const contactForm = document.querySelector(".contact-form");
// console.log(contactForm)

// Exercise 5: Select the footer paragraph.
const footerText = document.querySelector(".footer-text");
const footerText2 = document.getElementsByClassName("footer-text")[0]
// console.log(footerText)
// console.log(footerText2)

// Exercise 6: Select the first product title.
const firstProductTitle = document.querySelector(".product-title");
const firstProductTitle2 = document.querySelectorAll(".product-title")[0]
// console.log(firstProductTitle)
// console.log(firstProductTitle2)

// Exercise 7: Select all product prices.
const prices = document.querySelectorAll(".price-value");
// console.log(prices)

// Exercise 8: Select all heart buttons.
const heartButtons = document.querySelectorAll(".heart-icon");
// console.log(heartButtons)

// Exercise 9: Select the image of the Backpack product.
const backpackImage = document.querySelector("img[alt='Product 5']")
// console.log(backpackImage)

// Exercise 10: Select all navigation links.
const navLinks = document.querySelectorAll(".nav-link");
// console.log(navLinks)

// Exercise 11: Select every trash button inside product cards.
const trashButtons = document.querySelectorAll(".qty-btn.trash");
const trashButtons2 = document.getElementsByClassName("qty-btn trash")
// console.log(trashButtons)
// console.log(trashButtons2)

// Exercise 12: Select only the quantity spans.
const quantities = document.querySelectorAll(".qty");
// console.log(quantities)

// Exercise 13: Select all images inside .products-grid.
const productImages = document.querySelectorAll(".product-image");
// console.log(productImages)

// const productsGrid = document.querySelectorAll(".products-grid .product-image")
// const productImages2 = productsGrid.querySelectorAll("img")
// console.log(productsGrid)
// console.log(productImages2)

// Exercise 14: Count how many products exist in the cart.
const numberOfProducts = document.querySelectorAll(".product-card").length;
// console.log(numberOfProducts)


// Part 2: DOM Attributes
// ----------------------
// Exercise 1: Get the id of the hero title.
const heroTitleId = heroTitle.getAttribute("id");
const heroTitleIdAlt = heroTitle.id;
// console.log(`The id is ${heroTitleIdAlt}`)

// Exercise 2: Get the src of the first product image.
const firstImageSrc = document.querySelector(".product-image").src;
const firstImageSrc2 = productImages[0].src;
// console.log(firstImageSrc)
// console.log(firstImageSrc2)

// Exercise 3: Get the href of the Contact menu link.
const contactLink = document.querySelector("a[href='#contact']");
// console.log(contactLink)

// Exercise 4: Change the hero title id from id="hero-title" to id="main-title".
heroTitle.id = "main-title";
// console.log(heroTitle.id)

// Exercise 5: Change the placeholder of the Name input from "Your name" to "Enter your full name".
const nameInput = document.querySelector("input[name='name']")
nameInput.placeholder = "Enter your full name"
// console.log(nameInput)

// Exercise 6: Add: title="Favorite Product" to every heart button.
for (let i = 0; i < heartButtons.length; i++) {
    heartButtons[i].title = "Favorite Product"
}
// console.log()

// Exercise 7: Read all image src attributes and store them in an array.
const images = document.querySelectorAll("img")
const imagesUrls = []
for (let i = 0; i < images.length; i++) {
    imagesUrls.push(images[i].src)
}
// console.log(imagesUrls)

// Exercise 8: Display every product's title and image URL in the console.
for (let i = 0; i < productCards.length; i++) {
    const title = productCards[i].querySelector(".product-title").textContent;
    const imageUrl = productCards[i].querySelector(".product-image").src;
    // console.log("Title: " + title + "\n" + "ImageUrl: " + imageUrl)
    // console.log(`Title: ${title}.\nImageUrl: ${imageUrl}`)
}


// Part 3: DOM Manipulation
// ------------------------
// Exercise 1: Change: "Shopping Cart" to "My Shopping Cart".
// document.querySelector("#main-title").textContent = "My Shopping Cart"
heroTitle.textContent = "My Shopping Cart"

// Exercise 2: Change: "Your current total" to "Total Price".
document.querySelector(".hero-subtitle").textContent = "Total Price";

// Exercise 3: Change the footer text to: "Created by DOM Students".
document.querySelector(".footer-text").textContent = "Created by DOM Students"
// footerText.textContent = "Created by DOM Students"

// Exercise 4: Change the second product title to: "Leather Card Wallet".
document.querySelectorAll(".product-title")[1].textContent = "Leather Card Wallet"

// Exercise 5: Change all quantity values from: 1 to 5.
for (let i = 0; i < quantities.length; i++) {
    quantities[i].textContent = 5;
}

// Exercise 6: Make all product titles uppercase.
const productTitles = document.querySelectorAll(".product-title")
for (let i = 0; i < productTitles.length; i++) {
    productTitles[i].textContent = productTitles[i].textContent.toUpperCase()
}
console.log(productTitles)

// Exercise 7: Change every product price to: 99.00.
for (let i = 0; i < prices.length; i++) {
    prices[i].textContent = "99.00"
}

// Exercise 8: Add a blue border to all product cards.
for (let i = 0; i < productCards.length; i++) {
    productCards[i].setAttribute("style", "border: 2px solid blue; border-radius: 10px; padding: 10px")
    // productCards[i].style.border = "2px solid blue";
    // productCards[i].style.borderRadius = "10px";
    // productCards[i].style.padding = "10px";
}

// Exercise 9: Hide the contact section using JavaScript.
document.querySelector("#contact").style.display = "none";

// Exercise 10: Create a new product card entirely with JavaScript and append it to .products-grid.
const newProductCard = document.createElement("article");
newProductCard.classList.add("product-card")

newProductCard.innerHTML = `
    <img
        src="https://hp.widen.net/content/rf5aaxp7rx/png/rf5aaxp7rx.png"
        alt="Product 6"
        class="product-image"
    />
    <h3 class="product-title">Laptop</h3>
    <p class="product-price">$<span class="price-value">999.99</span></p>
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

document.querySelector(".products-grid").appendChild(newProductCard)

// Exercise 11: Remove the Backpack product card from the DOM. PS: Don't forget that you made all product titles uppercase in question 6.


// Exercise 12: Insert a new navigation link: "About" before Contact.


// Exercise 13: Create a new paragraph under the hero title: "Welcome to our online store".


// Exercise 14: For every product card, create and append: <p>In Stock</p>.


// Part 4: DOM Events
// ------------------
// Exercise 1: When the Add Product button is clicked, display: "Button clicked!" in the console.


// Exercise 2: When any heart button is clicked, display: "Favorite clicked!" in the console.


// Exercise 3: When typing inside the Name input, print the current value in the console.


// Exercice 4: Prevent the form from submitting.


// Exercice 5: When clicking Send Message, display: "Message sent successfully!" without refreshing the page.


// Exercice 6: If the Name field is empty, display: "Please enter your name."


// Exercice 7: If the Email field is empty, display: "Email is required."


// Exercice 8: Clear all inputs after submitting.


// Exercise 9: When clicking any + button: Increase the displayed quantity by 1.


// Exercise 10: When clicking any - button: Decrease the displayed quantity by 1 (no quantities less than 1).


// Exercise 11: When clicking a trash button: Remove that product card.


// Exercise 12: When clicking a heart: Change its colour to red. Clicking the heart again should remove the red colour.


// Exercise 13: When clicking +, - or removing a product: Update the cart total.
