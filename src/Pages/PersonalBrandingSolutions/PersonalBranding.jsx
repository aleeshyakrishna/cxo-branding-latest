import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import styles from "./PersonalBranding.module.css";
import SlideImg1 from "./Images/logo-kit.png";
import SlideImg2 from "./Images/personalized-websites.png";
import SlideImg3 from "./Images/video-resumes.png";
import SlideImg4 from "./Images/video-testimonials.png";
import SlideImg5 from "./Images/youtube.png";
import Modal from 'react-modal';
import Form from '../../Components/Form/Form';
import { InlineWidget } from "react-calendly";
import { AiOutlineCloseCircle } from 'react-icons/ai'; // Import close icon

const PersonalBranding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

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
      <div className={styles.mainMain}>
        <Navbar />
        <div className={styles.main}>
          <h1>Personal Branding <br /><span className={styles.secondWord}>Solution</span></h1>
          <button className={styles.scheduleCalendly} onClick={() => openModal('calendly')}>Schedule a call</button>
        </div>
        <div className={styles.caption}>
          <p>Your personal brand is very vital to you professionally. <br />
            It is how you present yourself to potential employers. <br />We provide you with solutions
            to ensure that employers see you in the way you want them to!</p>
        </div>
        <div className={styles.slider}>
          <div className={styles.slideCard}>
            <img src={SlideImg1} alt="Logo ID Kits" />
            <h3>Logo ID Kits</h3>
          </div>
          <div className={styles.slideCard}>
            <img src={SlideImg2} alt="Personalized Websites" />
            <h3>Personalized Websites</h3>
          </div>
          <div className={styles.slideCard}>
            <img src={SlideImg3} alt="Video Resumes" />
            <h3>Video Resumes</h3>
          </div>
          <div className={styles.slideCard}>
            <img src={SlideImg4} alt="Video Testimonials" />
            <h3>Video Testimonials</h3>
          </div>
          <div className={styles.slideCard}>
            <img src={SlideImg5} alt="Your YouTube Channel" />
            <h3>Your YouTube Channel</h3>
          </div>
        </div>
        <div className={styles.getSupport}>
          <button onClick={() => openModal('form')}>Get Support</button>
        </div>
      </div>
      <Footer />
      <Modal
        isOpen={isModalOpen && modalContent === 'form'}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Get Service Form"
        ariaHideApp={false}
      >
        <Form />
        <button onClick={closeModal} className={styles.closeButton}>Close</button>
      </Modal>

      <Modal
        isOpen={isModalOpen && modalContent === 'calendly'}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Schedule a Call"
        ariaHideApp={false}
      >
        <span className={styles.closeButton} onClick={closeModal}>
          <AiOutlineCloseCircle />
        </span>
        <InlineWidget
          url="https://calendly.com/teammentoons/active-listeners"
          styles={{ width: '100%', height: '500px' }}
        />
      </Modal>
    </div>
  );
};

export default PersonalBranding;
