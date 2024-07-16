import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from "./NavbarImages/logo.png"
function Navbar() {
  const navigate = useNavigate()
  return (
    <div>

      <div className={styles.mainHead}>
       <div style={{backgroundColor:'whitesmoke'}}>

        <img src={logo} alt="" />
       </div>
        
        <ul className={styles.list}>
          <li >Home</li>
          <li >Jobs</li>
          {/* <li>Message</li> */}
          <li >About</li>
          <li  onClick={()=>navigate('/contact')}>Contact</li>
          <li>signup</li>
        </ul>

        {/* <div className={styles.member}>
          
          <p>signup</p>
        </div> */}
      </div>
    </div>

  )
}

export default Navbar