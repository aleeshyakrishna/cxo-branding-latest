import React from "react";
import styles from "./Header.module.css";
import Stepper from "../Steppers/Steppers.jsx";
import Connector from "../Connector/Connector.jsx";

const Header = () => {
  return (
    <div className={styles.header_main}>
      {/* <div className={styles.buttonDivs}> */}
        <div className={styles.buttonDivsContainer}>
          <h2 className={styles.headerForm}>Creating CXO Stories ...!!!</h2>
          <div>
            <br />
            <p>Empowering CXOs to Shine through Personal Branding & Career Advancement Services</p>
          </div>
          <div className={styles.buttonExplore}>
            <button>Create Your SuccessStory</button>
          </div>
          <Stepper />
        </div>
      {/* </div> */}
      <div className={styles.header_form_container}>
        <div className={styles.connector}>

        <Connector />
        </div>
      </div>
    </div>
  );
};

export default Header;
