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

          <Link to='our'> <button >Looking for job?</button> </Link> 
          <br />

          <Link to='branding'><button >Start something on My Own!</button></Link>
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
