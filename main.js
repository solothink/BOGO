document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    const totalElement = document.querySelector('.total');
    
    // Initialize the selected box
    const initialSelectedBox = document.querySelector('input[type="radio"]:checked')?.closest('.box');
    if (initialSelectedBox) {
        initialSelectedBox.classList.add('selected');
    }

    // Handle box selection
    radioInputs.forEach(radio => {
        radio.addEventListener('change', (e) => {
            // Remove selected class from all boxes
            boxes.forEach(box => box.classList.remove('selected'));
            
            // Add selected class to the clicked box
            const selectedBox = e.target.closest('.box');
            selectedBox.classList.add('selected');
            
            // Update total
            const price = selectedBox.querySelector('.price').textContent;
            totalElement.textContent = `Total: ${price}`;
        });
    });

    // Handle select changes
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        select.addEventListener('change', () => {
            // You can add additional logic here for handling size and color changes
            console.log(`${select.className} changed to: ${select.value}`);
        });
    });

    // Handle add to cart
    const addToCartButton = document.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => {
        const selectedBox = document.querySelector('.box.selected');
        const size = selectedBox.querySelector('.size-select').value;
        const color = selectedBox.querySelector('.color-select').value;
        const price = selectedBox.querySelector('.price').textContent;
        
        console.log('Added to cart:', {
            size,
            color,
            price
        });
        
        alert('Item added to cart!');
    });
});