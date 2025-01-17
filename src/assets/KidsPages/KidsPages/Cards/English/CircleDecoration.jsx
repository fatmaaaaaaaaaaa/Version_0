import React from 'react';
import styles from './english.module.css';

const CircleDecoration = ({ size }) => {
  return (
    <div
      className={styles.circleDecor3}
      style={{ width: size.width, height: size.height }}
      role="presentation3"
    />
  );
};

export default CircleDecoration;
