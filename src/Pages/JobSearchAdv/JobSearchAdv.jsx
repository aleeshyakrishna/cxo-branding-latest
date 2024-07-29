import React, { useEffect, useState } from 'react';
import styles from "./JobSeachAdv.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Img1 from "./Images/job-search.png";
import Img2 from "./Images/benefits.png";
import Footer from '../../Components/Footer/Footer';
import Modal from 'react-modal';
import { InlineWidget } from "react-calendly";
import { AiOutlineCloseCircle } from 'react-icons/ai'; // Import close icon

const JobSearchAdvice = () => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

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
      backgroundColor: '#fff',
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
        <button className={styles.scheduleCalendly} onClick={handleOpenModal}>Schedule a call</button>
      </div>
      <div className={styles.first}>
        <img src={Img1} alt="" />
        <p>Best opportunities go to people with right career<br /> strategy and who are well prepared.</p>
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
        <img src={Img2} alt="" />
      </div>
      <div className={styles.getSupport}>
        <button>Get Support</button>
      </div>
      <Footer />

      <Modal
        isOpen={openModal}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Schedule a Call"
        ariaHideApp={false}
      >
        <span className={styles.closeButton} onClick={handleCloseModal}>
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

export default JobSearchAdvice;
