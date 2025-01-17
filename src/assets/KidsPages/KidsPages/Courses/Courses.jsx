import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageGrid from './ImageGrid';
import styles from './courses.module.css';
import { Gallery } from './Gallery';
import CircleIndicator from './Circle/CircleIndicator';

const ScienceCourse = () => {
  const navigate = useNavigate();

  const handleCircleClick = () => {
    navigate('/consulter'); // Remplacez '/next-page' par l'URL de votre page cible
  };

  const courseImages = [
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bafb8d56ef5b14c2abce4f897b24ea59d65b3cecab0f2fff0f389ca0089effe9', alt: 'Science course material 2', isLocked: true },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6dab358ed84c7d01fa08593f6d42f03ff323461e16bfb89be5accf3f4d927f42', alt: 'Science course material 3', isLocked: true },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bdafa911dcef94bbc6e58e46f3bdb7205cd1c9cdaab6cbbab8d2bc6ec2577494', alt: 'Science course material 4', isLocked: true },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/347621d169666e6bb1c21ac10f71458655c433afaa77021604a59520463ef5c6', alt: 'Science course material 5', isLocked: true },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c17bea31655c341adbdfdb40d2fbe8a153f1383bcf2ec7d248d1148b73ade22', alt: 'Science course material 6', isLocked: true },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e230ee1fe455352070f86ba573ab10acff7e8240f0e4e692c6d99eb3f3bdac24', alt: 'Science course material 7', isLocked: true },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/720336a474cc7dbad7b9d2b4f10dc52a1dcc399060167d897dc9035919e5b501', alt: 'Science course material 8', isLocked: true }
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <div className={styles.userProfile}>
            <div className={styles.profileWrapper}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f2b87c93ad9f4bd9c985e01d606bf9685f73e5fbcedc7a7fc0bfa71de0f253" alt="" className={styles.profileBackground} />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebf04b809675ac0999d7b17de04d8c0b68d1c7946b175e46223c875dd9adcc1c" alt="User avatar" className={styles.avatar} />
              <div className={styles.userInfo}>
                <span className={styles.userName}>Sahar ketata</span>
                <span className={styles.userId}>159874</span>
              </div>
            </div>
            <div className={styles.menuItem}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/290cef6c15c12a101b530c879c3bfd708fe482335c051152e1e34f60872acf45" alt="" className={styles.menuBackground} />
              <span>Mes cours</span>
            </div>
            <div className={styles.logoutWrapper}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40b0737096ea942cae585838c8391211c10fd76ca8769a843e190a644c18cb4" alt="Logout icon" className={styles.logoutIcon} />
              <span tabIndex="0" role="button" className={styles.logoutText}>Log out</span>
            </div>
          </div>
        </aside>

        <main className={styles.mainContent}>
          <div className={styles.courseContainer}>
            <h1 className={styles.courseTitle}>Science - Course</h1>

            <Gallery />

            <div className={styles.courseGrid}>
              <div className={styles.line1}>
                <CircleIndicator onClick={handleCircleClick} className={styles.btn1} />
                <ImageGrid images={courseImages.slice(0, 2)} />
              </div>
              <div className={styles.line2}>
                <ImageGrid images={courseImages.slice(2, 5)} />
              </div>
              <div className={styles.line3}>
                <ImageGrid images={courseImages.slice(5)} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ScienceCourse;
