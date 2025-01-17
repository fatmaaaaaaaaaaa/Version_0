import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom"; // Import de useNavigate
import styles from './ListeDeClasse.module.css';
import image from './Group 237658.png';

const classDetailsData = {
    "Classe 1ere": ["Mathématiques", "Physique", "Chimie"],
    "Classe 4eme": ["Anglais", "Histoire", "Géographie"],
    "Classe 5eme": ["Biologie", "Informatique", "Arts"],
};

const studentData = [
    { name: "Karim Louati", matricule: "221025", levels: [1, 2, 3] },
    { name: "Sarah Ahmed", matricule: "221026", levels: [2, 4, 5] },
    { name: "Ali Ben Salem", matricule: "221027", levels: [1, 3] },
];

const levels = [
    { id: 1, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/195197072bd247cd53371282782b0ca906c71ef0b9590c6d0fa841fc9b004698?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b" },
    { id: 2, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f0d1dd606d1488a6088db75e345d760d74d96eef9a2ba64c682cc2415b3c3b4?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b" },
    { id: 3, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/195197072bd247cd53371282782b0ca906c71ef0b9590c6d0fa841fc9b004698?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b" },
    { id: 4, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7f0d1dd606d1488a6088db75e345d760d74d96eef9a2ba64c682cc2415b3c3b4?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b" },
    { id: 5, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f818958868966380347da4c304f497ea4144b0aa12718da38e30b9c9e4a1f1a?placeholderIfAbsent=true&apiKey=875c657f39b24f02b57f3f224a6dff5b" },
];


function ListeClasses() {
    const { className } = useParams(); // Récupérer le nom de la classe
    const navigate = useNavigate(); // Initialiser le hook useNavigate
    const [showAlert, setShowAlert] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                url: window.location.href,
            });
        }
    };

    const handleDelete = (matricule) => {
        alert(`Supprimé l'élève avec le matricule : ${matricule}`);
    };

    const handleAlertClick = () => {
        setShowAlert(true);
    };

    const handleAlertSubmit = () => {
        alert(`Valeur saisie : ${inputValue}`);
        setShowAlert(false);
        setInputValue("");
    };

    const handleAlertCancel = () => {
        setShowAlert(false);
        setInputValue("");
    };

    return (
        <div className={styles.container}>
            <div className={styles.sidebarContent}>
                <div className={styles.sidebar}>
                    <div className={styles.profileSection}>
                        <div className={styles.profileImage}>
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
                            <input type="search" placeholder="Search" aria-label="Search" />
                        </div>
                    </div>
                    <h1 className={styles.title}>{className}</h1>
                    <div className={styles.boutons}>
                        <button
                            className={styles.shareLink}
                            onClick={() => navigate("/ajouter-enfant")}
                            aria-label="Ajouter Enfant"
                        >
                            Ajouter Enfant
                        </button>
                        <button className={styles.shareLink} type="button" aria-label="Access Course" onClick={() => navigate("/cours")}>
                            Cours
                        </button>
                        <button
                            className={styles.shareLink}
                            onClick={handleAlertClick}
                        >
                            Partager Lien
                        </button>
                    </div>
                    <div className={styles.container2}>
                        <table className={styles.studentTable}>
                            <thead className={styles.tableHeader}>
                                <tr>
                                    <th className={styles.headerCell}>Nom Prénom</th>
                                    <th className={styles.headerCell}>Matricule</th>
                                    <th className={styles.headerCell}>Niveaux du cours</th>
                                    <th className={styles.headerCell}>Suppression</th>
                                </tr>
                            </thead>
                            <tbody className={styles.tableBody}>
                                {studentData.map((student) => (
                                    <tr className={styles.studentRow} key={student.matricule}>
                                        <td className={styles.studentCell}>{student.name}</td>
                                        <td className={styles.studentCell}>{student.matricule}</td>
                                        <td className={styles.levelIcons}>
                                            {student.levels.map((level) => (
                                                <img
                                                    key={level}
                                                    loading="lazy"
                                                    src={levels.find((l) => l.id === level)?.src}
                                                    className={styles.levelIcon}
                                                    alt={`Level ${level}`}
                                                />
                                            ))}
                                        </td>
                                        <td className={styles.studentCell}>
                                            <button onClick={() => handleDelete(student.matricule)}>Supprimer</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {showAlert && (
                        <div style={{
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            background: "#fff",
                            padding: "50px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            borderRadius: "10px",
                            zIndex: 1000,
                        }}>
                            <button
                                onClick={handleAlertCancel}
                                style={{
                                    position: "absolute",
                                    top: "10px",
                                    right: "10px",
                                    background: "transparent",
                                    border: "none",
                                    fontSize: "20px",
                                    cursor: "pointer",
                                    color: "#888",
                                }}
                            >
                                X
                            </button>
                            <h3>Voici la matricule</h3>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    marginBottom: "10px",
                                    border: "1px solid #ddd",
                                    borderRadius: "5px",
                                }}
                            />
                        </div>
                    )}

                </main>
            </div>
        </div>
    );
}

export default ListeClasses;
