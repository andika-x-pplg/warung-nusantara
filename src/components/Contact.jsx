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
      content: 'G4MX+X48, Jl. H. Suwandi, RT.22/RW.08, Gn. Kelua, Kec. Samarinda Ulu, Kota Samarinda, Kalimantan Timur 75123',
    },
    {
      icon: '📞',
      title: 'Telepon',
      content: '082254332944',
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6868722367544!2d117.14783339999998!3d-0.4650926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df678ca451e6617%3A0x7c99dbc6e3d3da21!2sWarung%20Nusantara%20WANUS!5e0!3m2!1sen!2sid!4v1785803377348!5m2!1sen!2sid"
            width="100%"
            height="100%"
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
