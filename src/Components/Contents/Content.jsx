import React from 'react'
import styles from './Content.module.css'
import { Link, animateScroll as scroll } from "react-scroll";
import CXO from './../../Images/professional3.jfif'
function Content() {
    return (
        <div className={styles.buttonContent}>
            
           

        <div className={styles.contentMain}>
        

            <div className={styles.contentProblems}>
           
                {/* <img src={CXO} alt="" /> */}
                
                <iframe
                    className={styles.adaptationToMobile_yt_video}
                    src="https://www.youtube.com/embed/xMAQJtqDrK0?si=LzDZLLuGqNJmTpHX"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

            </div>
            <div className={styles.contentProblems2}>
                <p>"Meet Sarah, a visionary CXO navigating her career path. In a
                    competitive corporate landscape, her journey isn't just about
                    professional accomplishments; it's about crafting a narrative that
                    defines her brand."</p>
                    <br/>
                    <button>learn more</button>


            </div>
            
        </div>
        
        </div>
                    

    )
}

export default Content