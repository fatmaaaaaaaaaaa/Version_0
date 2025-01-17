import React from 'react';
import styles from './phy.module.css';  // Assurez-vous que le fichier CSS est un module

const CircleDecoration = ({ size }) => {
  return (
    <div
      className={styles.circleDecorPhy}  // Utilisation de la classe via styles
      style={{ width: size.width, height: size.height }}
      role="presentation1"
    />
  );
};

export default CircleDecoration;
