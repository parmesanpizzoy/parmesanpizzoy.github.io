
document.addEventListener('DOMContentLoaded', function() {
    function filterProducts() {
        const selectedCategory = document.getElementById('category').value;
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Initialize the filter (show all products by default)
    filterProducts();
    
    // Add event listener to the category select dropdown
    document.getElementById('category').addEventListener('change', filterProducts);
});