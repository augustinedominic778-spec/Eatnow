const foodItems = [
    {
        id: 1,
        name: "Premium Ribeye Steak",
        category: "Main Course",
        price: 28000,
        rating: 4.9,
        // Updated reliable link
        img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Truffle Tagliatelle",
        category: "Pasta",
        price: 18000,
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Mediterranean Salad",
        category: "Healthy",
        price: 8500,
        rating: 4.7,
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Classic Wagyu Burger",
        category: "Burgers",
        price: 12500,
        rating: 4.9,
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
    }
];

// This function now includes a "fallback" image if the link breaks
function renderMenu() {
    const grid = document.getElementById('food-grid');
    const placeholder = "https://via.placeholder.com/600x400?text=Delicious+Meal+Coming+Soon";

    grid.innerHTML = foodItems.map(item => `
        <div class="food-card">
            <div class="price-tag"><span>₦</span>${item.price.toLocaleString()}</div>
            <div class="image-container">
                <img src="${item.img}" 
                     alt="${item.name}" 
                     class="food-image" 
                     onerror="this.src='${placeholder}';">
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

renderMenu();