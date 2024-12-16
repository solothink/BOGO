import { PRICING } from './constants.js';

document.addEventListener('DOMContentLoaded', () => {
    const pricingOptions = document.querySelectorAll('.pricing-option');
    const totalElement = document.querySelector('.total');
    
    function updateUnitOptions(option) {
        const units = parseInt(option.dataset.units);
        const unitOptions = option.querySelector('.unit-options');
        
        if (!unitOptions) {
            const newUnitOptions = document.createElement('div');
            newUnitOptions.className = 'unit-options';
            
            for (let i = 1; i <= units; i++) {
                const unitRow = document.createElement('div');
                unitRow.className = 'unit-row';
                unitRow.innerHTML = `
                    <span class="unit-number">#${i}</span>
                    <select class="size-select">
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                    </select>
                    <select class="color-select">
                        <option value="black">Black</option>
                        <option value="white">White</option>
                        <option value="red">Red</option>
                    </select>
                `;
                newUnitOptions.appendChild(unitRow);
            }
            option.appendChild(newUnitOptions);
        }
    }

    pricingOptions.forEach(option => {
        const radio = option.querySelector('input[type="radio"]');
        
        radio.addEventListener('change', () => {
            // Remove selected class from all options
            pricingOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to current option
            option.classList.add('selected');
            
            // Update unit options
            updateUnitOptions(option);
            
            // Update total
            const units = option.dataset.units;
            const pricing = PRICING[units];
            totalElement.textContent = `Total: $${pricing.price.toFixed(2)} USD`;
        });
    });

    // Initialize the selected option
    const selectedOption = document.querySelector('.pricing-option.selected');
    if (selectedOption) {
        updateUnitOptions(selectedOption);
    }
});