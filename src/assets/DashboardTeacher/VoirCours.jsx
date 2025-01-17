import React from 'react';
import styles from './VoirCours.module.css';
import image from './Group 237658.png';
import { useParams, useNavigate } from "react-router-dom";
import { ChapterItem } from './ChapterItem';
const chapters = [
    {
        iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2307a5b8bca501148f968bf86cdb1a220a3f8cf1943bcabfd64797f34c7611f?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b",

        title: "Quiz1",
        alt: "Nature chapter icon"
    },
    {
        iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d9c064ba1f67965c1294c8336c9ab20c15e1b4efa39947d1875a9a329ff683ac?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b",
        title: "Quiz2",
        alt: "Color chapter icon"
    }
];
function Classes() {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.sidebarContent}>
                <div className={styles.sidebar}>
                    <div className={styles.profileSection}>
                        <div className={styles.profileImage}  >
                            <img src={image} alt="Profile" />
                        </div>
                        <div className={styles.userName}>Samantha</div>
                        <div className={styles.userEmail}>samantha@email.com</div>
                    </div>
                    <nav className={styles.navigation}>
                        <button className={styles.navButton}>Classes</button>
                    </nav>
                    <div className={styles.logoutWrapper1}>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f40b0737096ea942cae585838c8391211c10fd76ca8769a843e190a644c18cb4?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb" alt="Logout icon" className={styles.logoutIcon1} />
                        <span tabIndex="0" role="button" className={styles.logoutText1}>Log out</span>
                    </div>
                </div>
                <main className={styles.mainContent}>
                    <div className={styles.header}>
                        <div className={styles.greeting}>Hello Evano 👋🏼,</div>
                        <div className={styles.searchBox}>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c5ef1e36abca11d6063e3a4ab39e22f1775dfce78d82af94045cafd90550086?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b"
                                className={styles.searchIcon}
                                alt="Search icon"
                            />
                            <input
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </div>
                    </div>
                    <div className={styles.main2}>
                        <h1 className={styles.title}>Chapitre 2: couleur</h1>
                        <button className={styles.addQuizButton} aria-label="Add Quiz" onClick={() => navigate("/quiz-teacher")}>
                            Ajouter Quize
                        </button>
                        {chapters.map((chapter, index) => (
                            <ChapterItem
                                key={index}
                                iconSrc={chapter.iconSrc}
                                title={chapter.title}
                                alt={chapter.alt}
                            />
                        ))}

                        <button className={styles.addQuizButton} aria-label="Add Quiz" onClick={() => navigate("/quiz-teacher")}>
                            Modifier quiz
                        </button> <br />
                        <button className={styles.addQuizButton} aria-label="Add Quiz" >
                            Supprimer quiz
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Classes;