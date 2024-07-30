import React, { useState, useEffect } from 'react';
import styles from "./SocialProfile.module.css";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Modal from 'react-modal';
import { InlineWidget } from "react-calendly";
import Form from '../../Components/Form/Form'; // Import the Form component
import SocialMediaForm from '../../Components/SocialMediaForm/SocialMediaForm';
import { AiOutlineCloseCircle } from 'react-icons/ai'; // Import close icon

const SocialProfile = () => {
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  const handleOpenCalendlyModal = () => setIsCalendlyModalOpen(true);
  const handleCloseCalendlyModal = () => setIsCalendlyModalOpen(false);

  const handleOpenFormModal = () => setIsFormModalOpen(true);
  const handleCloseFormModal = () => setIsFormModalOpen(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      padding: '20px',
      backgroundColor: 'transparent',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      zIndex: '1000',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: '999',
    },
  };

  return (
    <div>
      <div className={styles.mainContainer}>
        <Navbar />
        <div className={styles.main}>
          <h1>Social Profile <br /><span className={styles.secondWord}>Management</span></h1>
          <button className={styles.scheduleCalendly} onClick={handleOpenCalendlyModal}>Schedule a call</button>
        </div>

        <div className={styles.caption}>
          <h2>Globalize your reach!</h2>
          <p>Portray your brand on social media outlets. Employers are constantly looking for you on social media</p>
        </div>
        <div className={styles.packageCard}>
          <div className={styles.card}>
            <h2>Basic</h2>
            <p>Portray your brand on social media outlets. 
              Employers are constantly looking for you on social media</p>
            <button>buy</button>
          </div>
          <div className={styles.card}>
            <h2>Premium</h2>
            <p>Portray your brand on social media outlets. Employers are constantly 
              looking for you on social media</p>
            <button>buy</button>
          </div>
          <div className={styles.card}>
            <h2>Pro</h2>
            <p>Portray your brand on social media outlets. 
              Employers are constantly looking for you on social media</p>
            <button>buy</button>
          </div>
        </div>
        <div className={styles.CardLite}>
          <div className={styles.cardDlg}>
            <p>“Stand out from those who compete with”</p>
          </div>
          <div className={styles.cardDlg}>
            <p>“Create communication with like minded people”</p>
          </div>
          <div className={styles.cardDlg}>
            <p>“Project yourself with the way you want your employers to see you”</p>
          </div>
        </div>
        <div className={styles.getSupport}>
          <button onClick={handleOpenFormModal}>Get Support</button>
        </div>
      </div>
      <br />
      <Footer />

      <Modal
        isOpen={isCalendlyModalOpen}
        onRequestClose={handleCloseCalendlyModal}
        style={customStyles}
        contentLabel="Schedule a Call"
        ariaHideApp={false}
      >
        <span className={styles.closeButton} onClick={handleCloseCalendlyModal}>
          <AiOutlineCloseCircle />
        </span>
        <InlineWidget
          url="https://calendly.com/teammentoons/active-listeners"
          styles={{ width: '100%', height: '500px' }}
        />
      </Modal>

      <Modal
        isOpen={isFormModalOpen}
        onRequestClose={handleCloseFormModal}
        style={customStyles}
        contentLabel="Get Support Form"
        ariaHideApp={false}
      >
        <span className={styles.closeButton} onClick={handleCloseFormModal}>
          <AiOutlineCloseCircle />
        </span>
        <SocialMediaForm />
        {/* <button onClick={closeModal} className={styles.closeButton}>Close</button> */}

      </Modal>
    </div>
  );
};

export default SocialProfile;
