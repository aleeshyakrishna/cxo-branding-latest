import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className={styles.header_main}>
        <div className={styles.header_text_container}>
          {/* <Link to="/Cxocofounder" className="hdr-img">
            <img  alt="" />
          </Link> */}
        </div>
        <div className={styles.buttonDivs}>

          <div className={styles.buttonDivsContainer}>
            <h2>Crafting CXO Success Stories !</h2>
            <div>
            <br/>
            <p>Empowering CXOs to Shine through Personal Branding & Career Advancement Services !!</p>
            </div>
            </div> 
          {/* <br /> */}

          {/* <Link><button >Start something on My Own!</button></Link> */}
        </div>
        {/* <div
          className={styles.header_txt}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h1>Creating </h1>
          <h1>CXO Stories</h1>
          <p>
            With our exceptional resume writing service, you can differentiate
            yourself from the competition <br />
            and make a lasting impact on potential employers.
          </p>
        </div> */}
      </div>

    </div>

  );
};

export default Header;
