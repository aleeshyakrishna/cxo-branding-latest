import React from 'react';
import styles from './../ServiceCard/ServiceCard.module.css';
// import resume from './Images/resume-writing.png'
import { useNavigate } from 'react-router-dom'

const Card = ({ icon, title, description,href }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(href);
  };
  return (
    <div className={styles.card}>
      <img className={styles.card_icon} src={icon}/>
      <h2 className={styles.card_title}>{title}</h2>
      <p className={styles.card_description}>{description}</p>
      <button onClick={handleClick} className={styles.card_link}>
        EXPLORE →
      </button>    </div>
  );
};

export default Card;
