// DOM Selectors
const productSection = document.getElementById("products");
// console.log(productSection)

const productCards = document.getElementsByClassName("product-card");
// console.log(productCards)

const productImages = document.getElementsByTagName("img");
// console.log(productImages)

const querySelector = document.querySelector("img");
// console.log(querySelector)

const querySelectorAll = document.querySelectorAll("img");
// console.log(querySelectorAll)

// DOM Attributes
const firstProductImage = productImages[0];
// console.log(firstProductImage);
// firstProductImage.setAttribute("class", "nav-logo-cart class2 class3")
// firstProductImage.classList.remove("class2")

// DOM Manipulation
// firstProductImage.style.border = "2px solid red"

const heroTitle = document.querySelector("#hero-title");
// heroTitle.style.fontSize = "100px"

const cartTotal = document.querySelector("#cart-total");
// console.log(cartTotal.textContent);
// cartTotal.innerText = "<h2>New Total</h2>"

// Create a new product card
const newProductCard = document.createElement("article");
newProductCard.classList.add("product-card");
// newProductCard.setAttribute("class", "product-card")
// newProductCard.className = "product-card"

// const newProductImage = document.createElement("img")
// newProductImage.src = "https://hp.widen.net/content/rf5aaxp7rx/png/rf5aaxp7rx.png"
// newProductImage.alt = "Product 6"
// newProductImage.classList.add("product-image")
// newProductCard.appendChild(newProductImage)

// const newProductName = document.createElement("h3")
// newProductName.textContent = "Laptop"
// newProductName.classList.add("product-title")
// newProductCard.appendChild(newProductName)

// const newProductPrice = document.createElement("p")
// newProductPrice.textContent = "$"
// newProductPrice.classList.add("product-price")
// newProductCard.appendChild(newProductPrice)

// const newProductPriceValue = document.createElement("span")
// newProductPriceValue.textContent = "999.99"
// newProductPrice.appendChild(newProductPriceValue)

const productsGrid = document.querySelector(".products-grid");
productsGrid.appendChild(newProductCard);

newProductCard.innerHTML = `
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

// HTMLCollection VS NodeList Example
// const productCardsCollection = document.getElementsByClassName("product-card");
// console.log("HTMLCollection length:", productCardsCollection.length); // HTMLCollection: Live collection of elements with the class "product-card"
// const newProductCard2 = document.createElement("article");
// newProductCard2.classList.add("product-card");
// productsGrid.appendChild(newProductCard2);
// console.log("HTMLCollection length after adding product:", productCardsCollection.length); // HTMLCollection: Live collection of elements with the class "product-card"

// const productCardsNodeList = document.querySelectorAll(".product-card");
// console.log("NodeList length:", productCardsNodeList.length); // NodeList: Static collection of elements with the class "product-card"
// const newProductCard3 = document.createElement("article");
// newProductCard3.classList.add("product-card");
// productsGrid.appendChild(newProductCard3);
// console.log("NodeList length after adding product:", productCardsNodeList.length); // NodeList: Static collection of elements with the class "product-card"
// const productCardsNodeList2 = document.querySelectorAll(".product-card");
// console.log("NodeList length after adding product:", productCardsNodeList2.length); // NodeList: Static collection of elements with the class "product-card"

// Event Listeners
const addButton = document.querySelector("#add-product-btn");
addButton.addEventListener("mouseenter", function () {
    alert("Add Product button hovered!");
});

// Heart icon click event
const heartIcons = document.querySelectorAll(".heart-icon");