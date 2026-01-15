const foodItems = [
    {
        id: 4,
        name: "Classic Wagyu Burger", // Matches menu.js
        price: 12500,
        category: "Burgers",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Truffle Tagliatelle", // Matches menu.js
        price: 18000,
        category: "Pasta",
        img: "https://images.unsplash.com/photo-1626844131082-256783844137?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 11,
        name: "Smokey Jollof Rice", // Matches menu.js
        price: 8500,
        category: "Nigerian",
        img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=800&q=80"
    }
];

const foodGrid = document.getElementById('food-grid');
const cartCount = document.getElementById('cart-count');
let count = 0;

// Function to display food items
function displayMenu() {
    foodItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'food-card';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="food-image">
            <div class="food-info">
                <h3>${item.name}</h3>
                <p class="price">₦${item.price.toLocaleString()}</p>
                <button class="add-btn" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        `;
        foodGrid.appendChild(card);
    });
}

function addToCart(id) {
    count++;
    cartCount.innerText = count;
    alert("Item added to cart!");
}

// Initialize
displayMenu();