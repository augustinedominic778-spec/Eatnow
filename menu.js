const foodItems = [
    {
        id: 1,
        name: "Prime Ribeye Steak",
        category: "Main Course",
        price: 34.00,
        rating: 4.9,
        img: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Truffle Tagliatelle",
        category: "Pasta",
        price: 22.50,
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Gourmet Avocado Toast",
        category: "Breakfast",
        price: 14.00,
        rating: 4.7,
        img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Salmon Sashimi Plate",
        category: "Seafood",
        price: 28.00,
        rating: 4.9,
        img: "https://images.unsplash.com/photo-1534482421-0d45aa4e5ade?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Caramel Glazed Donut",
        category: "Desserts",
        price: 6.50,
        rating: 4.6,
        img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Lemon Herb Chicken",
        category: "Main Course",
        price: 19.00,
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80"
    }
];

function renderMenu() {
    const grid = document.getElementById('food-grid');
    grid.innerHTML = foodItems.map(item => `
        <div class="food-card">
            <div class="price-tag"><span>$</span>${item.price.toFixed(2)}</div>
            <div class="image-container">
                <img src="${item.img}" alt="${item.name}" class="food-image">
            </div>
            <div class="food-info">
                <span class="food-category">${item.category}</span>
                <h3 class="food-name">${item.name}</h3>
                <div class="rating">
                    <i class="fas fa-star"></i> ${item.rating} (50+ reviews)
                </div>
                <button class="order-btn" onclick="addToCart(${item.id})">
                    <i class="fas fa-plus"></i> Add to Order
                </button>
            </div>
        </div>
    `).join('');
}

// Call function on load
renderMenu();