import { MenuItem, SpecialOffer, GalleryItem, Review } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // --- Bakery ---
  {
    id: 'bak-1',
    name: 'Fresh Bread (Sourdough)',
    description: 'Traditional rustic sourdough and soft white farmhouse bread baked daily.',
    price: 180,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=600',
    category: 'bakery',
    tags: ['Fresh Daily', 'Artisan'],
    isBestSeller: true
  },
  {
    id: 'bak-2',
    name: 'Butter Croissants',
    description: 'Flaky, buttery French pastries baked to golden perfection.',
    price: 250,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600',
    category: 'bakery',
    tags: ['Warm', 'Buttery']
  },
  {
    id: 'bak-3',
    name: 'Fresh Glazed Donuts',
    description: 'Soft yeast donuts dipped in rich chocolate ganache or classic sugar glaze.',
    price: 150,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600',
    category: 'bakery',
    tags: ['Sweet', 'Popular'],
    isBestSeller: true
  },
  {
    id: 'bak-4',
    name: 'Chunky Cookies',
    description: 'Thick, chewy cookies with massive chunks of melted milk and dark chocolate.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600',
    category: 'bakery',
    tags: ['Freshly Baked']
  },
  {
    id: 'bak-5',
    name: 'Gourmet Muffins',
    description: 'Soft muffins packed with wild blueberries or decadent double-chocolate pieces.',
    price: 180,
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=600',
    category: 'bakery',
    tags: ['Blueberry', 'Chocolate']
  },
  {
    id: 'bak-6',
    name: 'Flaky Puff Pastries',
    description: 'Golden puff pastry filled with creamy vanilla custard or seasoned chicken.',
    price: 220,
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80&w=600',
    category: 'bakery',
    tags: ['Savory', 'Sweet']
  },
  {
    id: 'bak-7',
    name: 'Signature Celebration Cakes',
    description: 'Multi-layered customized chocolate fudge, vanilla, or red velvet cakes.',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600',
    category: 'bakery',
    tags: ['Pre-order', 'Celebrations']
  },
  {
    id: 'bak-8',
    name: 'Buttercream Cupcakes',
    description: 'Aesthetic mini-cakes topped with swirls of delicious house-made buttercream.',
    price: 150,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600',
    category: 'bakery',
    tags: ['Sweet Treats']
  },

  // --- Breakfast ---
  {
    id: 'brk-1',
    name: 'Cheese & Mushroom Omelette',
    description: 'Fluffy three-egg omelette stuffed with wild mushrooms, melted cheddar, and toast.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=600',
    category: 'breakfast',
    tags: ['Egg-cellent', 'High Protein']
  },
  {
    id: 'brk-2',
    name: 'Avocado Poached Egg Toast',
    description: 'Crusty sourdough toast layered with avocado mash, cherry tomatoes, and poached eggs.',
    price: 280,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600',
    category: 'breakfast',
    tags: ['Healthy', 'Trending']
  },
  {
    id: 'brk-3',
    name: 'Classic Breakfast Platter',
    description: 'Sausages, crispy turkey bacon, scrambled eggs, hashbrowns, baked beans, and toast.',
    price: 650,
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=600',
    category: 'breakfast',
    tags: ['Full Meal', 'Morning Fuel']
  },
  {
    id: 'brk-4',
    name: 'Buttermilk Pancakes',
    description: 'Stack of three thick pancakes drizzled with pure maple syrup and salted butter.',
    price: 420,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=600',
    category: 'breakfast',
    tags: ['Sweet', 'Fluffy']
  },

  // --- Pizza ---
  {
    id: 'piz-1',
    name: 'Chicken Tikka Pizza',
    description: 'Tender tandoori chicken tikka chunks, sliced red onions, green chilies, and coriander.',
    price: 890,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600',
    category: 'pizza',
    tags: ['Spicy', 'House Special'],
    isBestSeller: true // This is the requested "Bakery Special Pizza" or equivalent
  },
  {
    id: 'piz-2',
    name: 'Smoky BBQ Chicken Pizza',
    description: 'Grilled chicken drenched in smoky BBQ sauce, sweet red onion rings, and cilantro.',
    price: 950,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600',
    category: 'pizza',
    tags: ['BBQ Sauce', 'Cheesy']
  },
  {
    id: 'piz-3',
    name: 'Supreme Feast Pizza',
    description: 'Pepperoni, hand-pinched seasoned beef, black olives, sliced mushrooms, and bell peppers.',
    price: 1050,
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=600',
    category: 'pizza',
    tags: ['Fully Loaded']
  },
  {
    id: 'piz-4',
    name: 'Classic Four-Cheese Pizza',
    description: 'Gooey blend of fresh Mozzarella, premium Cheddar, Parmesan, and Provolone cheeses.',
    price: 750,
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&q=80&w=600',
    category: 'pizza',
    tags: ['Vegetarian', 'Cheesy']
  },
  {
    id: 'piz-5',
    name: 'Garden Veggie Pizza',
    description: 'Crispy bell peppers, sweet corn kernels, diced tomatoes, black olives, and onions.',
    price: 820,
    image: 'https://images.unsplash.com/photo-1571066811602-71683a3f680d?auto=format&fit=crop&q=80&w=600',
    category: 'pizza',
    tags: ['Vegetarian', 'Healthy']
  },

  // --- Main Course ---
  {
    id: 'main-1',
    name: 'Mexican Beef Steak',
    description: 'Flame-grilled prime beef ribeye steak seasoned with hot Mexican spices, served with dynamic salsa and mashed potatoes.',
    price: 1650,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600',
    category: 'main-course',
    tags: ['Premium', 'Chef’s Special', 'Spicy'],
    isBestSeller: true
  },
  {
    id: 'main-2',
    name: 'Tender Grilled Chicken',
    description: 'Double flame-grilled chicken breast fillets topped with creamy mushroom herb gravy and fries.',
    price: 1150,
    image: 'https://images.unsplash.com/photo-1327984497960-9fa5243be44f?auto=format&fit=crop&q=80&w=600',
    category: 'main-course',
    tags: ['Healthy', 'Juicy']
  },
  {
    id: 'main-3',
    name: 'Signature Burger',
    description: 'Thick, hand-pressed double beef patty with melted cheese, caramelized onions, and our special sauce on a toasted brioche bun.',
    price: 450,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600',
    category: 'main-course',
    tags: ['Best Value', 'Juicy'],
    isBestSeller: true
  },
  {
    id: 'main-4',
    name: 'Royal Club Sandwich',
    description: 'Triple-decker loaded with roast chicken, smoked turkey strips, boiled egg, cheese, and crisp lettuce.',
    price: 380,
    image: 'https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&q=80&w=600',
    category: 'main-course',
    tags: ['Classic', 'Popular']
  },
  {
    id: 'main-5',
    name: 'Creamy Chicken Alfredo Pasta',
    description: 'Fettuccine pasta tossed in rich parmesan cream sauce, topped with sliced flame-grilled chicken.',
    price: 790,
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&q=80&w=600',
    category: 'main-course',
    tags: ['Creamy', 'Italian']
  },
  {
    id: 'main-6',
    name: 'Gourmet Fried Rice Plate',
    description: 'Wok-fired aromatic basmati rice tossed with fresh carrots, scallions, eggs, and seasoned chicken.',
    price: 690,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600',
    category: 'main-course',
    tags: ['Wok Fresh', 'Satisfying']
  },

  // --- Desserts ---
  {
    id: 'des-1',
    name: 'Fudge Chocolate Cake',
    description: 'Decadent, layered rich chocolate fudge cake served warm with a glossy chocolate glaze.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600',
    category: 'desserts',
    tags: ['Best Seller', 'Warm'],
    isBestSeller: true
  },
  {
    id: 'des-2',
    name: 'New York Cheesecake',
    description: 'Classic velvety New York cheesecake resting on graham cracker crust, topped with sweet red raspberry sauce.',
    price: 420,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600',
    category: 'desserts',
    tags: ['Creamy', 'Decadent'],
    isBestSeller: true
  },
  {
    id: 'des-3',
    name: 'Warm Fudge Brownies',
    description: 'Ultra-chewy, dense chocolate brownies packed with walnuts, served with a scoop of premium vanilla ice cream.',
    price: 250,
    image: 'https://images.unsplash.com/photo-1606312440536-4081af49578b?auto=format&fit=crop&q=80&w=600',
    category: 'desserts',
    tags: ['Nutty', 'Warm']
  },
  {
    id: 'des-4',
    name: 'Premium Churned Ice Cream',
    description: 'Two scoops of house-crafted premium gelato. Select from Dark Chocolate, French Vanilla, or Pistachio.',
    price: 280,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=600',
    category: 'desserts',
    tags: ['Chilled', 'Refreshing']
  },
  {
    id: 'des-5',
    name: 'Traditional Rich Fruit Cake',
    description: 'Classic dense, buttery loaf loaded with candied citrus peel, raisins, and dried cherries.',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&q=80&w=600',
    category: 'desserts',
    tags: ['Holiday Classic']
  },

  // --- Coffee & Beverages ---
  {
    id: 'bev-1',
    name: 'Organic Espresso Shot',
    description: 'Bold, rich shot pulled from our house blend of 100% roasted organic Arabica beans.',
    price: 250,
    image: 'https://images.unsplash.com/photo-1510707577719-0d7e8baf0703?auto=format&fit=crop&q=80&w=600',
    category: 'beverages',
    tags: ['Intense', 'Pure Coffee']
  },
  {
    id: 'bev-2',
    name: 'Velvety Cappuccino',
    description: 'The ultimate balance of rich espresso, steamed milk, and a thick, cloud-like layer of foam.',
    price: 320,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=600',
    category: 'beverages',
    tags: ['Barista Art', 'Popular'],
    isBestSeller: true
  },
  {
    id: 'bev-3',
    name: 'Silky Caffè Latte',
    description: 'Double espresso shot balanced with a generous pour of warm steamed milk and microfoam.',
    price: 320,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600',
    category: 'beverages',
    tags: ['Smooth', 'Mild']
  },
  {
    id: 'bev-4',
    name: 'Dark Cocoa Mocha',
    description: 'Rich espresso and dark Belgian cocoa combined with steamed milk, finished with whipped cream.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80&w=600',
    category: 'beverages',
    tags: ['Sweet', 'Indulgent']
  },
  {
    id: 'bev-5',
    name: 'Karak Cardamom Chai',
    description: 'Authentic local black tea leaves slow-brewed with evaporated milk, cardamom, and saffron.',
    price: 150,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600',
    category: 'beverages',
    tags: ['Local Favorite', 'Brewed Fresh']
  },
  {
    id: 'bev-6',
    name: 'Cold-Pressed Fresh Orange Juice',
    description: '100% pure orange juice extracted fresh to order, absolutely no added water or sugars.',
    price: 300,
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=600',
    category: 'beverages',
    tags: ['Pure Fruit', 'Healthy']
  },
  {
    id: 'bev-7',
    name: 'Hand-Spun Milkshake',
    description: 'Decadent vanilla, double chocolate, or seasonal mango blended with organic cream gelato.',
    price: 380,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600',
    category: 'beverages',
    tags: ['Creamy', 'Fruity']
  },
  {
    id: 'bev-8',
    name: 'Chilled Soft Drinks',
    description: 'Served ice-cold with a fresh lemon wedge.',
    price: 100,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600',
    category: 'beverages',
    tags: ['Classic', 'Carbonated']
  }
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'off-1',
    title: 'Family Dinner Feast',
    description: 'Get any Large Pizza, 1 Mexican Beef Steak, 2 Signature Burgers, and 1.5L soft drink.',
    price: 'Rs. 3,499',
    badge: 'SAVE Rs. 650',
    discountCode: 'FAMILYMEAL',
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'off-2',
    title: 'Double Pizza Combo',
    description: 'Buy any 2 Medium Pizzas (Chicken Tikka, Supreme or BBQ) and get 1L soft drink free.',
    price: 'Rs. 1,699',
    badge: 'POPULAR',
    discountCode: 'PIZZADOUBLE',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'off-3',
    title: 'Sweet Celebration Trio',
    description: 'Order any 2 Customized Celebration Cakes, get 1 Buttercream Celebration Cake free.',
    price: 'Buy 2 Get 1 Free',
    badge: 'LIMITED OFFER',
    discountCode: 'CAKEFREE',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'off-4',
    title: 'Weekend Dessert Specials',
    description: 'Get 2 New York Cheesecakes and 2 Chocolate Fudge Cakes for a sweet weekend deal.',
    price: 'Rs. 1,190',
    badge: 'WEEKEND ONLY',
    discountCode: 'WEEKENDSWEETS',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'off-5',
    title: 'Cappuccino & Pastry Combo',
    description: 'A hot Barista Cappuccino paired with a buttery croissant or fresh donut of your choice.',
    price: 'Rs. 399',
    badge: 'MORNING DEAL',
    discountCode: 'COFFEEPASTRY',
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80&w=600'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Fresh Sourdough & Croissants',
    category: 'bakery',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gal-2',
    title: 'Artisan Celebration Cakes',
    category: 'cakes',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gal-3',
    title: 'Chicken Tikka Stone Pizza',
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gal-4',
    title: 'Sizzling Mexican Beef Steak',
    category: 'steaks',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gal-5',
    title: 'Pouring Coffee Latte Art',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gal-6',
    title: 'Decadent NY Cheesecake Slice',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'gal-7',
    title: 'Our Beautiful Bakery Counter',
    category: 'dining',
    image: '/src/assets/images/bakery_display_about_1783352305407.jpg'
  },
  {
    id: 'gal-8',
    title: 'Warm Family Seating Area',
    category: 'dining',
    image: '/src/assets/images/dining_area_gallery_1783352319522.jpg'
  },
  {
    id: 'gal-9',
    title: 'Friends Over Fresh Pastries',
    category: 'dining',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=600'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Muhammad Ali',
    rating: 5,
    text: 'Excellent food, great bakery items, and a wonderful family atmosphere. The Mexican Beef Steak was perfectly cooked, and the staff was extremely friendly!',
    date: 'June 18, 2026'
  },
  {
    id: 'rev-2',
    name: 'Aisha Khan',
    rating: 5,
    text: 'The pizza and desserts are amazing. Highly recommended. Their Chicken Tikka Pizza has the perfect local flavor, and the Chocolate Fudge Cake was sheer perfection.',
    date: 'June 30, 2026'
  },
  {
    id: 'rev-3',
    name: 'Sardar Bilal',
    rating: 5,
    text: 'Great service, fresh food, and excellent coffee. The best cafe in Mardan. It has a beautiful and peaceful environment, great for families.',
    date: 'July 2, 2026'
  },
  {
    id: 'rev-4',
    name: 'Zainab Yusuf',
    rating: 4,
    text: 'The artisan croissants are flaky and delicious, and the cappuccino is perfectly balanced. A fantastic place to study or have business meetings!',
    date: 'July 5, 2026'
  }
];
