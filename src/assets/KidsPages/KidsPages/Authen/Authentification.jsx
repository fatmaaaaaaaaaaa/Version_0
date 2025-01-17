import React from 'react';
import styles from './loginpage.module.css'; // Importing CSS as a module
import Kid from './Kid.png';
import School from './School.png';

const LoginPage = () => {
  const handleJoinNow = () => {
    window.location.href = "/save-name";
  };

  return (
    <div className={styles.login}>
      <div className={styles.background1}>
        <img src={School} alt="School" className={styles.schoolImage1} />
        <img src={Kid} alt="Character" className={styles.characterImage1} />
      </div>
      <div className={styles.loginCard1}>
        <label htmlFor="matricule" className={styles.matriculeLabel1}>Matricule:</label>
        <input type="text" id="matricule" className={styles.matriculeInput1} />
        <button className={styles.loginButton1} onClick={handleJoinNow}>LOGIN</button>
      </div>
    </div>
  );
};

export default LoginPage;
