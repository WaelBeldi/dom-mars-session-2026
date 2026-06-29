// Part 4: DOM Events
// ------------------
// Exercise 1: When the Add Product button is clicked, display: "Button clicked!" in the console.
// const addButton = document.getElementById("add-product-btn");

// addButton.addEventListener("click", function () {
//   console.log("Button clicked!");
// });

// Exercise 2: When any heart button is clicked, display: "Favorite clicked!" in the console.
// const hearts = document.getElementsByClassName("heart-icon");

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].addEventListener("click", function () {
//     console.log("Favorite clicked!");
//   });
// }

// Exercise 3: When typing inside the Name input, print the current value in the console.
const nameInput = document.querySelector('input[name="name"]');

nameInput.addEventListener("input", function () {
  console.log(nameInput.value);
});

// Exercice 4: Prevent the form from submitting.
const form = document.querySelector(".contact-form");
const emailInput = document.querySelector('input[name="email"]');

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Exercice 5: When clicking Send Message, display: "Message sent successfully!" without refreshing the page.
  console.log("Message sent successfully!");

  // Exercice 6: If the Name field is empty, display: "Please enter your name."
  if (nameInput.value === "") {
    console.log("Please enter your name.");
  }

  // Exercice 7: If the Email field is empty, display: "Email is required."
  if (emailInput.value === "") {
    console.log("Email is required.");
  }

  // Exercice 8: Clear all inputs after submitting.
  form.reset();
});

// Exercise 9: When clicking any + button: Increase the displayed quantity by 1.
const plusButtons = document.getElementsByClassName("plus");

for (let i = 0; i < plusButtons.length; i++) {
  plusButtons[i].addEventListener("click", function () {
    const quantity = plusButtons[i].parentElement.querySelector(".qty");

    quantity.textContent = Number(quantity.textContent) + 1;

    // Step 3: Call it after clicking +
    updateTotal();
  });
}

// Exercise 10: When clicking any - button: Decrease the displayed quantity by 1 (no quantities less than 1).
const minusButtons = document.getElementsByClassName("minus");

for (let i = 0; i < minusButtons.length; i++) {
  minusButtons[i].addEventListener("click", function () {
    const quantity = minusButtons[i].parentElement.querySelector(".qty");

    if (Number(quantity.textContent) > 1) {
      quantity.textContent = Number(quantity.textContent) - 1;
    }

    // Step 3: Call it after clicking -
    updateTotal();
  });
}

// Exercise 11: When clicking a trash button: Remove that product card.
const trashButtons = document.getElementsByClassName("trash");

// Solution 2: querySelectorAll() returns a static NodeList.
// const trashButtons = document.querySelectorAll(".trash");

for (let i = 0; i < trashButtons.length; i++) {
  trashButtons[i].addEventListener("click", function (event) {
    // trashButtons[i].parentElement.parentElement.remove();
    // trashButtons[i].closest(".product-card").remove();

    // Solution 1 (Recommended):
    // PS: Change all the previous exercises to event.currentTarget or querySelectorAll()
    // Use console.log to check indexes
    event.currentTarget.closest(".product-card").remove();
    // event.target.closest(".product-card").remove();

    // Solution 2:
    // trashButtons[i].closest(".product-card").remove();

    // Step 3: Call it after deleting a product
    updateTotal();
  });
}

/*
The issue is that getElementsByClassName() returns a live HTMLCollection.
Initially, you have:

Index 0 → Trash button 1
Index 1 → Trash button 2
Index 2 → Trash button 3
Index 3 → Trash button 4
Index 4 → Trash button 5

Suppose you click the second trash button.

It removes its product card:
    trashButtons[1].closest(".product-card").remove();

Immediately after removal, the HTMLCollection changes:

Index 0 → Trash button 1
Index 1 → Trash button 3
Index 2 → Trash button 4
Index 3 → Trash button 5

Notice there is no index 4 anymore.

If you later click what used to be the last button,
its event listener was created with: i === 4

so it still executes:
    trashButtons[4].closest(...)

But now: trashButtons[4] is undefined, producing:
    Cannot read properties of undefined (reading 'closest')
*/

// Exercise 12: When clicking a heart: Change its colour to red. Clicking the heart again should remove the red colour.
// Comment Exercise 2 and change heart color in styles.css
const hearts = document.querySelectorAll(".heart-icon");

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    // if (hearts[i].style.color === "red") {
    //   hearts[i].style.color = "";
    // } else {
    //   hearts[i].style.color = "red";
    // }

    // Add .red-heart in styles.css
    hearts[i].classList.toggle("red-heart");
  });
}

// Exercise 13: When clicking +, - or removing a product: Update the cart total.
// Step 1: Create the function
function updateTotal() {
  const cards = document.getElementsByClassName("product-card");
  let total = 0;

  for (let i = 0; i < cards.length; i++) {
    const price = Number(cards[i].querySelector(".price-value").textContent);

    const quantity = Number(cards[i].querySelector(".qty").textContent);

    total += price * quantity;
  }

  document.getElementById("cart-total").textContent = total.toFixed(2);
}

// Step 2: Calculate the initial total
updateTotal();

// Step 3: Call it after clicking +, - and deleting a product

// Exercise Bonus: Create a form to add a new product when clicking Add Product button.
const productForm = document.getElementById("product-form");

productForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("product-name").value.trim();
  const price = Number(document.getElementById("product-price").value);
  let image = document.getElementById("product-image").value.trim();

  // Validation
  if (name === "") {
    alert("Product name cannot be empty.");
    return;
  }

  if (price <= 0 || isNaN(price)) {
    alert("Price must be greater than 0.");
    return;
  }

  // Default image
  if (image === "") {
    image =
      "https://img.magnific.com/free-vector/illustration-gallery-icon_53876-27002.jpg";
  }

  // Create the card
  const newCard = document.createElement("article");
  newCard.classList.add("product-card");

  newCard.innerHTML = `
        <img
            class="product-image"
            src="${image}"
            alt="${name}"
        >

        <h3 class="product-title">${name}</h3>

        <p class="product-price">
            $<span class="price-value">${price.toFixed(2)}</span>
        </p>

        <div class="quantity-controls">
            <button class="qty-btn minus">
                <i class="fa-solid fa-minus"></i>
            </button>
            <span class="qty">1</span>
            <button class="qty-btn plus">
                <i class="fa-solid fa-plus"></i>
            </button>
            <button class="qty-btn trash">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        <button class="heart-icon">
            <i class="fa-regular fa-heart"></i>
        </button>
    `;

  document.querySelector(".products-grid").appendChild(newCard);

  // ----------------------------
  // Make the buttons functional
  // ----------------------------

  const plusButton = newCard.querySelector(".plus");
  const minusButton = newCard.querySelector(".minus");
  const trashButton = newCard.querySelector(".trash");
  const heartButton = newCard.querySelector(".heart-icon");
  const quantity = newCard.querySelector(".qty");

  plusButton.addEventListener("click", function () {
    quantity.textContent = Number(quantity.textContent) + 1;
    updateTotal();
  });

  minusButton.addEventListener("click", function () {
    if (Number(quantity.textContent) > 1) {
      quantity.textContent = Number(quantity.textContent) - 1;
      updateTotal();
    }
  });

  trashButton.addEventListener("click", function (event) {
    event.currentTarget.closest(".product-card").remove();
    updateTotal();
  });

  heartButton.addEventListener("click", function () {
    heartButton.classList.toggle("red-heart");
  });

  // Update total
  updateTotal();

  // Reset form
  productForm.reset();
});
