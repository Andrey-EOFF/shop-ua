
import React from "react";
import styles from "./NotFound.module.css"; 
const NotFound = () => {
  return (
    <div className={styles.not_found}>
      <h1>404 - Сторінку не знайдено</h1>
      <p>Вибачте, але такої сторінки не існує.</p>
    </div>
  );
};

export default NotFound;
