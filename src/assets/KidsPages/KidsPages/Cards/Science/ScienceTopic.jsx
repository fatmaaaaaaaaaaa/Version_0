import React from 'react';
import CircleDecoration from './CircleDecoration';
import styles from './science.module.css';  // Importation du CSS en tant que module
import science from './science.png';

const decorations = [
  { width: '18px', height: '13px' },
  { width: '12px', height: '8px' },
  { width: '31px', height: '14px' },
  { width: '28px', height: '20px' },
  { width: '71px', height: '49px' },
  { width: '16px', height: '12px' },
  { width: '10px', height: '7px' },
  { width: '34px', height: '25px' }
];

const MathTopic = () => {
  return (
    <div className={styles.topicContainer}>
      <div className={styles.mainCard}>
        <div className={styles.decorationGroup}>
          <CircleDecoration size={decorations[0]} />
          <div className={styles.decorationSubGroup}>
            <CircleDecoration size={decorations[1]} />
            <CircleDecoration size={decorations[2]} />
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <h2 className={styles.topicTitle}>Science</h2>
          <div className={styles.decorationWrapper}>
            <CircleDecoration size={decorations[3]} />
            <CircleDecoration size={decorations[4]} />
            <div className={styles.photo}><img src={science} alt='science' /></div>
          </div>
        </div>
      </div>
      <div className={styles.scoreCard}>
        <CircleDecoration size={decorations[5]} />
        <div className={styles.scoreWrapper}>
          <div className={styles.scoreContent}>
            <span className={styles.scoreValue}>20</span>
            <CircleDecoration size={decorations[6]} />
          </div>
          <CircleDecoration size={decorations[7]} />
        </div>
      </div>
    </div>
  );
};

export default MathTopic;
