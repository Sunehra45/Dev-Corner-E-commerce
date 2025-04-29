const productsinfo = [
    {
        "name": "MacBook Pro M2",
        "price": 1800,
        "image": "laptop-macbook-pro.jpg",
        "category": "Laptops",
        "description": "Powerful M2 chip, Retina display, and all-day battery life."
    },
    {
        "name": "Dell XPS 15",
        "price": 1600,
        "image": "laptop-dell-xps-15.jpg",
        "category": "Laptops",
        "description": "Ultra-thin, high-performance laptop with a stunning display."
    },
    {
        "name": "HP Spectre x360",
        "price": 1400,
        "image": "laptop-hp-spectre.jpg",
        "category": "Laptops",
        "description": "2-in-1 convertible laptop with a sleek design and touch screen."
    },
    {
        "name": "Lenovo ThinkPad X1",
        "price": 1500,
        "image": "laptop-thinkpad-x1.jpg",
        "category": "Laptops",
        "description": "Business laptop with robust performance and long battery life."
    },
    {
        "name": "ASUS ROG Zephyrus G14",
        "price": 1700,
        "image": "laptop-asus-rog.jpg",
        "category": "Laptops",
        "description": "Gaming laptop with a powerful GPU and high refresh rate screen."
    },
    {
        "name": "iPhone 14 Pro",
        "price": 1200,
        "image": "smartphone-iphone14pro.jpg",
        "category": "Smartphones",
        "description": "Latest iPhone with ProMotion display and advanced camera."
    },
    {
        "name": "Samsung Galaxy S23 Ultra",
        "price": 1100,
        "image": "smartphone-galaxy-s23.jpg",
        "category": "Smartphones",
        "description": "High-end Android phone with S-Pen support and a 200MP camera."
    },
    {
        "name": "Google Pixel 7 Pro",
        "price": 900,
        "image": "smartphone-pixel7pro.jpg",
        "category": "Smartphones",
        "description": "Stock Android experience with an AI-powered camera."
    },
    {
        "name": "OnePlus 11",
        "price": 800,
        "image": "smartphone-oneplus11.jpg",
        "category": "Smartphones",
        "description": "Flagship killer with fast charging and OxygenOS."
    },
    {
        "name": "Xiaomi Mi 13",
        "price": 750,
        "image": "smartphone-xiaomi13.jpg",
        "category": "Smartphones",
        "description": "Budget-friendly phone with a high-quality camera and display."
    },
    {
        "name": "iPad Pro 12.9",
        "price": 1100,
        "image": "tablet-ipad-pro.jpg",
        "category": "Tablets",
        "description": "Powerful tablet with an M2 chip and Apple Pencil support."
    },
    {
        "name": "Samsung Galaxy Tab S8",
        "price": 850,
        "image": "tablet-galaxy-tab.jpg",
        "category": "Tablets",
        "description": "High-end Android tablet with S-Pen and AMOLED display."
    },
    {
        "name": "Microsoft Surface Pro 9",
        "price": 1300,
        "image": "tablet-surface-pro.jpg",
        "category": "Tablets",
        "description": "Hybrid device with Windows OS and detachable keyboard."
    },
    {
        "name": "Amazon Fire HD 10",
        "price": 200,
        "image": "tablet-fire-hd.jpg",
        "category": "Tablets",
        "description": "Affordable tablet for entertainment and reading."
    },
    {
        "name": "Lenovo Tab P11",
        "price": 500,
        "image": "tablet-lenovo-p11.jpg",
        "category": "Tablets",
        "description": "Mid-range tablet with a solid display and stylus support."
    },
    {
        "name": "Apple Watch Series 8",
        "price": 500,
        "image": "smartwatch-apple8.jpg",
        "category": "Smartwatches",
        "description": "Advanced health tracking with ECG and crash detection."
    },
    {
        "name": "Samsung Galaxy Watch 5",
        "price": 350,
        "image": "smartwatch-galaxy5.jpg",
        "category": "Smartwatches",
        "description": "Wear OS-powered smartwatch with great battery life."
    },
    {
        "name": "Garmin Fenix 7",
        "price": 700,
        "image": "smartwatch-garmin7.jpg",
        "category": "Smartwatches",
        "description": "Premium fitness smartwatch with GPS and rugged design."
    },
    {
        "name": "Fitbit Versa 4",
        "price": 250,
        "image": "smartwatch-fitbit4.jpg",
        "category": "Smartwatches",
        "description": "Fitness-focused smartwatch with sleep tracking."
    },
    {
        "name": "Huawei Watch GT3",
        "price": 300,
        "image": "smartwatch-huawei3.jpg",
        "category": "Smartwatches",
        "description": "Elegant design with long battery life and health tracking."
    },
    {
        "name": "PlayStation 5",
        "price": 600,
        "image": "console-ps5.jpg",
        "category": "Gaming Consoles",
        "description": "Next-gen gaming console with powerful hardware."
    },
    {
        "name": "Xbox Series X",
        "price": 550,
        "image": "console-xbox.jpg",
        "category": "Gaming Consoles",
        "description": "Microsoft's most powerful console for 4K gaming."
    },
    {
        "name": "Nintendo Switch OLED",
        "price": 350,
        "image": "console-switch.jpg",
        "category": "Gaming Consoles",
        "description": "Hybrid console with an OLED screen for better visuals."
    },
    {
        "name": "Steam Deck",
        "price": 400,
        "image": "console-steamdeck.jpg",
        "category": "Gaming Consoles",
        "description": "Handheld PC gaming device with powerful performance."
    },
    {
        "name": "Meta Quest 2",
        "price": 300,
        "image": "console-quest2.jpg",
        "category": "Gaming Consoles",
        "description": "VR headset for immersive gaming experiences."
    },
    {
        "name": "Sony WH-1000XM5",
        "price": 400,
        "image": "accessory-sony-headphones.jpg",
        "category": "Accessories",
        "description": "Top-tier noise-canceling headphones with premium sound."
    },
    {
        "name": "Logitech MX Master 3",
        "price": 100,
        "image": "accessory-logitech-mouse.jpg",
        "category": "Accessories",
        "description": "Ergonomic and highly customizable wireless mouse."
    },
    {
        "name": "Razer BlackWidow Keyboard",
        "price": 150,
        "image": "accessory-razer-keyboard.jpg",
        "category": "Accessories",
        "description": "Mechanical gaming keyboard with RGB lighting."
    },
    {
        "name": "Samsung T7 SSD",
        "price": 120,
        "image": "accessory-samsung-ssd.jpg",
        "category": "Accessories",
        "description": "Fast external SSD for storage and backups."
    },
    {
        "name": "Anker PowerCore 20000",
        "price": 60,
        "image": "accessory-anker-powerbank.jpg",
        "category": "Accessories",
        "description": "High-capacity power bank for charging on the go."
    }
]
export default productsinfo;
