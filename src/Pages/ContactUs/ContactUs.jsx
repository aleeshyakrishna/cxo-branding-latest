import React from 'react'
import styles from "./../ContactUs/ContactUs.module.css"
import { useNavigate } from 'react-router-dom'
const ContactUs = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.MainContentContactUs}>
      ContactUs
      <br/>
      <button onClick={()=>navigate('/')}>Back to home</button>
    </div>
  )
}

export default ContactUs