// Menu Data
const menuData = {
    starters: [
        { name: "Paneer Tikka", price: "₹250", desc: "Grilled paneer with spices", img: "https://spicecravings.com/wp-content/uploads/2020/10/Paneer-Tikka-Featured-1.jpg" },
        { name: "Chicken 65", price: "₹320", desc: "Spicy fried chicken", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjvbtXUT__rhXbksJCWhasQUNuSYt2ykeXw&s" },
        { name: "Veg Pakora", price: "₹180", desc: "Crispy mixed vegetable fritters", img: "https://sandhyahariharan.co.uk/wp-content/uploads/2023/09/Vegetable-Pakora-11.jpg" }
    ],
    mains: [
        { name: "Butter Chicken", price: "₹380", desc: "Creamy tomato butter curry", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDCEHR21Otcq7z3FQ2JCjX6hviR2zD9qlAQ&s" },
        { name: "Dal Makhani", price: "₹280", desc: "Slow cooked black lentils", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDWcxE3nXYImBIy87369VvBja8vUKU5gbMg&s" },
        { name: "Biryani", price: "₹420", desc: "Aromatic spiced rice", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuWkqR087ENNtJpkaDYBJ5iZx7BeaUJXfjzA&s" }
    ],
    desserts: [
        { name: "Gulab Jamun", price: "₹120", desc: "Sweet milk dumplings", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP1yGTSC7_QSIsYaNczzVmYa8cZsZ_v9EQ7g&s" },
        { name: "Rasmalai", price: "₹150", desc: "Soft cheese balls in cream", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpjWLMX4uOvqZUhEWJL5SkwNgW-Jjhw8jAg&s" }
    ],
    drinks: [
        { name: "Lassi", price: "₹80", desc: "Sweet yogurt drink", img: "https://www.spicypunch.com/wp-content/uploads/2019/06/lassi-recipe-1280x720.jpg" },
        { name: "Masala Chai", price: "₹50", desc: "Spiced Indian tea", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTV97haGKMKYtfnn50N1H32sNejlF-z54SdA&s" }
    ]
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    setTimeout(() => {
        document.querySelector('.preloader').style.opacity = '0';
        setTimeout(() => document.querySelector('.preloader').style.display = 'none', 500);
    }, 1500);

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255,255,255,0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255,255,255,0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
            navMenu.classList.remove('active');
        });
    });

    // Menu tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelector('.tab-btn.active').classList.remove('active');
            this.classList.add('active');
            const tab = this.dataset.tab;
            loadMenu(tab);
        });
    });

    // Load initial menu
    loadMenu('starters');

    // Booking form
    document.getElementById('bookingForm').addEventListener('submit', handleBooking);
});

function loadMenu(category) {
    const menuGrid = document.getElementById('menuGrid');
    const items = menuData[category];
    
    menuGrid.innerHTML = items.map(item => `
        <div class="menu-item">
            <img src="${item.img}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p>${item.desc}</p>
            <div class="price">${item.price}</div>
        </div>
    `).join('');
}

function handleBooking(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    // Simple validation
    if (!name || !phone || !date || !time || !guests) {
        alert('Please fill all fields');
        return;
    }

    // Simulate booking
    alert(`🎉 Table booked successfully!\n\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\n\nWe will call you to confirm.`);
    
    // Reset form
    e.target.reset();
}

// Set today's date as minimum for booking
document.getElementById('date').min = new Date().toISOString().split('T')[0];