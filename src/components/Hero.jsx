import React from 'react';
import styles from '../styles/Hero.module.css';

/**
 * Hero Component
 * Large banner section with title, subtitle, and CTA button
 */
function Hero({ onMenuClick }) {
  return (
    <section id="home" className={styles.hero}>
      {/* Decorative Elements */}
      <div className={`${styles.heroDecor} ${styles.decorTop}`} />
      <div className={`${styles.heroDecor} ${styles.decorBottom}`} />

      <div className={styles.heroContent}>
        {/* Left Text Content */}
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Selamat Datang di Warung Nusantara
          </h1>
          <p className={styles.heroSubtitle}>
            Makanan rumahan dengan cita rasa Indonesia yang autentik. Dibuat
            dengan cinta dan bahan-bahan pilihan terbaik untuk memanjakan lidah
            Anda.
          </p>
          <button className={styles.heroButton} onClick={onMenuClick}>
            Lihat Menu
          </button>
        </div>

        {/* Right Image Content */}
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
