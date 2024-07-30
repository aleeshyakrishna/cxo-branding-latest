import React, { useState } from "react";
import styles from "./Header.module.css";
import Stepper from "../Steppers/Steppers.jsx";
import Profesional from "../../assets/Animations/Profesional.json";
import Lottie from 'react-lottie';
import ResumeCarosel from "../ResumeTemplates/ResumeCarosel.jsx";
import Form from "../Form/Form.jsx";
import Modal from 'react-modal';
import { InlineWidget } from "react-calendly";
import { AiOutlineCloseCircle } from 'react-icons/ai'; // Import close icon
import { border } from "@mui/system";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleOpenCalendly = () => setShowCalendly(true);
  const handleCloseCalendly = () => setShowCalendly(false);

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
      zIndex:'1000'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: '999',
    },
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Profesional,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className={styles.header_main}>
      <div className={styles.buttonDivsContainer}>
        <h2 className={styles.headerForm}>
          Creating <span className={styles.cxoWord}>CXO</span> Stories
        </h2>
        <p>Empowering CXOs to Shine through Personal Branding & Career Advancement Services</p>
        <button>Create Your SuccessStory</button>
        <button>Explore CoFoundr</button>
      </div>
      <div className={styles.thoughs}>
        <button onClick={handleOpenModal}>Become a Mentor</button>
        <button onClick={handleOpenModal}>Become a Freelancer</button>
        <button onClick={handleOpenModal}>Find a Cofounder</button>
        <button onClick={handleOpenModal}>Find an Investor</button>
        <button onClick={handleOpenModal}>Find a Mentor</button>
        <button onClick={handleOpenModal}>Become an Investor</button>
        <button onClick={handleOpenModal}>Join Our Meetup Group</button>
      </div>
      <Modal
        isOpen={openModal}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Become a Mentor Form"
        ariaHideApp={false}
      >
        <Form apiEndpoint="https://api.example.com/mentor" />
      </Modal>
      <div className={styles.header_form_container}>
        <div style={{ color: 'white' }}>
          <br />
          <marquee behavior="smooth" direction="right"><p>Resume Samples</p></marquee>
        </div>
        <div className={styles.caroselDiv}>
          <ResumeCarosel />
          <hr />
          <div className={styles.splitsNewsContent}>
            <button onClick={handleOpenCalendly}>Schedule A Free Call</button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showCalendly}
        onRequestClose={handleCloseCalendly}
        style={customStyles}
        contentLabel="Schedule a Call"
        ariaHideApp={false}
      >
        <span className={styles.closeButton} onClick={handleCloseCalendly}>
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

export default Header;
