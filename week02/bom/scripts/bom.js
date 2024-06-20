// Select the necessary DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add the event listener to the button
button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        // Create new list item and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        // Set their contents
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        
        // Append the delete button to the list item
        li.append(deleteButton);
        
        // Append the list item to the list
        list.append(li);
        
        // Add event listener to the delete button
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
        
        // Clear the input field and focus it
        input.value = '';
        input.focus();
    }
});
