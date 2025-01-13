import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from './components/SearchBar';
import { ClassesCard } from './components/ClassesCard';
import styles from './DashboardLayout.module.css';

const classes = [
  { name: 'Robotics', classe: '4éme' },
  { name: 'Aviation', classe: '4éme' },
  { name: 'Software', classe: '3éme' },
  { name: 'VR/XR ', classe: '6éme' }
];

export const DashboardClassesAdmin = () => {
  const navigate = useNavigate();

  const handleAddTeacher = (e) => {
    e.preventDefault();
    navigate(`/AjouterClasse`);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebarContent}>
        <div className={styles.sidebar}>
          <div className={styles.profileSection}>
            <div className={styles.profileImage} />
            <div className={styles.userName}>Samantha</div>
            <div className={styles.userEmail}>samantha@email.com</div>
          </div>
          <nav className={styles.navigation}>
            <button
              className={styles.navButton}
              onClick={() => handleNavigation('/AccountAdmin')}
            >
              Accounts
            </button>
            <button
              className={styles.navButton}
              onClick={() => handleNavigation('/ClubsAdmin')}
            >
              Clubs
            </button>
<button className={styles.navButton}
            onClick={() => handleNavigation('/ChaptersAdmin')}>Chapters</button>            
            <button className={styles.navButton}onClick={() => handleNavigation('/ClassesAdmin')}>Classes</button>
            <button className={styles.navButton}
                        onClick={() => handleNavigation('/QuizAdmin')}>Quiz</button>
          </nav>
        </div>
        <main className={styles.mainContent}>
          <header className={styles.header}>
            <h1 className={styles.greeting}>Hello Evano 👋🏼</h1>
            <SearchBar />
          </header>
          <section className={styles.clubsContainer}>
            <div className={styles.clubsHeader}>
              <h2 className={styles.clubsTitle}>All Classes</h2>
              <button
                className={styles.addButton}
                aria-label="Add new classes"
                onClick={handleAddTeacher}
              >
                +
              </button>
            </div>
            {classes.map((classItem, index) => (
              <ClassesCard
                key={index}
                schoolName={classItem.name}
                classe={classItem.classe}
              />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};
