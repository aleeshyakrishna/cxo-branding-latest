import React, { useState, useEffect } from 'react';
import Navbar from './../../Components/Navbar/Navbar.jsx';
import styles from "./ResumeWriting.module.css";
import ResumeCarosal from "../../Components/ResumeTemplates/ResumeCarosel.jsx";
import Footer from '../../Components/Footer/Footer.jsx';
import Form from "../../Components/Form/Form.jsx";
import Modal from 'react-modal';
import { InlineWidget } from "react-calendly";
import process from "./Images/process.png";
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ResumeWriting = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openCalendlyModal = () => setIsCalendlyOpen(true);
  const closeCalendlyModal = () => setIsCalendlyOpen(false);

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
      // zIndex:'9999'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: '999',
    },
  };

  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        <h1>Resume <span className={styles.secondWord}>Writing</span></h1>
        <button className={styles.scheduleCalendly} onClick={openCalendlyModal}>Schedule a call</button>
      </div>
      <div className={styles.mainMain}>
        <div className={styles.resumeSamples}>
          <div className={styles.sampleHeading}>
            <h2>View <span className={styles.secondWord}>samples</span></h2>
          </div>
          <div className={styles.CarosalResume}>
            <ResumeCarosal />
          </div>
          <button onClick={openModal}>Get Service</button>
        </div>
        <div className={styles.resumeSamples}>
          <div className={styles.sampleHeading}>
            <h2>Our <span className={styles.secondWord}>Process</span></h2>
          </div>
          <div className={styles.CarosalResumeImg}>
            <img src={process} alt="Process" />
          </div>
          <button onClick={openModal}>Get Service</button>
        </div>
      </div>
      <Footer />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Get Service Form"
        ariaHideApp={false}
      >
        <Form />
        {/* apiEndpoint="/resumeService" */}
        <button onClick={closeModal} className={styles.closeButton}>Close</button>
      </Modal>

      <Modal
        isOpen={isCalendlyOpen}
        onRequestClose={closeCalendlyModal}
        style={customStyles}
        contentLabel="Schedule a Call"
        ariaHideApp={false}
      >
        <span className={styles.closeButton} onClick={closeCalendlyModal}>
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

export default ResumeWriting;
