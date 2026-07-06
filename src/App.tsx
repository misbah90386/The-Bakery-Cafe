/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import BestSellers from './components/BestSellers';
import WhyChooseUs from './components/WhyChooseUs';
import SpecialOffers from './components/SpecialOffers';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import ReservationContact from './components/ReservationContact';
import Cart from './components/Cart';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import { MenuItem, CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('tb_cafe_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (err) {
        console.error('Error loading cart', err);
      }
    }
  }, []);

  // Save cart to localStorage on change
  const saveCart = (items: CartItem[]) => {
    setCartItems(items);
    localStorage.setItem('tb_cafe_cart', JSON.stringify(items));
  };

  // Scroll active section observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'menu', 'best-sellers', 'special-offers', 'gallery', 'contact', 'reviews'];
      const scrollPosition = window.scrollY + 120; // top offset for header

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = (item: MenuItem, notes?: string) => {
    const existingIndex = cartItems.findIndex(
      (ci) => ci.menuItem.id === item.id && ci.notes === notes
    );

    let updatedCart: CartItem[];
    if (existingIndex > -1) {
      updatedCart = [...cartItems];
      updatedCart[existingIndex].quantity += 1;
    } else {
      updatedCart = [...cartItems, { menuItem: item, quantity: 1, notes }];
    }
    
    saveCart(updatedCart);
    setIsCartOpen(true); // Automatically slide open cart for interactive feedback
  };

  const handleUpdateQuantity = (itemId: string, qty: number) => {
    let updatedCart: CartItem[];
    if (qty <= 0) {
      updatedCart = cartItems.filter((ci) => ci.menuItem.id !== itemId);
    } else {
      updatedCart = cartItems.map((ci) =>
        ci.menuItem.id === itemId ? { ...ci, quantity: qty } : ci
      );
    }
    saveCart(updatedCart);
  };

  const handleRemoveItem = (itemId: string) => {
    const updatedCart = cartItems.filter((ci) => ci.menuItem.id !== itemId);
    saveCart(updatedCart);
  };

  const handleClearCart = () => {
    saveCart([]);
  };

  const handleReserveTableClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleExploreMenuClick = () => {
    const element = document.querySelector('#menu');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="bg-cream min-h-screen text-dark-brown antialiased selection:bg-gold selection:text-dark-brown selection:bg-opacity-50 font-sans">
      {/* Dynamic Header */}
      <Header
        cartCount={totalCartCount}
        onCartToggle={() => setIsCartOpen(!isCartOpen)}
        activeSection={activeSection}
      />

      {/* Main Sections Wrapper */}
      <main>
        {/* Hero Section */}
        <Hero
          onReserveClick={handleReserveTableClick}
          onMenuClick={handleExploreMenuClick}
        />

        {/* About Section */}
        <About />

        {/* Best Sellers Section */}
        <BestSellers onAddToCart={(item) => handleAddToCart(item)} />

        {/* Menu Grid Section */}
        <Menu onAddToCart={handleAddToCart} />

        {/* Special Brand Features Section */}
        <WhyChooseUs />

        {/* Special Offers Section */}
        <SpecialOffers />

        {/* Gallery Grid & Lightbox Section */}
        <Gallery />

        {/* Testimonials Review Slider */}
        <Reviews />

        {/* Table Reservation & General Contact Form */}
        <ReservationContact />
      </main>

      {/* Footer Block */}
      <Footer />

      {/* Interactive Cart Drawer */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Scroll-To-Top Button */}
      <ScrollToTop />
    </div>
  );
}

