import React from 'react';
import styles from './../ServiceCard/ServiceCard.module.css';
// import resume from './Images/resume-writing.png'
const Card = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <img className={styles.card_icon} src={icon}/>
      <h2 className={styles.card_title}>{title}</h2>
      <p className={styles.card_description}>{description}</p>
      <a href="#" className={styles.card_link}>EXPLORE →</a>
    </div>
  );
};

export default Card;
