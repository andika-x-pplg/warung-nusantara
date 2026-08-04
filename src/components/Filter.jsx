import React from 'react';
import styles from '../styles/Filter.module.css';

/**
 * Filter Component
 * Category filter buttons for menu items
 */
function Filter({ activeFilter, onFilterChange }) {
  const filters = [
    { id: 'all', label: 'Semua' },
    { id: 'makanan', label: 'Makanan' },
    { id: 'minuman', label: 'Minuman' },
    { id: 'popular', label: 'Popular' },
    { id: 'snack&cemilan', label: 'Snack & Cemilan'},
    { id: 'dessert', label: 'Dessert'},
  ];

  return (
    <div className={styles.filterSection}>
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`${styles.filterBtn} ${
            activeFilter === filter.id ? styles.active : ''
          }`}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
