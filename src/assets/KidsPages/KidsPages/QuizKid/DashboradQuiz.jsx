import React from 'react';
import { QuizContent } from './QuizContent';
import styles from './dashboardquiz.module.css'; // Importing the CSS as a module

const quizTasks = [
  {
    title: 'tâche',
    subtasks: ['....', '....']
  },
  {
    title: 'tâche',
    subtasks: ['....']
  },
  {
    title: 'tâche',
    subtasks: ['....', '....', '....']
  }
];

export const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <div className={styles.userProfile}>
            <div className={styles.profileWrapper}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f2b87c93ad9f4bd9c985e01d606bf9685f73e5fbcedc7a7fc0bfa71de0f253?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="" className={styles.profileBackground} />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebf04b809675ac0999d7b17de04d8c0b68d1c7946b175e46223c875dd9adcc1c?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="User avatar" className={styles.avatar} />
              <div className={styles.userInfo}>
                <span className={styles.userName}>Sahar ketata</span>
                <span className={styles.userId}>159874</span>
              </div>
            </div>
            <div className={styles.menuItem}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/290cef6c15c12a101b530c879c3bfd708fe482335c051152e1e34f60872acf45?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="" className={styles.menuBackground} />
              <span>Mes cours</span>
            </div>
            <div className={styles.logoutWrapper}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40b0737096ea942cae585838c8391211c10fd76ca8769a843e190a644c18cb4?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="Logout icon" className={styles.logoutIcon} />
              <span tabIndex="0" role="button" className={styles.logoutText}>Log out</span>
            </div>
          </div>
        </aside>

        <main className={styles.mainContent}>
          <div className={styles.quizWrapper}>
            <div className={styles.quizHeader}>
              <h1 className={styles.quizTitle}>Quiz</h1>
              <div className={styles.quizContent}>
                <QuizContent tasks={quizTasks} />
              </div>
            </div>
            <div className={styles.quizImageContainer}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/73675ca0c2e5026303b6fb1800fecc8ff4b3bb3678f9c92158c9e8d2d712420a?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb"
                alt="Quiz illustration"
                className={styles.quizImage}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
