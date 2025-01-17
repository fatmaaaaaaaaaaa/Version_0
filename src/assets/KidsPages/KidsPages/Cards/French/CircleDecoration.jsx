import React from 'react';
import styles from './french.module.css';

const CircleDecoration = ({ size }) => {
  return (
    <div
      className={styles.circleDecor2}
      style={{ width: size.width, height: size.height }}
      role="presentation2"
    />
  );
};

export default CircleDecoration;
