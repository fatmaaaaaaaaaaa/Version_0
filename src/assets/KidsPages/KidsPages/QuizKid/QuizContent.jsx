import React from 'react';
import styles from './quizcontent.module.css'; // Importing CSS as a module

export const QuizContent = ({ tasks }) => {
  return (
    <div className={styles.quizContainer}>
      {tasks.map((task, index) => (
        <div key={index} className={styles.taskItem}>
          {`${index + 1}.${task.title}`}
          {task.subtasks.map((subtask, subIndex) => (
            <div key={subIndex} className={styles.subtaskItem}>
              {`${String.fromCharCode(97 + subIndex)})${subtask}`}
            </div>
          ))}
        </div>
      ))}
    </div>

  );
};
