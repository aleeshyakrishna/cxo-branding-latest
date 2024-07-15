import React from 'react'
import styles from './../Services/Services.module.css'
import ServiceCard from './../ServiceCard/ServiceCard'
import resumeWriting from './Images/resume-writing.png'
import jobSearchAdv from './Images/job-search-advice.png'
import personalBrading from './Images/personal-branding solutions.png'
import socialMedia from './Images/social-media-management.png'
const Services = () => {
    return (

        <div className={styles.Service}>
              <h1>Our services</h1>        
            <div className={styles.mainService}>
                
                <ServiceCard
                    icon={resumeWriting}
                    title="Resume Writing"
                    description="Children need encouragement and support, someone to talk to about their dreams. They deserve what they need, after all, they are our future. Our initiative focuses on students who are trying to reach out for career and skill-oriented guidance, but are being unable to do so."
                />
                 <ServiceCard
                    icon={jobSearchAdv}
                    title="Job Search Advice"
                    description="Children need encouragement and support, someone to talk to about their dreams. They deserve what they need, after all, they are our future. Our initiative focuses on students who are trying to reach out for career and skill-oriented guidance, but are being unable to do so."
                />
                 <ServiceCard
                    icon={personalBrading}
                    title="Personal Branding"
                    description="Children need encouragement and support, someone to talk to about their dreams. They deserve what they need, after all, they are our future. Our initiative focuses on students who are trying to reach out for career and skill-oriented guidance, but are being unable to do so."
                />
                <ServiceCard
                    icon={socialMedia}
                    title="Social Profile Management"
                    description="Children need encouragement and support, someone to talk to about their dreams. They deserve what they need, after all, they are our future. Our initiative focuses on students who are trying to reach out for career and skill-oriented guidance, but are being unable to do so."
                />
            </div>
        </div>
    )
}

export default Services