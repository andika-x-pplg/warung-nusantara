import React, { useState, useEffect } from 'react';
import styles from '../styles/MenuSection.module.css';
import FoodCard from './FoodCard';

/**
 * MenuSection Component
 * Displays filtered food cards in a responsive grid
 */
function MenuSection({
  foods,
  activeFilter,
  searchQuery,
  onAddToCart,
  isLoading,
}) {
  const [filteredFoods, setFilteredFoods] = useState(foods);

  // Filter foods based on active filter, search query, and category
  useEffect(() => {
    let filtered = foods;

    // Apply search filter
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter((food) =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (activeFilter === 'makanan') {
      filtered = filtered.filter((food) => food.category === 'makanan');

    } else if (activeFilter === 'minuman') {
      filtered = filtered.filter((food) => food.category === 'minuman');

    } else if (activeFilter === 'snack&cemilan') {
      filtered = filtered.filter((food) => food.category === 'snack&cemilan');

    } else if (activeFilter === 'dessert') {
      filtered = filtered.filter((food) => food.category === 'dessert');

    } else if (activeFilter === 'popular') {
      filtered = filtered.filter((food) => food.isPopular);
    }

    setFilteredFoods(filtered);
  }, [foods, activeFilter, searchQuery]);

  return (
    <section id="menu" className={styles.menuSection}>
      {/* Section Header */}
      <div className={styles.menuHeader}>
        <h2 className={styles.menuTitle}>Menu Pilihan</h2>
        <p className={styles.menuSubtitle}>
          Nikmati berbagai pilihan makanan lezat dari Warung Nusantara
        </p>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className={styles.loadingContainer}>
          <div className={styles.spinner} />
        </div>
      )}

      {/* Foods Grid */}
      {!isLoading && (
        <>
          {filteredFoods.length > 0 ? (
            <div className={styles.menuGrid}>
              {filteredFoods.map((food) => (
                <FoodCard
                  key={food.id}
                  food={food}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className={styles.emptyMessage}>
              <p>Tidak ada makanan yang sesuai dengan pencarian Anda.</p>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default MenuSection;
