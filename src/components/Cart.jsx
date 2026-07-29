import React from 'react';
import styles from '../styles/Cart.module.css';
import { formatCurrency } from '../data/foods';

/**
 * Cart Component
 * Sliding cart sidebar displaying cart items, quantities, and total
 */
function Cart({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  // Calculate total items
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.show : ''}`}
        onClick={onClose}
      />

      {/* Cart Container */}
      <div className={`${styles.cartContainer} ${isOpen ? styles.open : ''}`}>
        {/* Header */}
        <div className={styles.cartHeader}>
          <h2 className={styles.cartTitle}>Keranjang Belanja</h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className={styles.cartBody}>
          {cartItems.length === 0 ? (
            <div className={styles.emptyCart}>
              <div className={styles.emptyCartIcon}>🛒</div>
              <p className={styles.emptyCartText}>Keranjang Anda kosong</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemInfo}>
                  <div className={styles.itemName}>{item.name}</div>
                  <div className={styles.itemPrice}>
                    {formatCurrency(item.price)}
                  </div>
                  <div className={styles.itemSubtotal}>
                    Subtotal: {formatCurrency(item.price * item.quantity)}
                  </div>
                </div>

                <div className={styles.itemControls}>
                  <button
                    className={styles.quantityBtn}
                    onClick={() =>
                      onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <div className={styles.quantity}>{item.quantity}</div>
                  <button
                    className={styles.quantityBtn}
                    onClick={() =>
                      onUpdateQuantity(item.id, item.quantity + 1)
                    }
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                  <button
                    className={styles.removeBtn}
                    onClick={() => onRemoveItem(item.id)}
                    aria-label="Remove item"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className={styles.cartFooter}>
            <div className={styles.totalWrapper}>
              <span className={styles.totalLabel}>Total:</span>
              <span className={styles.totalAmount}>
                {formatCurrency(totalPrice)}
              </span>
            </div>
            <button className={styles.checkoutBtn} disabled>
              Checkout ({totalItems} items)
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.85rem', marginTop: '0.75rem', color: '#7f8c8d' }}>
              * Checkout sedang dalam pengembangan
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
