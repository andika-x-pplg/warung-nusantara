import React from 'react';
import styles from '../styles/Cart.module.css';
import { formatCurrency } from '../data/foods';

/**
 * Cart Component
 * Sliding cart sidebar displaying cart items, quantities, and total
 */
function Cart({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) {
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
                  <input
                    type="number"
                    min="1"
                    max="99"
                    className={styles.quantityInput}
                    value={item.quantity}
                    onChange={(e) => {
                      let value = Number(e.target.value);

                      if (value > 99) value = 99;

                      if (value >= 1) {
                        onUpdateQuantity(item.id, value);
                      }
                    }}
                    onBlur={(e) => {
                      if (e.target.value === "" || Number(e.target.value) < 1) {
                        onUpdateQuantity(item.id, 1);
                      }
                    }}
                  />
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
            <button className={styles.checkoutBtn} onClick={onCheckout}>
              Checkout ({totalItems} items)
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
