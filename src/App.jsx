import React, { useState, useEffect, useMemo } from 'react';
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
  const [foodList, setFoodList] = useState(() => {
    const savedFoods = localStorage.getItem("foods");

    if (!savedFoods) {
      return foods;
    }

    const localFoods = JSON.parse(savedFoods);

    // Gabungkan data baru dari foods.js dengan data lama di localStorage
    const mergedFoods = foods.map((food) => {
      const oldFood = localFoods.find((item) => item.id === food.id);

      if (oldFood) {
        return {
          ...food,
          stock:
            oldFood.stock !== undefined
              ? oldFood.stock
              : food.stock,

          maxStock:
            oldFood.maxStock !== undefined
              ? oldFood.maxStock
              : food.maxStock,

          sold:
            oldFood.sold !== undefined
              ? oldFood.sold
              : food.sold,
        };
      }

      return food;
    });

    console.log(
      mergedFoods.find(food => food.id === 44)
    );

    return mergedFoods;
  });

  const [nextRestock, setNextRestock] = useState(() => {
    const saved = localStorage.getItem("nextRestock");

    if (saved) {
      return Number(saved);
    }

    const tomorrow = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem("nextRestock", tomorrow);

    return tomorrow;
  });

  useEffect(() => {
    localStorage.setItem("foods", JSON.stringify(foodList));
  }, [foodList]);

  useEffect(() => {
    const interval = setInterval(() => {

      const now = Date.now();
      const diff = nextRestock - now;

      if (diff <= 0) {

        const updatedFoods = foodList.map(food => {

          const randomStock =
            Math.floor(Math.random() * 151) + 50;

          return {
            ...food,
            stock: randomStock,
            maxStock: randomStock,
          };

        });

        setFoodList(updatedFoods);

        const newTime =
          Date.now() + 24 * 60 * 60 * 1000;

        setNextRestock(newTime);

        localStorage.setItem(
          "nextRestock",
          newTime
        );

        return;
      }

      setCountdown({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });

    }, 1000);

    return () => clearInterval(interval);

  }, [nextRestock, foodList]);

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
    const latestFood = foodList.find((item) => item.id === food.id);

    if (!latestFood) return;

    if (latestFood.stock <= 0) {
      alert(`${latestFood.name} sudah habis.`);
      return;
    }

    const existingItem = cartItems.find(
      (item) => item.id === food.id
    );

    if (existingItem) {
      if (existingItem.quantity >= latestFood.stock) {
        alert(
          `Stok ${latestFood.name} hanya tersisa ${latestFood.stock}`
        );
        return;
      }

      setCartItems(
        cartItems.map((item) =>
          item.id === food.id
            ? {
              ...item,
              quantity: item.quantity + 1,
            }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...latestFood,
          quantity: 1,
        },
      ]);
    }

    showNotification(`${latestFood.name} ditambahkan ke keranjang!`);
  };

  // Handle updating item quantity
  const handleUpdateQuantity = (foodId, newQuantity) => {
    const food = foodList.find(
      (item) => item.id === foodId
    );

    if (!food) return;

    if (newQuantity <= 0) {
      handleRemoveItem(foodId);
      return;
    }

    if (newQuantity > food.stock) {
      alert(
        `Stok ${food.name} hanya tersisa ${food.stock}`
      );
      return;
    }

    setCartItems(
      cartItems.map((item) =>
        item.id === foodId
          ? {
            ...item,
            quantity: newQuantity,
          }
          : item
      )
    );
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

    const updatedFoods = foodList.map(food => {

      const orderedItem = cartItems.find(
        item => item.id === food.id
      );

      if (orderedItem) {
        return {
          ...food,
          stock: Math.max(food.stock - orderedItem.quantity, 0)
        };
      }

      return food;
    });

    setFoodList(updatedFoods);

    setCartItems([]);

    setIsCartOpen(false);

  };

  // Simple notification system (could be enhanced with toast library)
  const showNotification = (message) => {
    console.log('✓', message);
  };

  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
      <Hero
        onMenuClick={handleMenuClick}
        countdown={countdown}
        totalFoods={foodList.length}
        availableFoods={foodList.filter(food => food.stock > 0).length}
        outOfStockFoods={foodList.filter(food => food.stock === 0).length}
      />
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
        foods={foodList}
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
