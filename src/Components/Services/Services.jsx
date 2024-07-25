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
              <h1>OUR <span className={styles.cxoWord}>SERVICES</span></h1>        
            <div className={styles.mainService}>
                
                <ServiceCard
                    icon={resumeWriting}
                    title="Resume Writing"
                    description="Children need encouragement and support, someone to talk to about their dreams. They deserve what they need, after all, they are our future. Our initiative focuses on students who are trying to reach out for career and skill-oriented guidance, but are being unable to do so."
                />
                 <ServiceCard
                    icon={jobSearchAdv}
                    title="Job Search Advice"
                    description="Best opportunities go to people with right career strategy and who are well prepared."
                />
                 <ServiceCard
                    icon={personalBrading}
                    title="Personal Branding"
                    description="Your pesonal brand is very vital to you professionally. It is how you present yourself to potential employers. We provide you with solutions to ensure that employers see you in the way you want them to!"
                />
                <ServiceCard
                    icon={socialMedia}
                    title="Social Profile Management"
                    description="Portray your brand on social media outlets. Employers are constantly looking for you on social media ."
                />
            </div>
        </div>
    )
}

export default Services