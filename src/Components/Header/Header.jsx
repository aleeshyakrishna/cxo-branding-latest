import React from "react";
import styles from "./Header.module.css";
import Stepper from "../Steppers/Steppers.jsx";
import Profesional from "../../assets/Animations/Profesional.json";
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
        <h2 className={styles.headerForm}>Creating CXO Stories</h2>
        <p>Empowering CXOs to Shine through Personal Branding & Career Advancement Services</p>
          <button>Create Your SuccessStory</button>
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
      {/* <div className={styles.thoughs}>
        <button>become a mentor</button>
        <button>become a Cofounder</button>
      </div> */}
      
      <div className={styles.header_form_container}>
        <div className={styles.caroselDiv}>
          <hr/>
          <ResumeCarosel />
          <div style={{'color':'black'}}>
                  <marquee  behavior="smooth" direction="right"><p>Resume Samples</p></marquee>
        </div>   
        <hr/>     
        <div className={styles.splitsNews}>
           <p>Pricing</p>
           <p>Know more about Us</p>
           <p>About CoFoundr</p>
           <p style={{color:'#ccc'}}>brows samples</p>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
