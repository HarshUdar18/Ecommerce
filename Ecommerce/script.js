document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const loadMoreButton = document.getElementById('load-more');
    const disclosureButton = document.getElementById('disclosure-btn');
    const disclosureContent = document.getElementById('disclosure-content');

    const additionalProducts = [
        { src: 'img/featured/cat-1.jpg', name: 'Orange', price: '₹ 89.99/kg' },
        { src: 'img/featured/cat-2.jpg', name: 'Dry Fruit', price: '₹ 99.99/kg' },
        { src: 'img/featured/cat-3.jpg', name: 'Mix Fruit', price: '₹ 109.99/kg' },
        { src: 'img/featured/cat-4.jpg', name: 'Mix Fruit Juice', price: '₹ 119.99/kg' },

    ];

    loadMoreButton.addEventListener('click', () => {
        additionalProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';

            const productImg = document.createElement('img');
            productImg.src = product.src;
            productImg.alt = product.name;

            const productName = document.createElement('p');
            productName.textContent = product.name;

            const productPrice = document.createElement('p');
            productPrice.className = 'price';
            productPrice.textContent = product.price;

            const addToCartButton = document.createElement('button');
            addToCartButton.className = 'btn';
            addToCartButton.textContent = 'Add to Cart';

            productItem.appendChild(productImg);
            productItem.appendChild(productName);
            productItem.appendChild(productPrice);
            productItem.appendChild(addToCartButton);

            productGrid.appendChild(productItem);
        });

        // Optionally, you can hide the "Load More Products" button after loading more products
        loadMoreButton.style.display = 'none';
    });

    disclosureButton.addEventListener('click', () => {
        if (disclosureContent.style.display === 'none' || disclosureContent.style.display === '') {
            disclosureContent.style.display = 'block';
            disclosureButton.textContent = 'Hide More Information';
        } else {
            disclosureContent.style.display = 'none';
            disclosureButton.textContent = 'Show More Information';
        }
    });
});
