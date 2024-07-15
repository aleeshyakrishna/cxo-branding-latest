import React from 'react'
import styles from "./Footer.module.css"
import logo from './../../Images/newlogo.png'
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.imgDivLogo}>

      <img src={logo} className={styles.logoImg}/>
      {/* <input type="text" /> */}
      </div>
        {/* <h1>Footer</h1> */}
        <br/>
        <p>Careers</p>
        <p>contact Us</p>
        <p>privacy policy</p>
    </div>
  )
}

export default Footer