import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.header_main}>
        <div className={styles.buttonDivs}>
          <div className={styles.buttonDivsContainer}>
            <h2 className={styles.headerForm}>
              Crafting CXO Success Stories !
            </h2>
            <div>
              <br />
              <p className="">
                Empowering CXOs to Shine through Personal Branding & Career
                Advancement Services !!
              </p>
            </div>
            <div
              className={styles.ctaForm}
              onClick={() => navigate("/contact")}
            >
              Explore your journey of success with us!
              <KeyboardArrowRightIcon className={styles.ctaFormIcon} />
            </div>
          </div>

          {/* <br /> */}

          {/* <Link><button >Start something on My Own!</button></Link> */}
        </div>
        <div className={styles.header_form_container}>
          {/* <Link to="/Cxocofounder" className="hdr-img">
            <img  alt="" />
          </Link> */}

          {/* <Form /> */}
          <img src="https://storage.googleapis.com/limecube-live-c29b24b1/root/Blog/business-partners-illustration.jpg" />
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
