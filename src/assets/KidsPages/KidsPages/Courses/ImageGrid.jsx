import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './imagegrid.module.css';

const ImageGrid = ({ images }) => {
  const navigate = useNavigate();

  const handleClick = (isLocked) => {
    if (!isLocked) {
      navigate('/consulter'); // Redirige uniquement si le carré est ouvert
    }
  };

  return (
    <div className={styles.image}>
      <div className={styles.gridRow}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.gridColumn} ${image.isLocked ? styles.locked : ''}`}
            onClick={() => handleClick(image.isLocked)}
          >
            <img
              loading="lazy"
              src={image.src}
              alt={image.alt}
              className={styles.gridImage}
            />
            {image.isLocked && (
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
                alt="Lock icon"
                className={styles.lockIcon}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
