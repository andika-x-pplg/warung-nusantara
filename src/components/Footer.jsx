import React, { useState, useEffect } from 'react';
import styles from '../styles/Footer.module.css';

/**
 * Footer Component
 * Footer with links, social media, and back to top button
 */
function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialIcons = [
    { icon: '📘', label: 'Facebook' },
    { icon: '🐦', label: 'Twitter' },
    { icon: '📷', label: 'Instagram' },
    { icon: '▶️', label: 'YouTube' },
  ];

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          {/* About Section */}
          <div className={styles.footerSection}>
            <h3>Warung Nusantara</h3>
            <p>
              Warung Nusantara menyediakan makanan khas Indonesia dengan
              bahan-bahan segar dan harga terjangkau. Kami siap memanjakan lidah
              Anda dengan cita rasa autentik!
            </p>
            <div className={styles.socialLinks}>
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={styles.socialIcon}
                  title={social.label}
                  onClick={(e) => e.preventDefault()}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h3>Menu Cepat</h3>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#home">Beranda</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#tentang">Tentang Kami</a>
              </li>
              <li>
                <a href="#kontak">Kontak</a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className={styles.footerSection}>
            <h3>Kebijakan</h3>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#">Kebijakan Privasi</a>
              </li>
              <li>
                <a href="#">Syarat & Ketentuan</a>
              </li>
              <li>
                <a href="#">Kebijakan Pengembalian</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className={styles.footerSection}>
            <h3>Jam Operasional</h3>
            <p>Senin - Jumat: 10:00 - 22:00</p>
            <p>Sabtu - Minggu: 09:00 - 23:00</p>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
              ⏰ Kami buka setiap hari untuk melayani Anda!
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.footerDivider} />

        {/* Bottom Section */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            &copy; 2024 Warung Nusantara. Semua hak cipta dilindungi.
          </div>
          <button
            className={`${styles.backToTopBtn} ${
              showBackToTop ? styles.show : ''
            }`}
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            ⬆️ Top
          </button>
        </div>
      </footer>
    </>
  );
}

export default Footer;
