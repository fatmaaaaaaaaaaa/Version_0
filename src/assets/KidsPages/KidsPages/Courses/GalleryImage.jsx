import React from 'react';
import styles from './gallery.module.css';

export const GalleryImage = ({ src }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt=""
      className={styles.galleryImage}
      role="img"
      aria-label="Gallery item"
    />
  );
};
