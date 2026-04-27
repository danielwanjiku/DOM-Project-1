// Get all the product cards
const cards = document.querySelectorAll('.card');

// Loop through each card and add functionality
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];

  // Get elements inside this card
  const plusBtn    = card.querySelector('.fa-plus-circle');
  const minusBtn   = card.querySelector('.fa-minus-circle');
  const trashBtn   = card.querySelector('.fa-trash-alt');
  const heartBtn   = card.querySelector('.fa-heart');
  const quantityEl = card.querySelector('.quantity');
  const priceEl    = card.querySelector('.unit-price');

  // Get the unit price (remove " $" and convert to number)
  const unitPrice = Number(priceEl.textContent);

  // ── Plus button — increase quantity ──────────────────
  plusBtn.addEventListener('click', function () {
    let currentQuantity = Number(quantityEl.textContent);
    currentQuantity = currentQuantity + 1;
    quantityEl.textContent = currentQuantity;
    updateTotal();
  });

  // ── Minus button — decrease quantity (not below 0) ───
  minusBtn.addEventListener('click', function () {
    let currentQuantity = Number(quantityEl.textContent);
    if (currentQuantity > 0) {
      currentQuantity = currentQuantity - 1;
      quantityEl.textContent = currentQuantity;
      updateTotal();
    }
  });

  // ── Trash button — reset quantity to 0 ───────────────
  trashBtn.addEventListener('click', function () {
    quantityEl.textContent = 0;
    updateTotal();
  });

  // ── Heart button — toggle favourite ──────────────────
  heartBtn.addEventListener('click', function () {
    if (heartBtn.style.color === 'red') {
      heartBtn.style.color = 'black';
    } else {
      heartBtn.style.color = 'red';
    }
  });
}

// ── Update total price ────────────────────────────────
function updateTotal() {
  const allCards    = document.querySelectorAll('.card');
  let total         = 0;

  for (let i = 0; i < allCards.length; i++) {
    const quantity  = Number(allCards[i].querySelector('.quantity').textContent);
    const price     = Number(allCards[i].querySelector('.unit-price').textContent);
    total = total + (quantity * price);
  }

  // Update the total price displayed on the page
  document.querySelector('.total').textContent = total + ' $';
}