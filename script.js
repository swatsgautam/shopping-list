document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('item-form');
    const itemInput = document.getElementById('item-input');
    const itemList = document.getElementById('item-list');
    const clearButton = document.getElementById('clear');
    const filterInput = document.getElementById('filter');
    const messageContainer = document.createElement('div'); // Create a message container
    messageContainer.className = 'message'; // Add a class for styling
    document.querySelector('.container').insertBefore(messageContainer, itemForm.nextSibling);

  
    // Handle form submit
    itemForm.addEventListener('submit', (event) => {
      event.preventDefault(); // This prevents the form from submitting and reloading of the page
      
      const newItemText = itemInput.value.trim();
      
      messageContainer.textContent = '';
  
      // Check if input is not empty
      if (newItemText) {
        // Create a new list item with a remove button
        const newItem = document.createElement('li');
        newItem.innerHTML = `
          ${newItemText}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        `;
  
        // Append the new item to the list
        itemList.appendChild(newItem);
  
        // Clear the input box
        itemInput.value = '';
      }
      else{
        // Show a message if input is empty
        messageContainer.textContent = 'Please add an item.';
      }
    });
  
    // Handle clicks on the remove buttons
    itemList.addEventListener('click', (event) => {
      if (event.target.closest('.remove-item')) {
        // Remove the parent list item
        event.target.closest('li').remove();
      }
    });
  
    // Handle the clear all button
    clearButton.addEventListener('click', () => {
      // Remove all items from the list
      itemList.innerHTML = '';
    });
  
    // Handle the filter input to filter list items
    filterInput.addEventListener('input', () => {
      const filterText = filterInput.value.toLowerCase();
      const items = itemList.querySelectorAll('li');
  
      items.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(filterText)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  