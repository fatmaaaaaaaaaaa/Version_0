import React from 'react';
import CircleDecoration from './CircleDecoration';
import styles from './english.module.css';
import english from './english.png';
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
    <div className={styles.topicContainer3}>
      <div className={styles.mainCard3}>
        <div className={styles.decorationGroup3}>
          <CircleDecoration size={decorations[0]} />
          <div className={styles.decorationSubGroup3}>
            <CircleDecoration size={decorations[1]} />
            <CircleDecoration size={decorations[2]} />
          </div>
        </div>
        <div className={styles.contentWrapper3}>
          <h2 className={styles.topicTitle3}>Enslish</h2>
          <div className={styles.decorationWrapper3}>
            <CircleDecoration size={decorations[3]} />
            <CircleDecoration size={decorations[4]} />
            <div className={styles.photo3}><img src={english} alt='english' /></div>
          </div>
        </div>
      </div>
      <div className={styles.scoreCard3}>
        <CircleDecoration size={decorations[5]} />
        <div className={styles.scoreWrapper3}>
          <div className={styles.scoreContent3}>
            <span className={styles.scoreValue3}>19</span>
            <CircleDecoration size={decorations[6]} />
          </div>
          <CircleDecoration size={decorations[7]} />
        </div>
      </div>
    </div>
  );
};

export default MathTopic;
