const foodItems = [
    { id: 1, name: "Golden Glaze Burger", price: 14.00, category: "Burgers", img: "burger1.jpg" },
    { id: 2, name: "Pepperoni Feast", price: 18.00, category: "Pizza", img: "pizza1.jpg" },
    { id: 3, name: "Quinoa Power Bowl", price: 12.50, category: "Salads", img: "salad1.jpg" },
    { id: 4, name: "Double Truffle Burger", price: 16.00, category: "Burgers", img: "burger2.jpg" },
    { id: 5, name: "Margherita Gold", price: 15.00, category: "Pizza", img: "pizza2.jpg" },
    { id: 6, name: "Chocolate Lava Cake", price: 8.00, category: "Desserts", img: "cake1.jpg" }
];

let cart = [];

// Initialize Menu
function renderMenu(items) {
    const menuGrid = document.getElementById('menu');
    menuGrid.innerHTML = items.map(item => `
        <div class="food-card">
            <div class="food-info">
                <span class="category-tag">${item.category}</span>
                <h3>${item.name}</h3>
                <p class="price">$${item.price.toFixed(2)}</p>
                <button class="add-btn" onclick="addToCart(${item.id})">Add to Order</button>
            </div>
        </div>
    `).join('');
}

// Filter Logic
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        btn.classList.add('active');
        const category = btn.getAttribute('data-filter');
        const filtered = category === 'all' ? foodItems : foodItems.filter(f => f.category === category);
        renderMenu(filtered);
    });
});

// Cart Logic
function addToCart(id) {
    const item = foodItems.find(p => p.id === id);
    cart.push(item);
    updateCartUI();
    toggleCart(true); // Open sidebar when item added
}

function updateCartUI() {
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-subtotal');
    const countEl = document.getElementById('cart-count');
    
    container.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div>
                <h4>${item.name}</h4>
                <small>$${item.price}</small>
            </div>
            <button onclick="removeFromCart(${index})" style="background:none; border:none; color:red; cursor:pointer;">Remove</button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalEl.innerText = `$${total.toFixed(2)}`;
    countEl.innerText = cart.length;
}

function toggleCart(open = null) {
    const sidebar = document.getElementById('cart-sidebar');
    if (open === true) sidebar.classList.add('active');
    else if (open === false) sidebar.classList.remove('active');
    else sidebar.classList.toggle('active');
}

function processOrder() {
    if(cart.length === 0) return alert("Your cart is empty!");
    alert("Order Placed Successfully! Your chef is preparing your meal.");
    cart = [];
    updateCartUI();
    toggleCart(false);
}

// Initial Load
renderMenu(foodItems);