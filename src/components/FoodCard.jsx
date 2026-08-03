import React from "react";
import styles from "../styles/FoodCard.module.css";
import { formatCurrency } from "../data/foods";

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

  const percentage = (food.stock / food.maxStock) * 100;

  return (
    <div className={styles.cardWrapper}>
      {food.isPopular && (
        <div className={styles.popularBadge}>🔥 Popular</div>
      )}

      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src={food.image} alt={food.name} />
        </div>

        <div className={styles.cardBody}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardName}>{food.name}</h3>

            <span
              className={`${styles.categoryBadge} ${styles[food.category]}`}
            >
              {food.category}
            </span>
          </div>

          <p className={styles.cardDescription}>
            {food.description}
          </p>

          {/* STOCK */}
          <div className={styles.stockInfo}>
            <div className={styles.stockHeader}>
              <span>Sisa Stok</span>
              <strong>
                {food.stock} / {food.maxStock}
              </strong>
            </div>

            <div className={styles.stockBar}>
              <div
                className={styles.stockFill}
                style={{
                  width: `${percentage}%`,
                  backgroundColor:
                    percentage > 50
                      ? "#2ecc71"
                      : percentage > 20
                      ? "#f39c12"
                      : "#e74c3c",
                }}
              />
            </div>

            {food.stock === 0 ? (
              <p className={styles.outStock}>
                ❌ Stok Habis
              </p>
            ) : food.stock <= 5 ? (
              <p className={styles.lowStock}>
                ⚠️ Stok Tinggal {food.stock}
              </p>
            ) : (
              <p className={styles.goodStock}>
                ✅ Stok Aman
              </p>
            )}
          </div>

          <div className={styles.cardFooter}>
            <div className={styles.priceAndRating}>
              <div className={styles.price}>
                {formatCurrency(food.price)}
              </div>

              <div className={styles.rating}>
                {renderStars(food.rating)}
                <span style={{ marginLeft: "8px" }}>
                  {food.rating}
                </span>
              </div>
            </div>

            <button
              className={styles.addToCartBtn}
              disabled={food.stock === 0}
              onClick={() => onAddToCart(food)}
            >
              {food.stock === 0
                ? "Stok Habis"
                : "+ Keranjang"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;