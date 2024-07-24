import React from 'react';
import styles from './BecomeNav.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from '../Form/Form';

function BecomeNav() {
  const scroll = (direction) => {
    const container = document.querySelector(`.${styles.scrollContent}`);
    const scrollAmount = 300; // Adjust as needed
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  };

  const items = [
    { text: 'Business Startup Ideas', target: '#jobModal' },
    { text: 'Community for CXOs' ,target: '#jobModal'},
    { text: 'Join our Meetup-group',target: '#jobModal' },
    { text: 'Become a Freelancer' ,target: '#jobModal'},
    { text: 'Become a Mentor',target: '#jobModal' },
    { text: 'Find a Mentor',target: '#jobModal' },
    { text: 'Find an Investor' ,target: '#jobModal'},
    { text: 'Become an Investor',target: '#jobModal' },
    { text: 'Find a cofounder' ,target: '#jobModal'},
    { text: 'Become a Cofounder',target: '#jobModal' },
    { text: 'CXO magazines',target: '#jobModal' },
    { text: 'Podcasts for CXOs',target: '#jobModal' },
    { text: 'Resume Samples',target: '#jobModal' },
    { text: 'News Updates Regarding CXO',target: '#jobModal' }
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
                data-bs-toggle={item.target ? 'modal' : ''}
                data-bs-target={item.target ? item.target : ''}
              >
                {item.text} {" "}|
              </span>
            </li>
          ))}
        </ul>
      </div>
      <button className={styles.scrollButton} onClick={() => scroll(1)}>&#9654;</button>
      <div className={styles.modalDiv}>
        <div className="modal fade" id="jobModal" tabIndex="-1" aria-labelledby="jobModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <Form />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomeNav;
