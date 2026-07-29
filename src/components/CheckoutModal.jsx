import React from "react";
import styles from "../styles/CheckoutModal.module.css";
import { formatCurrency } from "../data/foods";

function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  totalPrice,
}) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>

        <div className={styles.header}>
          <h2>Checkout Pesanan</h2>

          <button
            className={styles.closeBtn}
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className={styles.body}>

          <label>Nama Lengkap</label>
          <input
            type="text"
            placeholder="Masukkan nama lengkap"
          />

          <label>Nomor HP</label>
          <input
            type="text"
            placeholder="08xxxxxxxxxx"
          />

          <label>Alamat</label>
          <textarea
            rows="3"
            placeholder="Masukkan alamat lengkap"
          />

          <label>Catatan</label>
          <textarea
            rows="2"
            placeholder="Contoh: Sambalnya dipisah"
          />

          <label>Metode Pembayaran</label>

          <select>
            <option>Cash</option>
            <option>QRIS</option>
            <option>DANA</option>
            <option>OVO</option>
            <option>GoPay</option>
          </select>

          <hr />

          <h3>Ringkasan Pesanan</h3>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className={styles.item}
            >
              <span>
                {item.name} x {item.quantity}
              </span>

              <span>
                {formatCurrency(
                  item.price * item.quantity
                )}
              </span>
            </div>
          ))}

          <div className={styles.total}>
            <strong>Total</strong>

            <strong>
              {formatCurrency(totalPrice)}
            </strong>
          </div>

          <button className={styles.orderBtn}>
            Pesan Sekarang
          </button>

        </div>

      </div>
    </div>
  );
}

export default CheckoutModal;