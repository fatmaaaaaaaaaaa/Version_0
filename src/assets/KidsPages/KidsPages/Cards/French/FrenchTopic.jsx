import React from 'react';
import CircleDecoration from './CircleDecoration';
import styles from './french.module.css';
import french from './french.png';

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
    <div className={styles.topicContainer2}>
      <div className={styles.mainCard2}>
        <div className={styles.decorationGroup2}>
          <CircleDecoration size={decorations[0]} />
          <div className={styles.decorationSubGroup2}>
            <CircleDecoration size={decorations[1]} />
            <CircleDecoration size={decorations[2]} />
          </div>
        </div>
        <div className={styles.contentWrapper2}>
          <h2 className={styles.topicTitle2}>French</h2>
          <div className={styles.decorationWrapper2}>
            <CircleDecoration size={decorations[3]} />
            <CircleDecoration size={decorations[4]} />
            <div className={styles.photo2}><img src={french} alt='french' /></div>
          </div>
        </div>
      </div>
      <div className={styles.scoreCard2}>
        <CircleDecoration size={decorations[5]} />
        <div className={styles.scoreWrapper2}>
          <div className={styles.scoreContent2}>
            <span className={styles.scoreValue2}>20</span>
            <CircleDecoration size={decorations[6]} />
          </div>
          <CircleDecoration size={decorations[7]} />
        </div>
      </div>
    </div>
  );
};

export default MathTopic;
