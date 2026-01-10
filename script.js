const foodItems = [
    {
        id: 1,
        name: "Classic Wagyu Burger",
        price: 15.99,
        category: "Burgers",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        name: "Truffle Mushroom Pizza",
        price: 18.50,
        category: "Pizza",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        name: "Dragon Sushi Roll",
        price: 12.00,
        category: "Sushi",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=500&q=80"
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
            <img src="${item.image}" alt="${item.name}" class="food-image">
            <div class="food-info">
                <h3>${item.name}</h3>
                <p class="price">$${item.price}</p>
                <button class="add-btn" onclick="addToCart()">Add to Cart</button>
            </div>
        `;
        foodGrid.appendChild(card);
    });
}

function addToCart() {
    count++;
    cartCount.innerText = count;
    alert("Item added to cart!");
}

// Initialize
displayMenu();