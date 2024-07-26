import React, { useState } from "react";
import styles from "./Header.module.css";
import Stepper from "../Steppers/Steppers.jsx";
import Profesional from "../../assets/Animations/Profesional.json";
import Prof from "./Images/prof.jpg";
import Lottie from 'react-lottie';
import ResumeCarosel from "../ResumeTemplates/ResumeCarosel.jsx";
import Resume2 from '../../Images/prof1.webp';
import Resume3 from '../../Images/prof2.webp';
import Form from "../Form/Form.jsx";
import { color } from "@mui/system";
import Modal from 'react-modal';

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

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
      width: '400px',
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
        <button>Become a Freelancer</button>
        <button>Find a Cofounder</button>
        <button>Find an Investor</button>
        <button>Find a Mentor</button>
        <button>Become an Investor</button>
        <button>Join Our Meetup Group</button>
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
          <div className={styles.splitsNews}>
            <p>Pricing</p>
            <p>About Us</p>
          </div>
          <div className={styles.splitsNewsContent}>
            <p>jhjfvujvujvujvujfvujfv</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
