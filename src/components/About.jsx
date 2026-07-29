import React, { useState, useEffect } from 'react';
import styles from '../styles/About.module.css';

/**
 * About Component
 * Information about the restaurant with animated stats
 */
function About() {
  const [stats, setStats] = useState({
    customers: 0,
    menu: 0,
    years: 0,
  });

  // Animate counters on component mount
  useEffect(() => {
    const animateCounter = (target, key, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 50);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setStats((prev) => ({
          ...prev,
          [key]: Math.floor(current),
        }));
      }, 50);
    };

    animateCounter(1000, 'customers');
    animateCounter(50, 'menu');
    animateCounter(10, 'years');
  }, []);

  return (
    <section id="tentang" className={styles.aboutSection}>
      {/* Header */}
      <div className={styles.aboutHeader}>
        <h2 className={styles.aboutTitle}>Tentang Kami</h2>
      </div>

      {/* Content */}
      <div className={styles.aboutContent}>
        {/* Text Content */}
        <div className={styles.aboutText}>
          <p>
            Warung Nusantara adalah warung makan tradisional yang menghadirkan
            cita rasa autentik Indonesia. Kami berkomitmen untuk memberikan
            pengalaman kuliner terbaik dengan menggunakan bahan-bahan segar dan
            berkualitas tinggi.
          </p>
          <p>
            Setiap hidangan kami dibuat dengan penuh cinta dan perhatian terhadap
            detail. Tim chef berpengalaman kami menghadirkan resep-resep turun
            temurun yang telah dipercaya oleh ribuan pelanggan setia.
          </p>
          <p>
            Kami percaya bahwa makanan yang baik dapat menyatukan orang-orang, dan
            itulah mengapa kami memilih untuk melayani dengan sepenuh hati.
          </p>

          {/* Stats Grid */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>
                {stats.customers.toLocaleString()}+
              </div>
              <div className={styles.statLabel}>Pelanggan Puas</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{stats.menu}+</div>
              <div className={styles.statLabel}>Menu Pilihan</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{stats.years}</div>
              <div className={styles.statLabel}>Tahun Berpengalaman</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className={styles.aboutImage}>
          <img
            src="https://toploker.com/assets/images/perusahaan/profile/warung-nasi-nusantara.png"
            alt="Warung Nusantara"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
