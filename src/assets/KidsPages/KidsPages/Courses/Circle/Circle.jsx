import React from 'react';
import styles from './test.module.css';

export function Circle({ size }) {
  const sizeClasses = {
    small: styles.smallCircle,
    medium: styles.mediumCircle,
    large: styles.largeCircle
  };

  return <div className={sizeClasses[size]} />;
}
