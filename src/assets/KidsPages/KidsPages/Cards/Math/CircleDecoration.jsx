import React from 'react';
import styles from './math.module.css';

const CircleDecoration = ({ size }) => {
  return (
    <div
      className={styles.circleDecormath}
      style={{ width: size.width, height: size.height }}
      role="presentation"
    />
  );
};

export default CircleDecoration;
