import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./savename.module.css";
import Kid from './Kid.png';
import School from './School.png';
import icon from './icon.png';

const SaveNamePage = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    // Redirige vers la page Dashboard
    navigate("/dashboard");
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.background}>
        <img src={School} alt="School" className={styles.schoolImage} />
        <img src={Kid} alt="Character" className={styles.characterImage} />
      </div>
      <div className={styles.loginCard}>
        <div className={styles.iconBg}>
          <img src={icon} alt="Character" className={styles.icon} />
        </div>
        <label htmlFor="matricule" className={styles.nameLabel}>Your Name:</label>
        <input type="text" id="matricule" className={styles.matriculeInput} />
        <button className={styles.loginButton} onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default SaveNamePage;
