import React from 'react';
import styles from './gallery.module.css';
import star from './Star 3.png';

// Niveau atteint (nombre d'étoiles colorées)
const currentLevel = 3;

export const Gallery = () => {
  return (
    <div className={styles.global}>
      {Array(9).fill(0).map((_, index) => (
        <img
          key={index}
          src={star}
          className={`${styles.star} ${index < currentLevel ? styles.active : styles.inactive}`}
          alt="star"
        />
      ))}
    </div>
  );
};

export default Gallery;
