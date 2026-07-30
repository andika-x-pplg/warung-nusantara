import React from 'react';
import styles from '../styles/FoodCard.module.css';
import { formatCurrency } from '../data/foods';

/**
 * FoodCard Component
 * Individual food card displaying food details and add to cart button
 */
function FoodCard({ food, onAddToCart }) {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className={styles.star}>
            ⭐
          </span>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className={styles.star}>
            ⭐
          </span>
        );
      } else {
        stars.push(
          <span key={i} className={styles.star} style={{ opacity: 0.3 }}>
            ⭐
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className={styles.cardWrapper}>
      {food.isPopular && (
        <div className={styles.popularBadge}>🔥 Popular</div>
      )}
      <div className={styles.card}>
        {/* Food Image */}
        <div className={styles.cardImage}>
          <img src={food.image} alt={food.name} />
        </div>

        {/* Card Body */}
        <div className={styles.cardBody}>
          {/* Header with Name and Category */}
          <div className={styles.cardHeader}>
            <h3 className={styles.cardName}>{food.name}</h3>
            <span className={`${styles.categoryBadge} ${styles[food.category]}`}>
              {food.category}
            </span>
          </div>

          {/* Description */}
          <p className={styles.cardDescription}>{food.description}</p>

          <p className={styles.stock}>
            Stok: {food.stock}
          </p>

          {/* Footer with Price, Rating, and Button */}
          <div className={styles.cardFooter}>
            <div className={styles.priceAndRating}>
              <div className={styles.price}>{formatCurrency(food.price)}</div>
              <div className={styles.rating}>
                {renderStars(food.rating)}
                <span style={{ marginLeft: '0.5rem' }}>{food.rating}</span>
              </div>
            </div>
            <button
              className={styles.addToCartBtn}
              onClick={() => onAddToCart(food)}
            >
              + Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
