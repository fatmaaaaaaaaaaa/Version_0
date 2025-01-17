import React from 'react';
import CircleDecoration from './CircleDecoration';
import styles from './math.module.css';
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
    <div className={styles.topicContainermath}>
      <div className={styles.mainCardmath}>
        <div className={styles.decorationGroupmath}>
          <CircleDecoration size={decorations[0]} />
          <div className={styles.decorationSubGroupmath}>
            <CircleDecoration size={decorations[1]} />
            <CircleDecoration size={decorations[2]} />
          </div>
        </div>
        <div className={styles.contentWrappermath}>
          <h2 className={styles.topicTitlemath}>Mathimatical</h2>
          <div className={styles.decorationWrappermath}>
            <CircleDecoration size={decorations[3]} />
            <CircleDecoration size={decorations[4]} />
            <div className={styles.photomath}><img src={science} alt='science' /> </div>
          </div>
        </div>
      </div>
      <div className={styles.scoreCardmath}>
        <CircleDecoration size={decorations[5]} />
        <div className={styles.scoreWrappermath}>
          <div className={styles.scoreContentmath}>
            <span className={styles.scoreValuemath}>20</span>
            <CircleDecoration size={decorations[6]} />
          </div>
          <CircleDecoration size={decorations[7]} />
        </div>
      </div>
    </div>
  );
};

export default MathTopic;
