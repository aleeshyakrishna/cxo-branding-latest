import React, { useState } from 'react';
import styles from './BecomeNav.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from '../Form/Form';

function BecomeNav() {
  const [showForm, setShowForm] = useState(false);

  const scroll = (direction) => {
    const container = document.querySelector(`.${styles.scrollContent}`);
    const scrollAmount = 300; // Adjust as needed
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  };

  const items = [
    'Business Startup Ideas',
    'Community for CXOs',
    'Join our Meetup-group',
    'Become a Freelancer',
    'Become a Mentor',
    'Find a Mentor',
    'Find an Investor',
    'Become an Investor',
    'Find a cofounder',
    'Become a Cofounder',
    'CXO magazines',
    'Podcasts for CXOs',
    'Resume Samples',
    'News Updates Regarding CXO'
  ];

  return (
    <div className={styles.mainBecom}>
      <button className={styles.scrollButton} onClick={() => scroll(-1)}>&#9664;</button>
      <div className={styles.scrollContainer}>
        <ul className={styles.scrollContent}>
          {items.map((item, index) => (
            <li key={index} className={styles.navItem}>
              <span
                className={styles.navText}
                onClick={() => setShowForm(true)}
              >
                {item} {" "}|
              </span>
            </li>
          ))}
        </ul>
      </div>
      <button className={styles.scrollButton} onClick={() => scroll(1)}>&#9654;</button>
      
      {showForm && (
        <div className={styles.formPopup}>
          <div className={styles.formContent}>
            <button className={styles.closeButton} onClick={() => setShowForm(false)}>X</button>
            <Form />
          </div>
        </div>
      )}
    </div>
  );
}

export default BecomeNav;
