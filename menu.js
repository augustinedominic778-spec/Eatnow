const foodItems = [
    {
        id: 1,
        name: "Premium Ribeye Steak",
        category: "Main Course",
        price: 28000,
        rating: 4.9,
        img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Truffle Tagliatelle",
        category: "Pasta",
        price: 18000,
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Mediterranean Salad",
        category: "Healthy",
        price: 8500,
        rating: 4.7,
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Classic Wagyu Burger",
        category: "Burgers",
        price: 12500,
        rating: 4.9,
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "Spicy Tuna Roll",
        category: "Sushi",
        price: 9000,
        rating: 4.6,
        img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Chicken Parmesan",
        category: "Main Course",
        price: 14500,
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        name: "Margherita Pizza",
        category: "Pizza",
        price: 11000,
        rating: 4.7,
        img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        name: "Chocolate Lava Cake",
        category: "Dessert",
        price: 6500,
        rating: 4.9,
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        name: "Grilled Salmon",
        category: "Healthy",
        price: 22000,
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 10,
        name: "Lobster Bisque",
        category: "Soup",
        price: 16000,
        rating: 4.7,
        img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 11,
        name: "Smokey Jollof Rice",
        category: "Nigerian",
        price: 8500,
        rating: 5.0,
        img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 12,
        name: "Pounded Yam & Egusi",
        category: "Nigerian",
        price: 10500,
        rating: 4.9,
        img: "https://images.unsplash.com/photo-1643656123478-72726e301713?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 13,
        name: "Spicy Suya Platter",
        category: "Nigerian",
        price: 7000,
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1593560708920-63984a6d605e?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 14,
        name: "Fried Plantain (Dodo)",
        category: "Sides",
        price: 3000,
        rating: 4.7,
        img: "https://images.unsplash.com/photo-1603088549155-6ae9395b928f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 15,
        name: "Pepper Soup (Goat)",
        category: "Nigerian",
        price: 9000,
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 16,
        name: "Ofada Rice",
        category: "Nigerian",
        price: 12000,
        rating: 4.9,
        img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80"
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