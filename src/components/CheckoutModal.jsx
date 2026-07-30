import React, { useState, useEffect } from 'react';
import styles from '../styles/CheckoutModal.module.css';
import { formatCurrency } from '../data/foods';

const PAYMENT_METHODS = ['Cash', 'QRIS', 'DANA', 'OVO', 'GoPay'];
const STORAGE_KEY = 'latestOrder';

/** Generate order number: WN-YYYYMMDD-XXXX */
function generateOrderNumber() {
  const now = new Date();
  const datePart = now.toISOString().slice(0, 10).replace(/-/g, '');
  const randomPart = Math.floor(1000 + Math.random() * 9000);
  return `WN-${datePart}-${randomPart}`;
}

/** Format date for display */
function formatOrderDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * CheckoutModal Component
 * Handles checkout form, validation, order processing simulation,
 * success confirmation, and order detail view.
 */
function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  totalPrice,
  totalItems,
  onOrderSuccess,
}) {
  const [view, setView] = useState('checkout'); // checkout | success | orderDetail
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    notes: '',
    paymentMethod: '',
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderData, setOrderData] = useState(null);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setView('checkout');
      setFormData({
        fullName: '',
        phone: '',
        address: '',
        notes: '',
        paymentMethod: '',
      });
      setErrors({});
      setIsProcessing(false);
      setOrderData(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validasi Nama
    if (name === "fullName") {
      if (!/^[A-Za-z\s]*$/.test(value)) {
        return;
      }
    }

    // Validasi Nomor HP
    if (name === "phone") {
      if (!/^\d*$/.test(value)) {
        return;
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Nama wajib diisi';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Nomor HP wajib diisi';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Alamat wajib diisi';
    }
    if (!formData.paymentMethod) {
      newErrors.paymentMethod = 'Pilih metode pembayaran';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      const order = {
        orderNumber: generateOrderNumber(),
        customer: {
          fullName: formData.fullName.trim(),
          phone: formData.phone.trim(),
          address: formData.address.trim(),
          notes: formData.notes.trim(),
        },
        paymentMethod: formData.paymentMethod,
        items: cartItems.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          subtotal: item.price * item.quantity,
        })),
        totalItems,
        totalPrice,
        date: new Date().toISOString(),
      };

      // Save to localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(order));

      setOrderData(order);
      setIsProcessing(false);
      setView('success');

      // Clear cart and close cart sidebar
      onOrderSuccess();
    }, 2000);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && !isProcessing) {
      onClose();
    }
  };

  const handleClose = () => {
    if (!isProcessing) {
      onClose();
    }
  };

  const handleViewOrder = () => {
    setView('orderDetail');
  };

  // --- Checkout Form View ---
  const renderCheckoutForm = () => (
    <>
      <div className={styles.header}>
        <h2>Checkout Pesanan</h2>
        <button
          className={styles.closeBtn}
          onClick={handleClose}
          aria-label="Tutup"
          disabled={isProcessing}
        >
          ✕
        </button>
      </div>

      <div className={styles.body}>
        {/* Customer Info */}
        <div className={styles.formGroup}>
          <label htmlFor="fullName">
            Full Name <span className={styles.required}>*</span>
          </label>
          <input
            id="fullName"
            type="text"
            maxLength={30}
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Masukkan nama lengkap"
            className={errors.fullName ? styles.inputError : ''}
          />
          {errors.fullName && (
            <span className={styles.errorText}>{errors.fullName}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">
            Phone Number <span className={styles.required}>*</span>
          </label>
          <input
            id="phone"
            type="tel"
            maxLength={12}
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="08xxxxxxxxxx"
            className={errors.phone ? styles.inputError : ''}
          />
          {errors.phone && (
            <span className={styles.errorText}>{errors.phone}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address">
            Full Address <span className={styles.required}>*</span>
          </label>
          <textarea
            id="address"
            name="address"
            rows="3"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Masukkan alamat lengkap"
            className={errors.address ? styles.inputError : ''}
          />
          {errors.address && (
            <span className={styles.errorText}>{errors.address}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="notes">Notes (optional)</label>
          <textarea
            id="notes"
            name="notes"
            rows="2"
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="Contoh: Sambalnya dipisah"
          />
        </div>

        {/* Payment Method */}
        <div className={styles.formGroup}>
          <label>
            Payment Method <span className={styles.required}>*</span>
          </label>
          <div className={styles.paymentOptions}>
            {PAYMENT_METHODS.map((method) => (
              <label key={method} className={styles.paymentOption}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method}
                  checked={formData.paymentMethod === method}
                  onChange={handleInputChange}
                />
                <span className={styles.radioCustom} />
                <span>{method}</span>
              </label>
            ))}
          </div>
          {errors.paymentMethod && (
            <span className={styles.errorText}>{errors.paymentMethod}</span>
          )}
        </div>

        {/* Order Summary */}
        <div className={styles.summary}>
          <h3>Order Summary</h3>
          <div className={styles.summaryItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.summaryItem}>
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span>{formatCurrency(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className={styles.divider} />
          <div className={styles.summaryTotal}>
            <div className={styles.summaryRow}>
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Total Price</span>
              <strong>{formatCurrency(totalPrice)}</strong>
            </div>
          </div>
        </div>

        <button
          className={`${styles.orderBtn} ${isProcessing ? styles.processing : ''}`}
          onClick={handleSubmit}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <>
              <span className={styles.spinner} />
              Memproses Pesanan...
            </>
          ) : (
            'Pesan Sekarang'
          )}
        </button>
      </div>
    </>
  );

  // --- Success View ---
  const renderSuccess = () => (
    <>
      <div className={styles.successContent}>
        <div className={styles.successIcon}>🎉</div>
        <h2 className={styles.successTitle}>Pesanan Berhasil!</h2>
        <p className={styles.orderNumber}>{orderData?.orderNumber}</p>

        <div className={styles.successDetails}>
          <div className={styles.detailRow}>
            <span>Nama</span>
            <span>{orderData?.customer.fullName}</span>
          </div>
          <div className={styles.detailRow}>
            <span>Telepon</span>
            <span>{orderData?.customer.phone}</span>
          </div>
          <div className={styles.detailRow}>
            <span>Alamat</span>
            <span>{orderData?.customer.address}</span>
          </div>
          <div className={styles.detailRow}>
            <span>Pembayaran</span>
            <span>{orderData?.paymentMethod}</span>
          </div>
          <div className={styles.detailRow}>
            <span>Tanggal</span>
            <span>{formatOrderDate(orderData?.date)}</span>
          </div>
          <div className={styles.detailRow}>
            <span>Total Items</span>
            <span>{orderData?.totalItems}</span>
          </div>
          <div className={styles.detailRow}>
            <span>Total Harga</span>
            <strong>{formatCurrency(orderData?.totalPrice)}</strong>
          </div>
        </div>

        <div className={styles.successActions}>
          <button className={styles.primaryBtn} onClick={handleViewOrder}>
            Lihat Pesanan
          </button>
          <button className={styles.secondaryBtn} onClick={handleClose}>
            Tutup
          </button>
        </div>
      </div>
    </>
  );

  // --- Order Detail View ---
  const renderOrderDetail = () => (
    <>
      <div className={styles.header}>
        <h2>Detail Pesanan</h2>
        <button
          className={styles.closeBtn}
          onClick={handleClose}
          aria-label="Tutup"
        >
          ✕
        </button>
      </div>

      <div className={styles.body}>
        <div className={styles.orderDetailHeader}>
          <p className={styles.orderNumber}>{orderData?.orderNumber}</p>
          <p className={styles.orderDate}>{formatOrderDate(orderData?.date)}</p>
        </div>

        <div className={styles.detailSection}>
          <h4>Informasi Pelanggan</h4>
          <div className={styles.detailRow}>
            <span>Nama</span>
            <span>{orderData?.customer.fullName}</span>
          </div>
          <div className={styles.detailRow}>
            <span>Telepon</span>
            <span>{orderData?.customer.phone}</span>
          </div>
          <div className={styles.detailRow}>
            <span>Alamat</span>
            <span>{orderData?.customer.address}</span>
          </div>
          {orderData?.customer.notes && (
            <div className={styles.detailRow}>
              <span>Catatan</span>
              <span>{orderData.customer.notes}</span>
            </div>
          )}
          <div className={styles.detailRow}>
            <span>Pembayaran</span>
            <span>{orderData?.paymentMethod}</span>
          </div>
        </div>

        <div className={styles.detailSection}>
          <h4>Item Pesanan</h4>
          {orderData?.items.map((item) => (
            <div key={item.id} className={styles.detailItem}>
              <div className={styles.detailItemInfo}>
                <span className={styles.detailItemName}>{item.name}</span>
                <span className={styles.detailItemQty}>x{item.quantity}</span>
              </div>
              <span>{formatCurrency(item.subtotal)}</span>
            </div>
          ))}
        </div>

        <div className={styles.divider} />

        <div className={styles.summaryTotal}>
          <div className={styles.summaryRow}>
            <span>Grand Total</span>
            <strong>{formatCurrency(orderData?.totalPrice)}</strong>
          </div>
        </div>

        <button className={styles.secondaryBtn} onClick={handleClose}>
          Tutup
        </button>
      </div>
    </>
  );

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div
        className={`${styles.modal} ${styles.fadeIn} ${view === 'success' ? styles.successModal : ''
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        {view === 'checkout' && renderCheckoutForm()}
        {view === 'success' && renderSuccess()}
        {view === 'orderDetail' && renderOrderDetail()}
      </div>
    </div>
  );
}

export default CheckoutModal;
