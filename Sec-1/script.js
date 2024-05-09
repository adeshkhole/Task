document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItemCount = document.querySelector('.cart-item-count');
    let itemCount = parseInt(localStorage.getItem('cartItemCount')) || 0; // Retrieve cart count from local storage
  
    // Update cart count in the navigation bar
    cartItemCount.textContent = itemCount;
  
    // Add click event listeners to each "Add to Cart" button
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        itemCount++; // Increment cart count
        cartItemCount.textContent = itemCount; // Update cart count in the navigation bar
        localStorage.setItem('cartItemCount', itemCount); // Update cart count in local storage
      });
    });
  });
  