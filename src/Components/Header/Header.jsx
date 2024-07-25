import React from "react";
import styles from "./Header.module.css";
import Stepper from "../Steppers/Steppers.jsx";
import Profesional from "../../assets/Animations/Profesional.json";
import Prof from "./Images/prof.jpg"
import Lottie from 'react-lottie';
import ResumeCarosel from "../ResumeTemplates/ResumeCarosel.jsx";
import Resume2 from '../../Images/prof1.webp'
import Resume3 from '../../Images/prof2.webp'
import { color } from "@mui/system";
const Header = () => {

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
        <h2 className={styles.headerForm}>Creating <span className={styles.cxoWord}>CXO</span> Stories</h2>
        <p>Empowering CXOs to Shine through Personal Branding & Career Advancement Services</p>
        <button>Create Your SuccessStory</button>
        <button>Explore CoFoundr</button>
        {/* <div className={styles.newsSplilts}>
              <div className={styles.split1}>
              <h5 style={{color:'white'}}>hi</h5>
              <img src={Resume2} alt="" />
              </div>
              <div className={styles.split2}>
              <img src={Resume3} alt="" />
              </div>
          </div> */}

      </div>
      <div className={styles.thoughs}>

        <button>Become a Mentor</button>
        <button>Become a Freelancer</button>
        <button>Find a Cofounder</button>
        <button>Find an Investor</button>
        <button>Find a Mentor</button>
        <button>Become an Investor</button>
        <button>Join Our Meetup Group</button>



      </div>

      <div className={styles.header_form_container}>
        <div style={{ 'color': 'white' }}>
          {/* <hr/> */}<br/>
          <marquee behavior="smooth" direction="right"><p>Resume Samples</p></marquee>
        </div>
        <div className={styles.caroselDiv}>
          <ResumeCarosel />
          <hr />
          <div className={styles.splitsNews}>
            <p>Pricing</p>
            <p>About Us</p>
            {/* <p>About CoFoundr</p>
            <p style={{ color: '#ccc' }}>Brows samples</p> */}
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
