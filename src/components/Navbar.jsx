import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';

/**
 * Navbar Component
 * Sticky navigation bar with logo, links, cart icon, and dark mode toggle
 */
function Navbar({ cartCount, onCartClick, isDarkMode, onDarkModeToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Logo */}
        <a href="#home" className={styles.logo} onClick={handleNavClick}>
          🍜 Warung Nusantara
        </a>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuBtn}
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <li>
            <a href="#home" onClick={handleNavClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#menu" onClick={handleNavClick}>
              Menu
            </a>
          </li>
          <li>
            <a href="#tentang" onClick={handleNavClick}>
              Tentang
            </a>
          </li>
          <li>
            <a href="#kontak" onClick={handleNavClick}>
              Kontak
            </a>
          </li>
        </ul>

        {/* Right Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Dark Mode Toggle */}
          <button
            className={styles.darkModeToggle}
            onClick={onDarkModeToggle}
            aria-label="Toggle dark mode"
            title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {/* Cart Icon */}
          <div
            className={styles.cartIcon}
            onClick={onCartClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && onCartClick()}
            title="Shopping Cart"
          >
            🛒
            {cartCount > 0 && (
              <span className={styles.cartCount}>{cartCount}</span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
