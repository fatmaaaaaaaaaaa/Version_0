import React from 'react';
import styles from './science.module.css';  // Importation du CSS en tant que module

const CircleDecoration = ({ size }) => {
  return (
    <div
      className={styles.circleDecor}  // Utilisation du module CSS
      style={{ width: size.width, height: size.height }}
      role="presentation"
    />
  );
};

export default CircleDecoration;
