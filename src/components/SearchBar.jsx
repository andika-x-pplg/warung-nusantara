import React from 'react';
import styles from '../styles/SearchBar.module.css';

/**
 * SearchBar Component
 * Search input to filter foods by name
 */
function SearchBar({ searchQuery, onSearchChange }) {
  const handleClear = () => {
    onSearchChange('');
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchContainer}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Cari makanan..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchQuery && (
          <button
            className={`${styles.clearButton} ${styles.show}`}
            onClick={handleClear}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
