import React from 'react';
import styles from './Footer.module.css';
import logo from './../../Images/newlogo.png';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.imgDivLogo}>
        <img src={logo} alt="Company Logo" className={styles.logoImg} />
        <div style={{'font-color':'black'}}>
                  <marquee  behavior="smooth" direction="right"><p>Become a Mentor</p></marquee>
        </div>
      </div >
      
      <div>
        <div className={styles.belowFooterContents}>
        
          <div className={styles.newsletterFooter}>
            {/* <label className={styles.label} htmlFor="emailInput">Enter your email id*</label> */}
            <br /><br /><br />
            <p>Please subscribe to our newsletter</p>
            <input
              type="email"
              id="emailInput"
              className={styles.emailInput}
              placeholder="Your email address"
              aria-label="Email address"
            />
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>

          <div className={styles.contentsFooter}>
          
            <div>
            <br /><br /><br />
              <ul className={styles.FooterList}>
                <li onClick={() => navigate('/')}>Privacy Policy</li>
                <li onClick={() => navigate('/jobs')}>Customer Support</li>
                <li onClick={() => navigate('/about')}>Contact Us</li>

              </ul>
            </div>
            <div>
            <br /><br /><br />

              <ul className={styles.FooterList}>
                <li onClick={() => navigate('/')}>facebook</li>
                <li onClick={() => navigate('/jobs')}>linkedIn</li>
                <li onClick={() => navigate('/about')}>Twitter</li>

              </ul>
            </div>
            <div>
            <br /><br /><br />

              <ul className={styles.FooterList}>
               
                <li onClick={() => navigate('/')}>Become a Mentor</li>
                <li onClick={() => navigate('/jobs')}>Become a Mentor</li>
                <li onClick={() => navigate('/about')}>Become a Mentor</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
