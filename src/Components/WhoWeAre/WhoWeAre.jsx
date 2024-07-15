import React from 'react'
import styles from './../WhoWeAre/WhoWeAre.module.css'
import Video from './sources/VID-20200730-WA0056.mp4'
const WhoWeAre = () => {
  return (
    <div className={styles.buttonContent}>
      
      <h1>Who We Are</h1>

      <div className={styles.contentMain}>


        <div className={styles.contentProblems}>

          {/* <img src={CXO} alt="" /> */}

          <video
        className={styles.adaptationToMobile_yt_video}
        controls
      >
        <source src={Video}/>
        Your browser does not support the video tag.
      </video>

        </div>
        <div className={styles.contentProblems2}>
          <p>Just like you, we have a dream too. At Mentoring India, we dream to
             provide young talent like you, the guidance that you deserve to make your
              dreams come true. Our regular interaction with you, will help us build a
               strong bond where we match you with mentors who are pursuing the career that 
               you wish to be one day. This opportunity gives you the practical guidance which
                in course of time maximizes your strengths and brings about significant 
            changes for your own betterment and the betterment of the society as well.</p>
          <br />
          <button>learn more</button>


        </div>

      </div>

    </div>
  )
}

export default WhoWeAre