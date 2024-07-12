import React from 'react'
import styles from './Navbar.module.css'
import logo from "./NavbarImages/logo.png"
function Navbar() {
  return (
    <div>

      <div className={styles.mainHead}>
       
        <img src={logo} alt="" />
        
        <ul className={styles.list}>
          <li >Home</li>
          <li >Jobs</li>
          {/* <li>Message</li> */}
          <li >About</li>
          <li >Contact</li>
        </ul>

        <div className={styles.member}>
          <p>login</p>
          <p>signup</p>
        </div>
      </div>
    </div>

  )
}

export default Navbar