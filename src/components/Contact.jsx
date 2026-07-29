import React from 'react';
import styles from '../styles/Contact.module.css';

/**
 * Contact Component
 * Contact information and location map placeholder
 */
function Contact() {
  const contactInfo = [
    {
      icon: '📍',
      title: 'Alamat',
      content: 'Jl. Sudirman No. 123, Jakarta Pusat, Indonesia',
    },
    {
      icon: '📞',
      title: 'Telepon',
      content: '+62 812-3456-7890',
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'info@warungnusantara.com',
    },
  ];

  return (
    <section id="kontak" className={styles.contactSection}>
      {/* Header */}
      <div className={styles.contactHeader}>
        <h2 className={styles.contactTitle}>Hubungi Kami</h2>
      </div>

      {/* Content */}
      <div className={styles.contactContent}>
        {/* Info Cards */}
        <div className={styles.infoCards}>
          {contactInfo.map((info, index) => (
            <div key={index} className={styles.infoCard}>
              <div className={styles.infoIcon}>{info.icon}</div>
              <div className={styles.infoDetails}>
                <h3>{info.title}</h3>
                <p>{info.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Map Container */}
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps?q=Monumen+Nasional+Jakarta&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "15px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Warung Nusantara"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
