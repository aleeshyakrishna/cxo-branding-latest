import React, { useEffect, useState } from 'react';
import styles from "./JobSeachAdv.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Img1 from "./Images/job-search.png";
import Img2 from "./Images/benefits.png";
import Footer from '../../Components/Footer/Footer';
import Modal from 'react-modal';
import { InlineWidget } from "react-calendly";
import Form from '../../Components/Form/Form';
import { AiOutlineCloseCircle } from 'react-icons/ai'; // Import close icon

const JobSearchAdvice = () => {
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
      <Navbar />
      <div className={styles.main}>
        <h1>Job Search <span className={styles.secondWord}>Advice</span></h1>
        <button className={styles.scheduleCalendly} onClick={handleOpenCalendlyModal}>Schedule a call</button>
      </div>
      <div className={styles.first}>
        <img src={Img1} alt="Job Search" />
        <p>Best opportunities go to people with the right career<br /> strategy and who are well prepared.</p>
      </div>
      <div className={styles.second}>
        <div className={styles.benefits}>
          <h2>Benefits</h2>
          <ul>
            <li>Create employer persona.</li>
            <li>Foster leads & instant connections.</li>
            <li>Craft a biography for multiple mediums.</li>
          </ul>
        </div>
        <img src={Img2} alt="Benefits" />
      </div>
      <div className={styles.getSupport}>
        <button onClick={handleOpenFormModal}>Get Support</button>
      </div>
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
        <Form />
      </Modal>
    </div>
  );
};

export default JobSearchAdvice;
