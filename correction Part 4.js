// Part 4: DOM Events
// ------------------
// Exercise 1: When the Add Product button is clicked, display: "Button clicked!" in the console.
const addButton = document.querySelector("#add-product-btn");

addButton.addEventListener("click", function () {
  console.log("Button clicked!");
});

// Exercise 2: When any heart button is clicked, display: "Favorite clicked!" in the console.
// const hearts = document.querySelectorAll(".heart-icon");

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].addEventListener("click", function () {
//     console.log("Favorite clicked!");
//   });
// }

// Exercise 3: When typing inside the Name input, print the current value in the console.
const nameInput = document.querySelector("input[name='name']");

nameInput.addEventListener("input", function () {
  console.log(nameInput.value);
});

// Exercice 4: Prevent the form from submitting.
const contactForm = document.querySelector(".contact-form");
const emailInput = document.querySelector("input[name='email']");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Exercice 5: When clicking Send Message, display: "Message sent successfully!" without refreshing the page.
  console.log("Message sent successfully!");

  // Exercice 6: If the Name field is empty, display: "Please enter your name."
  if (nameInput.value === "") {
    // console.log("Please enter your name.");
    alert("Please enter your name.")
  }

  // Exercice 7: If the Email field is empty, display: "Email is required."
  if (emailInput.value === "") {
    console.log("Email is required.");
  }

  // Exercice 8: Clear all inputs after submitting.
  contactForm.reset()
});

// Exercise 9: When clicking any + button: Increase the displayed quantity by 1.
const plusButtons = document.querySelectorAll(".plus")

for (let i = 0; i < plusButtons.length; i++) {
    plusButtons[i].addEventListener("click", function () {
        const quantity = plusButtons[i].parentElement.querySelector(".qty")
        quantity.textContent = parseInt(quantity.textContent) + 1

        updateTotal();
    })
}

// Exercise 10: When clicking any - button: Decrease the displayed quantity by 1 (no quantities less than 1).
const minusButtons = document.querySelectorAll(".minus")

for (let i = 0; i < minusButtons.length; i++) {
    minusButtons[i].addEventListener("click", function () {
        const quantity = minusButtons[i].parentElement.querySelector(".qty")
        if (Number(quantity.textContent) > 1) {
            quantity.textContent = parseInt(quantity.textContent) - 1
        }

        updateTotal();
    })
}

// Exercise 11: When clicking a trash button: Remove that product card.
const trashButtons = document.getElementsByClassName("trash");
console.log(trashButtons)

for (let i = 0; i < trashButtons.length; i++) {
    trashButtons[i].addEventListener("click", function (event) {
        // trashButtons[i].parentElement.parentElement.remove();
        console.log(i)
        console.log(trashButtons)
        // trashButtons[i].closest(".product-card").remove();

        event.currentTarget.closest(".product-card").remove();

        updateTotal();
    })
}

// Exercise 12: When clicking a heart: Change its colour to red. Clicking the heart again should remove the red colour.
const heartButtons = document.querySelectorAll(".heart-icon");

for (let i = 0; i < heartButtons.length; i++) {
    heartButtons[i].addEventListener("click", function () {
        // if (heartButtons[i].style.color === "red") {
        //     heartButtons[i].style.color = ""
        // } else {
        //     heartButtons[i].style.color = "red"
        // }
        heartButtons[i].classList.toggle("red-heart")
    })
}

// Exercise 13: When clicking +, - or removing a product: Update the cart total.
function updateTotal() {
    const cards = document.querySelectorAll(".product-card")

    let total = 0;

    for (let i = 0; i < cards.length; i++) {
        const price = Number(cards[i].querySelector(".price-value").textContent)
        const quantity = Number(cards[i].querySelector(".qty").textContent)

        total += price * quantity
    }
    console.log(total)
    document.querySelector("#cart-total").textContent = total.toFixed(2)
}

updateTotal();