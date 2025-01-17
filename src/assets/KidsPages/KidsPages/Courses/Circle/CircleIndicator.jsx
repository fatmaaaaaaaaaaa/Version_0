import React from 'react';
import { Circle } from './Circle';
import styles from './test.module.css';

export function CircleIndicator({ onClick }) {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.indicatorWrapper}>
        <div className={styles.circleGroup}>
          <Circle size="small" />
          <Circle size="medium" />
        </div>
        <div className={styles.numberWrapper}>
          <Circle size="large" />
          <div className={styles.number}>1</div>
        </div>
      </div>
    </div>
  );
}
export default CircleIndicator;
