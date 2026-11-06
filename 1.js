const btnOpen = document.querySelector(".open");
const btnClose = document.querySelector(".close");
const modal = document.querySelector(".modal");

function openModal() {
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

btnOpen.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeModal();
  }
});

const change = document.querySelector(".change");

change.addEventListener("click", function() {
  document.body.classList.toggle("dark");
});

const addToCart = document.querySelector(".add-to-cart");
const cart = document.querySelector(".cart");

addToCart.addEventListener("click", function() {
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  
  cartItem.innerHTML = `
    <span>Товар</span>
    <button class="minus">-</button>
    <span class="count">1</span>
    <button class="plus">+</button>
  `;

  const btnMinus = cartItem.querySelector(".minus");
  const btnPlus = cartItem.querySelector(".plus");
  const countSpan = cartItem.querySelector(".count");

  btnPlus.addEventListener("click", function() {
    let count = parseInt(countSpan.textContent);
    countSpan.textContent = count + 1;
  });

  btnMinus.addEventListener("click", function() {
    let count = parseInt(countSpan.textContent);
    if (count > 1) {
      countSpan.textContent = count - 1;
    }
  });

  cart.appendChild(cartItem);
});