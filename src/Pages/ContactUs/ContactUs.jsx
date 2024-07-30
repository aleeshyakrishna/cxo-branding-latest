import React,{useEffect} from 'react';
import styles from './ContactUs.module.css';
import Navbar from '../../Components/Navbar/Navbar';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
      <Navbar />
      <div className={styles.contactUsContainer}>
        <div className={styles.first}>
          <h1 className={styles.title}>GET IN TOUCH</h1>
          <p className={styles.contactInfo}>
            📞 Phone: +91 78928 58593<br />
            ✉️ Email: activelisteners@gmail.com<br />
            📍 Address: Domllur, Bengaluru
          </p>
        </div>
        <form className={styles.contactForm}>
          <input type="text" className={styles.inputField} placeholder="YOUR NAME *" required />
          <input type="email" className={styles.inputField} placeholder="YOUR EMAIL *" required />
          <input type="tel" className={styles.inputField} placeholder="YOUR PHONE *" required />
          <textarea className={styles.textareaField} placeholder="YOUR MESSAGE *" required></textarea>
          <button type="submit" className={styles.submitButton}>SEND MESSAGE</button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
