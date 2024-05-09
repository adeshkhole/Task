document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const checkoutContainer = document.querySelector('.checkout-container');
    const totalItemsSpan = document.getElementById('total-items');
    
    // Function to render items in the cart
    function renderCartItems() {
      checkoutContainer.innerHTML = ''; // Clear previous items
  
      cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
  
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        itemDiv.appendChild(img);
  
        const itemName = document.createElement('p');
        itemName.textContent = item.name;
        itemDiv.appendChild(itemName);
  
        const itemQuantity = document.createElement('p');
        itemQuantity.textContent = `Quantity: ${item.quantity}`;
        itemDiv.appendChild(itemQuantity);
  
        const itemPrice = document.createElement('p');
        itemPrice.textContent = `Price: $${item.price}`;
        itemDiv.appendChild(itemPrice);
  
        checkoutContainer.appendChild(itemDiv);
      });
  
      // Update total number of items in the cart
      totalItemsSpan.textContent = cartItems.length;
    }
  
    renderCartItems(); // Render cart items when the page loads
  });
  