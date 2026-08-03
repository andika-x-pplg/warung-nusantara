import React from 'react';
import styles from '../styles/Hero.module.css';

/**
 * Hero Component
 * Large banner section with title, subtitle, CTA button, dan informasi restock
 */
function Hero({
  onMenuClick,
  countdown = "24:00:00",
  totalFoods = 0,
  availableFoods = 0,
  outOfStockFoods = 0,
}) {
  return (
    <section id="home" className={styles.hero}>
      {/* Decorative Elements */}
      <div className={`${styles.heroDecor} ${styles.decorTop}`} />
      <div className={`${styles.heroDecor} ${styles.decorBottom}`} />

      <div className={styles.heroContent}>
        {/* Left Text */}
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Selamat Datang di Warung Nusantara
          </h1>

          <p className={styles.heroSubtitle}>
            Makanan rumahan dengan cita rasa Indonesia yang autentik.
            Dibuat dengan cinta dan bahan-bahan pilihan terbaik
            untuk memanjakan lidah Anda.
          </p>

          {/* Info Restock */}
          <div className={styles.restockCard}>
            <h3>🕒 Restock Berikutnya</h3>

            <div className={styles.countdown}>
              {String(countdown.hours).padStart(2, "0")}:
              {String(countdown.minutes).padStart(2, "0")}:
              {String(countdown.seconds).padStart(2, "0")}
            </div>

            <div className={styles.infoGrid}>

              <div className={styles.infoBox}>
                <span>🍽</span>
                <strong>{totalFoods}</strong>
                <small>Total Menu</small>
              </div>

              <div className={styles.infoBox}>
                <span>✅</span>
                <strong>{availableFoods}</strong>
                <small>Tersedia</small>
              </div>

              <div className={styles.infoBox}>
                <span>❌</span>
                <strong>{outOfStockFoods}</strong>
                <small>Habis</small>
              </div>

            </div>
          </div>

          <button
            className={styles.heroButton}
            onClick={onMenuClick}
          >
            Lihat Menu
          </button>
        </div>

        {/* Right Image */}
        <div className={styles.heroImage}>
          <img
            src="https://media.istockphoto.com/id/954305260/id/foto/salah-satu-makanan-cepat-saji-jalanan-asia-thai-yang-paling-favorit-dan-terkenal-di-hot-pan-pad.webp?a=1&b=1&s=612x612&w=0&k=20&c=Do9QKvfcNr_mHPPWYXrUqZPTfDxu1TByxApsyCm-3P8="
            alt="Makanan Nusantara"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;