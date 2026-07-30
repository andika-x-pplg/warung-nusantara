import React, { useState, useEffect } from 'react';
import './styles/index.css';
import { foods } from './data/foods';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import MenuSection from './components/MenuSection';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import CheckoutModal from './components/CheckoutModal';
import Footer from './components/Footer';

/**
 * Main App Component
 * Root component that manages all state and renders all sections
 */
function App() {
  // State Management
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Apply dark mode class to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // Handle adding items to cart
  const handleAddToCart = (food) => {
    const existingItem = cartItems.find((item) => item.id === food.id);

    if (existingItem) {
      // If item exists, increase quantity
      setCartItems(
        cartItems.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If item doesn't exist, add it with quantity 1
      setCartItems([
        ...cartItems,
        {
          ...food,
          quantity: 1,
        },
      ]);
    }

    // Show notification (optional)
    showNotification(`${food.name} ditambahkan ke keranjang!`);
  };

  // Handle updating item quantity
  const handleUpdateQuantity = (foodId, newQuantity) => {
    if (newQuantity === 0) {
      handleRemoveItem(foodId);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === foodId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Handle removing item from cart
  const handleRemoveItem = (foodId) => {
    setCartItems(cartItems.filter((item) => item.id !== foodId));
  };

  // Handle cart icon click
  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Handle menu button click from hero
  const handleMenuClick = () => {
    const menuSection = document.getElementById('menu');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Calculate total cart items and price
  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Open checkout modal from cart
  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  // After successful order: clear cart, close cart sidebar
  const handleOrderSuccess = () => {
    setCartItems([]);
    setIsCartOpen(false);
  };

  // Simple notification system (could be enhanced with toast library)
  const showNotification = (message) => {
    console.log('✓', message);
  };

  return (
    <div className="app">
      {/* Navbar */}
      <Navbar
        cartCount={totalCartItems}
        onCartClick={handleCartClick}
        isDarkMode={isDarkMode}
        onDarkModeToggle={() => setIsDarkMode(!isDarkMode)}
      />

      {/* Hero Section */}
      <Hero onMenuClick={handleMenuClick} />

      {/* Search Bar */}
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Filter Section */}
      <Filter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {/* Menu Section */}
      <MenuSection
        foods={foods}
        activeFilter={activeFilter}
        searchQuery={searchQuery}
        onAddToCart={handleAddToCart}
        isLoading={isLoading}
      />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Cart Sidebar */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        totalPrice={totalCartPrice}
        totalItems={totalCartItems}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
